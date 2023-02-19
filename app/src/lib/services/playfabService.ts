import { APP_ID, BASE, XRSERVER_API_SECRET, XRSERVER_API_KEY } from "../config";
const LOGIN_PLAYFAB = "/auth/LoginWithPlayFab";
const REGISTER_USER = "/auth/RegisterPlayFabUser";
const UPDATE_PLAYER_STATISTIC = "/server/UpdatePlayerStatistic"
const GET_ITEM_INVENTORY = "/server/GetItemInventory"
interface FetchOptions {
  method: string;
  headers: any;
  body: string
}

interface PlayFabResponse {
  code: number;
  message: string;
  success: boolean;
  data: Record<string, any>;
  params: Record<string, any>;
};

export interface IBadge {
  playfab: { ItemInstanceId: string; ItemClass: string; DisplayName: string; }
  data: {
    dataKey: string; dataVal: string; id: number
  }[]
}
interface PlayFabIntenvoryResponse extends PlayFabResponse {
  data: {
    Items: IBadge[]
  }
}

export const loginPlayFab = async (request: UserReq): Promise<Record<string, any>> => {
  const { username, password } = { ...request };

  console.log({ APP_ID })
  const opts: FetchOptions = {
    method: "POST",
    headers: {
      'X-App-Id': APP_ID,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  };

  const response = await fetch(`${BASE}/${LOGIN_PLAYFAB}`, opts);
  const json = await response.json();
  return json;
}

export const registerPlayFabUser = async (request: UserReq): Promise<Record<string, any>> => {
  const { username, email, password } = { ...request };

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
  const opts: FetchOptions = {
    method: "POST",
    headers: {
      'X-App-Id': APP_ID,
      'X-Api-Secret': XRSERVER_API_SECRET,
      'X-Api-Key': XRSERVER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ PlayFabId, StatisticName, Value })
  };
  const response = await fetch(`${BASE}/${UPDATE_PLAYER_STATISTIC}`, opts);
  const json = await response.json();
  return json;
}

export const getUserInventory = async (PlayFabId: string): Promise<PlayFabIntenvoryResponse> => {
  const opts: FetchOptions = {
    method: "POST",
    headers: {
      'X-App-Id': APP_ID,
      'X-Api-Secret': XRSERVER_API_SECRET,
      'X-Api-Key': XRSERVER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ PlayFabId })
  };
  const response = await fetch(`${BASE}/${GET_ITEM_INVENTORY}`, opts);
  const playFabRes: PlayFabIntenvoryResponse = await response.json();

  return playFabRes;
}
