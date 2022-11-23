import { get } from "svelte/store";
import type { PageLoad } from "./$types";
import moduleStore from "$lib/stores/moduleStore";
import lessonsStore from "$lib/stores/lessonStore";
export const load: PageLoad = async ({ params, parent }) => {
  const { moduleId } = params;

  const modules = get(moduleStore);
  const lessons = get(lessonsStore)
  const module = modules.filter(module => module.id === parseInt(moduleId))[0];
  const filteredLessons = lessons.filter(lesson => lesson.moduleId === module.id);
  return { module, filteredLessons };
}
