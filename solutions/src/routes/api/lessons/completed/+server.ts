import { LessonModel } from "$db/models/lesson";
import type { RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';
import type { ICourse, ILesson, IModule } from "$lib/types";
import { checkAllLessonsCompleted, getModule, updateModuleCompleted } from "$lib/services/moduleService";
import { checkAllModulesCompleted, getCourse, updateCourseCompleted } from "$lib/services/courseService";
import { incrementUserStatistic } from "$lib/services/playfabService";
import { CourseModel } from "$db/models/course";
export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  try {
    const { id, playfabId } = await request.json();
    if (!id) {
      throw error(404, "Id is not Defined for Lesson.")
    }

    const updateLessonRes = await LessonModel.updateOne({ _id: id },
      {
        $set: { "completed": true }
      }
    )
    if (!updateLessonRes.acknowledged) {
      throw error(400, "Could Not Update Lesson.");
    }
    const lesson: ILesson | null = await LessonModel.findOne({ _id: id });

    if (!lesson) {
      throw error(404, "Could Not Find lesson after Update.");
    }
    const module: IModule | null = await getModule(lesson.module._id);

    if (!module) throw error(404, "Could not Find Module that Lesson belongs to.");

    /*
      Implementation Location for Updating User Statistic.
    */
    const course = await CourseModel.findById(module.course);
    let statisticName: string;
    console.log(`COURSE: ${course}`);
    switch (course.title) {
      case "Math":
        statisticName = "math_course";
        break;
      case "English":
        statisticName = "english_course";
        break;
      default:
        statisticName = "";
    }
    // increment User statistic.
    await incrementUserStatistic(playfabId, statisticName, 1);

    /*
      Implementation Location for Updating User Statistic.
    */

    const isCompleted = await checkAllLessonsCompleted(module);
    let updatedModule: IModule | null = null;

    if (isCompleted) {
      await updateModuleCompleted(module);
      updatedModule = await getModule(module._id);

      const course: ICourse | null = await getCourse(updatedModule.course._id);
      if (!course) throw error(404, "Could not find Course.");


      const isCourseComplete = await checkAllModulesCompleted(course)
      if (isCourseComplete) {
        await updateCourseCompleted(course);
      }

    }




    return json({ lesson, module: updatedModule });
  } catch (err) {
    console.error({ err });
    throw error(400, `Could not Process Request. ${err}`);
  }

}
