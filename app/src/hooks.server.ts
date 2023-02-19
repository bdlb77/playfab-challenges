import type { Handle } from "@sveltejs/kit";
import "$lib/db/db"
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {

  const cookies = parse(event.request.headers.get('cookie') || '');
  const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');

  const parsedJwt = jwt ? JSON.parse(jwt) : null;
  if (!parsedJwt || parsedJwt.error) {
    event.locals.user = null;
  } else {
    const playfabId = parsedJwt.LoginResult.PlayFabId;
    event.locals.user = { playfabId };
  }

  // THIS WILL PREVENT FROM LOGGING OUT UNTIL REMOVE
  event.locals.user = { playfabId: "SAMPLE" };
  console.log("EVENT LOCALS:", event.locals)
  return await resolve(event);
};
