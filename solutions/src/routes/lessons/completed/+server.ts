import { lessons } from "$db/models/lesson";
import type {  RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  try {
    const { id } = await request.json();

    if (!id) {
      throw error(404, "Id is not Defined for Lesson.")
    }

    const updateLessonRes = await lessons.updateOne({ _id: id},
      {
        $set: { "completed": true}
      }
    )

    if (updateLessonRes.acknowledged) {
      console.log("Successfully Updated!")
    }

    return json({}, {status: 200});
  } catch(err)
  {
    console.error({err});
    throw error(400, "Could not Process Request.");
  }

}
