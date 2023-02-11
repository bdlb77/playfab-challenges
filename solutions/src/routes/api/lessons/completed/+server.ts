import type { RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';
import { checkAllLessonsCompleted, getModule, updateModuleCompleted } from "$lib/services/moduleService";
import { checkAllModulesCompleted, getCourse, updateCourseCompleted } from "$lib/services/courseService";
import { incrementUserStatistic } from "$lib/services/playfabService";
import { updateLessonCompleted } from "$lib/services/lessonService";
import type { Database } from "$lib/db/database.types";
import type { Module } from "$lib/db/types";
export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  try {
    const { id, playfabId } = await request.json();
    if (!id) {
      throw error(404, "Id is not Defined for Lesson.")
    }

    const lesson = await updateLessonCompleted(id);

    let module = await getModule(lesson.module_id);
    const course = await getCourse(module.course_id);

    let statisticName: string;
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

    const isCompleted = await checkAllLessonsCompleted(module.id);
    if (isCompleted) {
      module = await updateModuleCompleted(module.id);



      const isCourseComplete = await checkAllModulesCompleted(course.id)
      if (isCourseComplete) {

        await updateCourseCompleted(course.id);

        /*
          Implementation Location for Updating User Statistic.
        */
        let finishedStatisticName: string;
        switch (course.title) {
          case "Math":
            finishedStatisticName = "finished_math_course";
            break;
          case "English":
            finishedStatisticName = "finished_english_course";
            break;
          default:
            finishedStatisticName = "";
        }
        // Move User to finish_course
        await incrementUserStatistic(playfabId, finishedStatisticName, 1);

        /*
          Implementation Location for Updating User Statistic.
        */

      }

    }




    return json({ lesson, module });
  } catch (err) {
    console.error({ err });
    throw error(400, `Could not Process Request. ${err}`);
  }

}
