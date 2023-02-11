import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';
import { getModule } from "$lib/services/moduleService";
import type { Lesson, Module } from "$lib/db/types";
import { getLessons } from "$lib/services/lessonService";

export const load: PageServerLoad = async ({ params, parent }) => {

  const { slug } = params;
  const { user } = await parent();
  try {
    const module: Module = await getModule(Number(slug));
    const lessons: Lesson[] = await getLessons(module.id);

    if (!module) {
      throw error(404, "No Module")
    }
    return { module, lessons, user }
  } catch(err)
  {
    throw error(400, `Unprocessable Entity Error: ${err}`);
  }
}
