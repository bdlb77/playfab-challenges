import { page } from '$app/stores';

import { redirect } from '@sveltejs/kit';

export async function load() {
  // TODO: fix type here
  if (page.user) {
    throw redirect(302, '/');
  }

  return {};
}
