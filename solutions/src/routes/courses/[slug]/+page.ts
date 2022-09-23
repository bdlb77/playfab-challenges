import type { PageLoad } from "./$types";
import { courses } from "$lib/api/data";
import { redirect } from "@sveltejs/kit";

export const load: PageLoad = async ({ params, parent }) =>{
  const  { slug } = params;
  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/login");
  }
  const course = courses.find(course => course.title === slug);

  return { course };
}
