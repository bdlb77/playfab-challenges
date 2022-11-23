import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  // TODO: API Call Here.
  const { user } = await parent();
  if (!user) {
    throw redirect(303, "/login");
  }
}
