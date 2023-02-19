// import { APP_ID, BASE, XRSERVER_API_SECRET, XRSERVER_API_KEY } from "../config";


interface FetchOptions {
  /*

  IMPLEMENT ME!!

  */
}

interface PlayFabResponse {
  /*

  IMPLEMENT ME!!

  */
};

export interface IBadge {
  /*

  IMPLEMENT ME!!

  */
}
interface PlayFabIntenvoryResponse extends PlayFabResponse {
    /*

  IMPLEMENT ME!!

  */
}

export const loginPlayFab = async (request: UserReq): Promise<Record<string, any>> => {
  /*

  IMPLEMENT ME!!

  */
}

export const registerPlayFabUser = async (request: UserReq): Promise<Record<string, any>> => {
  /*

  IMPLEMENT ME!!

  */
}


export const incrementUserStatistic = async (PlayFabId: string, StatisticName: string, Value: number): Promise<Record<string, any>> => {
  /*

  IMPLEMENT ME!!

  */
}

export const getUserInventory = async (PlayFabId: string): Promise<PlayFabIntenvoryResponse> => {
  /*

  IMPLEMENT ME!!

  */
}
