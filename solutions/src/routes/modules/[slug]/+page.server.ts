import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';
import { getModule } from "$lib/services/moduleService";

export const load: PageServerLoad = async ({ params, parent }) => {

  const { slug } = params;
  const { user } = await parent();
  try {
    const module = await getModule(Number(slug));

    if (!module) {
      throw error(404, "No Module")
    }
    return { module, user }
  } catch(err)
  {
    throw error(400, `Unprocessable Entity Error: ${err}`);
  }
}
