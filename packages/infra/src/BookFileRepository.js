import { Book } from "@app/domain/Book";
import { BookRepositoryPort } from "@app/domain/ports/BookRepositoryPort";
import fs from "node:fs";

/**
 * @typedef {(typeof import('./books.json'))[number]} JsonBook
 */

/**
 * @implements {BookRepositoryPort}
 */
export class BookFileRepository {
  #filePath;

  /**
   * @param {string} filePath
   */
  constructor(filePath) {
    this.#filePath = filePath;
  }

  /** @returns {Promise<Book[]>} */
  async getBooks() {
    const data = await this.#getBooksJson();
    return data.map((book) => this.#convertToDomainBook(book));
  }

  /**
   * @returns {Promise<JsonBook[]>}
   */
  async #getBooksJson() {
    const buffer = await fs.promises.readFile(this.#filePath);
    return JSON.parse(buffer.toString("utf-8"));
  }

  /**
   * @param {JsonBook} jsonBook
   * @returns {Book}
   */
  #convertToDomainBook(jsonBook) {
    const currencySymbols = ["$", "€"];

    let priceStr = jsonBook.price;

    currencySymbols.forEach((symbol) => {
      priceStr = priceStr.replace(symbol, "");
    });

    const price = parseFloat(priceStr);

    return new Book(jsonBook.name, jsonBook.meta.brief, price);
  }
}
