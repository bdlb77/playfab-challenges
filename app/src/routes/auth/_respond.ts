import { error, json } from "@sveltejs/kit";

export function respond(res: PlayFabRes) {
  if (res.code === 400) {
    throw error(res.code, res.message);
  }

  // TODO: REMOVE THIS ONCE YOU"VE INTEGRATED PLAYFAB SIGNIN
  const value = Buffer.from(JSON.stringify(res.data)).toString('base64');

  return json(res, {
    headers: {
      'set-cookie': `jwt=${value}; Path=/; HttpOnly`
    }
  });
}
