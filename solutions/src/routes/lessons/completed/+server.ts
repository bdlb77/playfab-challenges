import { SqliteDb } from "$lib/api/sqlite";
import type {  RequestEvent, RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  try {
    const { id } = await request.json();

    if (!id) {
      throw error(404, "Id is not Defined for Lesson.")
    }
    console.log({id})

    const db = new SqliteDb();
    const lessonResponse = db.updateLesson(id);

    if (lessonResponse?.status === "ok") {
      console.log("Successfully Updated!")
    }
    return json(lessonResponse);
  } catch(err)
  {
    console.error({err});
    throw error(400, "Could not Process Request.");
  }

}
