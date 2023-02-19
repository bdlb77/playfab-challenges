import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getUserInventory } from "$lib/services/playfabService";
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

  // TODO: IMPLEMENT THIS!
  // const playFabRes = await getUserInventory(user.playfabId);

  // if (playFabRes.code !== 200) {
  //   throw error(playFabRes.code, playFabRes.message);
  // };

  // let { data: { Items: badges} } = playFabRes;
  const badges = [];
  return {
    user, badges
  }
}
