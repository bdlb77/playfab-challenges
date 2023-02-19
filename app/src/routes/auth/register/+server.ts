import type { RequestEvent, RequestHandler } from './$types'
import { respond } from "../_respond";
import { registerPlayFabUser } from '$lib/services/playfabService';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {

  /*
    IMPLEMENT ME
    Hint. Take a look at `/auth/login/server.ts` API endpoint
  */
}
