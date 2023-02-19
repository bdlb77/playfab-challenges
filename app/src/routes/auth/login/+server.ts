
import type { RequestEvent, RequestHandler } from './$types'
import { respond } from "../_respond";
import { loginPlayFab } from '$lib/services/playfabService';

declare global {
  type User = {
    playfabId: string;
  }
  type UserReq = {
    username?: string;
    email? :string;
    password: string;
  }
  type PlayFabRes = {
    code: number;
    message: string;
    data: Record<string, object | string>;
    success: boolean;
  }
}

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  const json = await request.json();
  const user: UserReq = {
    username: json.username,
    password: json.password
  }
  // post to API for Login
  const playfabRes = await loginPlayFab(user);
  const responseObj: PlayFabRes = {
    code: playfabRes.code,
    message: playfabRes.message,
    data: playfabRes.data,
    success: playfabRes.success
  };

  return respond(responseObj);
}
