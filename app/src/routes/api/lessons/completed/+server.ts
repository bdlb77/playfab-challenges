import type { RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';
import { checkAllLessonsCompleted, getModule, updateModuleCompleted } from "$lib/services/moduleService";
import { checkAllModulesCompleted, updateCourseCompleted } from "$lib/services/courseService";
import { incrementUserStatistic } from "$lib/services/playfabService";
import { updateLessonCompleted } from "$lib/services/lessonService";
import { getStatisticName } from "$lib/utils";
export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  try {
    const { id, playfabId } = await request.json();

    if (!id) {
      throw error(404, "Id is not Defined for Lesson.")
    }
    const lesson = await updateLessonCompleted(id);

    console.log({ lesson })
    let { module } = lesson;
    const { module: { course } } = lesson;


    const statisticName: string = getStatisticName(course.title, false);
    // increment User statistic.
    await incrementUserStatistic(playfabId, statisticName, 1);

    const isCompleted = await checkAllLessonsCompleted(module.id);
    if (isCompleted) {
      await updateModuleCompleted(module.id);



      const isCourseComplete = await checkAllModulesCompleted(course.id)
      if (isCourseComplete) {

        await updateCourseCompleted(course.id);

        const finishedStatisticName: string = getStatisticName(course.title, isCompleted)
        // Move User to finish_course
        await incrementUserStatistic(playfabId, finishedStatisticName, 1);

      }

    }
    // get updated Module
    module = await getModule(module.id);
    return json({ lesson, module });
  } catch (err) {
    console.error({ err });
    throw error(400, `Could not Process Request. ${err}`);
  }

}
