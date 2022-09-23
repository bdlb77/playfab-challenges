import { APP_ID, BASE } from "../config";
const LOGIN_PLAYFAB: string = "/auth/LoginWithPlayFab";
const REGISTER_USER: string = "/auth/RegisterPlayFabUser";

export const loginPlayFab = async (request: UserReq): Promise<Record<string,any>> => {
  const { username, password } = { ...request} ;

  const opts: { method: string; headers: any; body: string} = {
    method: "POST",
    headers: {
      'X-App-Id': APP_ID,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  };
  opts.headers['X-App-Id'] = APP_ID;

  const response = await fetch(`${BASE}/${LOGIN_PLAYFAB}`, opts);
  const json = await response.json();
  console.log({json});
  return json;
}
