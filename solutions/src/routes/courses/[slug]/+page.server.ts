import { courses } from "$lib/api/data";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ parent }) => {
  // TODO: API Call Here.
  // Use `courses` for preseeded data
  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/");
  }
}
