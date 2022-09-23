import type { RequestHandler } from '@sveltejs/kit';
import { json } from "@sveltejs/kit"
import  { serialize } from "cookie";
export const POST: RequestHandler = async () => {
  return json({
    ok: true
  }, {
    status: 200,
    headers: {
      "set-cookie": `jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  })
}
