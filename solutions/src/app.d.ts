// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string;
    user?: User | null;
  }

  interface PageData {
    user: any;
  }

  // interface Session {
  // }


  // interface PageError {}

  // interface Platform {}
}
