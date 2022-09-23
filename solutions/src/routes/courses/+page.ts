// src/routes/some/where/+page.js

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  const { user } = await parent();
  // ...
}
