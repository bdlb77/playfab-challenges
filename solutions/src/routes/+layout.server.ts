/** @type {import('./$types').LayoutServerLoad} */

export async function load({ locals }: any) {
  console.log({locals});
  return {
    ...locals
  };
}
