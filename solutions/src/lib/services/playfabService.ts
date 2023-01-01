import { APP_ID, BASE, APP_SECRET } from "../config";
const LOGIN_PLAYFAB = "/auth/LoginWithPlayFab";
const REGISTER_USER = "/auth/RegisterPlayFabUser";
const UPDATE_PLAYER_STATISTIC  = "/server/UpdatePlayerStatistic"

interface FetchOptions {
  method: string;
  headers: any;
  body: string
}
export const loginPlayFab = async (request: UserReq): Promise<Record<string,any>> => {
  const { username, password } = { ...request} ;

  console.log({APP_ID})
  const opts: FetchOptions = {
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

  const opts: FetchOptions = {
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


export const incrementUserStatistic = async (PlayFabId: string, StatisticName: string, Value: number): Promise<Record<string, any>> => {
  console.log({PlayFabId, StatisticName, Value})
  const opts: FetchOptions = {
    method: "POST",
    headers: {
      'X-App-Id': APP_ID,
      'X-Api-Secret': APP_SECRET,
      'X-Api-Key': "grvc27dwi",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({PlayFabId, StatisticName, Value})
  };
  const response = await fetch(`${BASE}/${UPDATE_PLAYER_STATISTIC}`, opts);
  const json = await response.json();
  console.log({json})
  return json;
}
