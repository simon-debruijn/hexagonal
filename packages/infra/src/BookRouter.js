import { BookRecommendationService } from "@app/domain/BookRecommendationService";
import { Hono } from "hono";
import path from "node:path";
import { BookFileRepository } from "./BookFileRepository.js";
import { fileURLToPath } from "node:url";

export const bookRouter = new Hono();

const url = fileURLToPath(import.meta.url);
const __dirname = path.dirname(url);

const repo = new BookFileRepository(path.resolve(__dirname, "./books.json"));
const service = new BookRecommendationService(repo);

bookRouter.get("/", async (c) => {
  const books = await repo.getBooks();

  return c.json({
    data: books.map((book) => book.toObj()),
  });
});

bookRouter.get("/recommendation", async (c) => {
  const recommendation = await service.getRecommendation();

  return c.json({
    data: recommendation.toObj(),
  });
});
