/** @type {import('./$types').LayoutServerLoad} */

import { SqliteDb } from "$lib/api/sqlite";

export async function load({ locals }: any) {
  const db = new SqliteDb();
  const courses = db.getAllCourses();
  const modules = db.getModules();
  const lessons = db.getLessons();


  return {
   ...locals,
   modules,
   lessons,
   courses
  };
}
