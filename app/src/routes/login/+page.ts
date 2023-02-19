import { page } from '$app/stores';

import { redirect } from '@sveltejs/kit';

export async function load({parent}) {
  // TODO: fix type here
  const { user } = await parent();
  if (user) {
    throw redirect(302, '/');
  }

  return {};
}
