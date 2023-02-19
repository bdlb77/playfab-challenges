import { getCourses } from "$lib/services/courseService";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  // TODO: API Call Here.
  const { user } = await parent();
  const courses = await getCourses()

  if (!user) {
    throw redirect(303, "/login");
  }
  return {
    courses
  }
}
