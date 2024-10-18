import { describe, expect, it, vi } from "vitest";
import { BookRecommendationService } from "./BookRecommendationService.js";
import { BookRepositoryPort } from "./ports/BookRepositoryPort.js";
import { Book } from "./Book.js";

describe(BookRecommendationService.name, () => {
  it("should recommend a book", async () => {
    /**
     * @type {BookRepositoryPort}
     */
    const repo = {
      getBooks: vi.fn(async () => {
        return [
          new Book(
            "To Kill a Mockingbird",
            "A novel about racism and justice in the American South",
            2.49,
          ),
        ];
      }),
    };
    const recommedationService = new BookRecommendationService(repo);
    const recommendation = await recommedationService.getRecommendation();

    expect(repo.getBooks).toHaveBeenCalledOnce();
    expect(recommendation).toBeInstanceOf(Book);
    expect(recommendation.toObj()).toEqual({
      title: "To Kill a Mockingbird",
      description: "A novel about racism and justice in the American South",
      price: 2.49,
    });
  });
});
