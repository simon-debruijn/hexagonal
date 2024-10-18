import { describe, expect, it } from "vitest";
import { BookFileRepository } from "@app/infra/BookFileRepository";
import { Book } from "@app/domain/Book";
import path from "node:path";

describe("books", () => {
  it("should get all the books", async () => {
    const bookRepository = new BookFileRepository(
      path.resolve(import.meta.dirname, "./books.json"),
    );
    const books = await bookRepository.getBooks();

    const actual = books.map((book) => book.toObj());

    const expected = [
      new Book(
        "The Hobbit",
        "A fantasy novel about Bilbo Baggins' adventure",
        3.99,
      ),
      new Book("1984", "A dystopian novel by George Orwell", 1.99),
    ].map((book) => book.toObj());

    expect(actual).toEqual(expected);
  });
});
