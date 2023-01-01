import { ModuleModel } from "$db/models/module";
import type { ILesson, IModule } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, parent }) => {

  const { slug } = params;
  const { user } = await parent();
  try {
    const moduleData = await ModuleModel.findOne<IModule>({_id: slug}).populate("lessons");
    if (!moduleData) {
      throw error(404, "No Module")
    }
    const moduleJSON = JSON.stringify(moduleData);
    const module: IModule = JSON.parse(moduleJSON);
    const lessons: ILesson[] = module.lessons || []
    return { module, lessons, user }
  } catch(err)
  {
    throw error(400, `Unprocessable Entity Error: ${err}`);
  }
}
