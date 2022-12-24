import { LessonModel } from "$db/models/lesson";
import type {  RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';
import type { ILesson } from "$lib/types";

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
    console.log({lesson})
    if (!lesson) {
      throw error(404, "Could Not Find lesson after Update.");
    }
    return json({lesson})
  } catch(err)
  {
    console.error({err});
    throw error(400, "Could not Process Request.");
  }

}
