import { getCourses } from "$lib/api/sanity";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ parent }) => {
  // TODO: API Call Here.
  const courses = await getCourses();
  console.log({courses})
  // Use `courses` for preseeded data
  const { user } = await parent();
  if (!user) {
    throw redirect(303, "/login");
  }
  return { courses, user };
}
