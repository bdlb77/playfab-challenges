import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  // TODO: fix type here
  const { user } = await parent();
  if (user) {
    throw redirect(302, '/');
  }

  return {
    user
  };
}
