import type { Handle } from "@sveltejs/kit";
import { parse } from 'cookie';
import { startMongo } from "$db/mongo";

export const handle: Handle = async ({ event, resolve }) => {
  startMongo().then(() => console.log("Started Mongo..."));

  const cookies = parse(event.request.headers.get('cookie') || '');
  const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');

  const parsedJwt = jwt ? JSON.parse(jwt) : null;
  if (!parsedJwt || parsedJwt.error) {
    event.locals.user = null;
  } else {
    const playfabId = parsedJwt.LoginResult.PlayFabId;
    event.locals.user = { playfabId };
  }
  console.log("EVENT LOCALS:", event.locals)
  return await resolve(event);
};
