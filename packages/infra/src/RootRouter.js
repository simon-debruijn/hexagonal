import { Hono } from "hono";
import { bookRouter } from "./BookRouter.js";

export const rootRouter = new Hono();

rootRouter.route("/books", bookRouter);
