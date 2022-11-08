import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { SqliteDb } from "../lib/api/sqlite";

export const load: PageLoad = async ({ parent }) => {
  // TODO: API Call Here.
  const db = new SqliteDb();
  const courses = db.getAllCourses();
  // Use `courses` for preseeded data
  const { user } = await parent();
  if (!user) {
    throw redirect(303, "/login");
  }
  return { courses, user };
}
