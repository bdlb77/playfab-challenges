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

  const response = await fetch(`${BASE}/${LOGIN_PLAYFAB}`, opts);
  const json = await response.json();
  return json;
}

export const registerPlayFabUser = async (request: UserReq): Promise<Record<string, any>> => {
  const { username, email, password } = {...request};

  const opts: { method: string; headers: any; body: string } = {
    method: "POST",
    headers: {
      'X-App-Id': APP_ID,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, email })
  }

  const response = await fetch(`${BASE}/${REGISTER_USER}`, opts);
  const json = await response.json();
  return json;

}