import type { Handle } from "@sveltejs/kit";
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

  return await resolve(event);
};

