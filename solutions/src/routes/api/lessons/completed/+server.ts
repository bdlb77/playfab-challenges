import { LessonModel } from "$db/models/lesson";
import type {  RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';
import type { ILesson, IModule } from "$lib/types";
import { ModuleModel } from "$db/models/module";
import { checkAllLessonsCompleted, getModule, updateModuleCompleted } from "$lib/services/moduleService";

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  try {
    const { id }  = await request.json();
    if (!id) {
      throw error(404, "Id is not Defined for Lesson.")
    }

    const updateLessonRes = await LessonModel.updateOne({ _id: id},
      {
        $set: { "completed": true}
      }
    )
    if (!updateLessonRes.acknowledged) {
      throw error(400, "Could Not Update Lesson.");
    }
    const lesson: ILesson | null = await LessonModel.findOne({_id: id});

    if (!lesson) {
      throw error(404, "Could Not Find lesson after Update.");
    }
    const module: IModule | null = await getModule(lesson.module._id);
    if (!module) throw new Error("Could not Find Module that Lesson belongs to.");

    const isCompleted = await checkAllLessonsCompleted(module);
    console.log({isCompleted})
    let updatedModule: IModule | null = null;

    if (isCompleted) {
      await updateModuleCompleted(module);
      updatedModule = await getModule(module._id);
    }


    return json({lesson, module: updatedModule});
  } catch(err)
  {
    console.error({err});
    throw error(400, `Could not Process Request. ${err}`);
  }

}
