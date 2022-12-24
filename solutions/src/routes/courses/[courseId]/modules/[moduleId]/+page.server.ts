import { ModuleModel } from "$db/models/module";
import type { ILesson, IModule } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const { moduleId } = params;
  try {
    const moduleData = await ModuleModel.findOne<IModule>({id: moduleId}).populate("lessons");
    if (!moduleData) {
      throw error(404, "No Module")
    }
    const moduleJSON = JSON.stringify(moduleData);
    const module: IModule = JSON.parse(moduleJSON);
    const lessons: ILesson[] = module.lessons || []
    return { module, lessons }
  } catch(err)
  {
    throw error(400, `Unprocessable Entity Error: ${err}`);
  }
}
