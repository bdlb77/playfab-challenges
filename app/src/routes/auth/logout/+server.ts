import type { RequestHandler } from '@sveltejs/kit';
import { json } from "@sveltejs/kit"
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
