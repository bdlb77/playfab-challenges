const BASE: string = "https://demo.playfab.tv";
const LOGIN_PLAYFAB: string = "/auth/LoginWithPlayFab";
const REGISTER_USER: string = "/auth/RegisterPlayFabUser";
const appId = "v0u9yv"

export const loginPlayFab = async (request: UserReq): Promise<Record<string,any>> => {
  const { username, password } = { ...request} ;

  const opts: { method: string; headers: any; body: string} = {
    method: "POST",
    headers: {
      'X-App-Id': appId,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  };
  opts.headers['X-App-Id'] = appId;

  const response = await fetch(`${BASE}/${LOGIN_PLAYFAB}`, opts);
  const json = await response.json();
  console.log({json});
  return json;
}
