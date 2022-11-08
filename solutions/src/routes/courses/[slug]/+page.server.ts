import type { PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { SqliteDb } from "$lib/api/sqlite";

export const load: PageLoad = async ({ params, parent }) =>{
  const  { slug } = params;
  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/login");
  }
  const db = new SqliteDb();
  const course = db.getSingleCourse(slug);
  console.log({course})

  return { course };
}
