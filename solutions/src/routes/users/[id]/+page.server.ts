import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent, params }) => {
  const { id }: { id: string} = params;

  // TODO: API Call Here.
  const { user } = await parent();
  if (!user) {
    throw redirect(303, "/login");
  }

  if (id !== user.playfabId) {
    throw redirect(303, "/")
  }

  return {
    user
  }
}
