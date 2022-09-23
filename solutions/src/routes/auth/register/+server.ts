import type { RequestEvent, RequestHandler } from './$types'
import { respond } from "../_respond";
import { registerPlayFabUser } from '$lib/services/playfabService';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  const json = await request.json();
  const user: UserReq = {
    username: json.username,
    password: json.password,
    email: json.email
  }
  // post to API for Login
  const playfabRes = await registerPlayFabUser(user);
  console.log({playfabRes})
  const responseObj: PlayFabRes = {
    code: playfabRes.code,
    message: playfabRes.message,
    data: playfabRes.data,
    success: playfabRes.success
  };

  return respond(responseObj);
}
