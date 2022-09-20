import { courses } from "$lib/api/data";
import type { PageServerLoad, Actions } from "./$types";


export const load: PageServerLoad = async () => {
  // TODO: API Call Here.
  // Use `courses` for preseeded data

  return { courses };
}
