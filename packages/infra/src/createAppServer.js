import { createAdaptorServer } from "@hono/node-server";
import { rootRouter } from "./RootRouter.js";

/**
 * @param {() => any} createServer
 */
export function createAppServer(createServer) {
  return createAdaptorServer({
    createServer,
    fetch: rootRouter.fetch,
  });
}
