import type {  PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { getCourse } from "$lib/services/courseService";

export const load: PageServerLoad = async ({ params, parent }) => {
  const { slug } = params;

  // check if stores exist.
  const course = await getCourse(slug);

  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/login");
  }
  return { course  }
}
