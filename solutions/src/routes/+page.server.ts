import { courses } from "$lib/api/data";
import type { PageServerLoad, Actions } from "./$types";


export const load: PageServerLoad = async ({ parent }) => {
  // TODO: API Call Here.
  // Use `courses` for preseeded data
  const { user } = await parent();
  return { user };
}
