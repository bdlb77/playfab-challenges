import type { PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import coursesStore from "$lib/stores/courseStore";
import moduleStore from "$lib/stores/moduleStore";
import { get } from "svelte/store";
export const load: PageLoad = async ({ params, parent }) =>{
  const  { courseId } = params;
  const courses = get(coursesStore);
  const modules = get(moduleStore);
  // check if stores exist.

  const course = courses.filter(course => parseInt(courseId) === course.id)[0];
  console.log({course})
  const filteredModules = modules.filter(module => module.courseId === course.id);
  console.log({filteredModules})
  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/login");
  }
  return { filteredModules, course };
}
