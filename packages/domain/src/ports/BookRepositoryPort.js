import { Book } from "../Book.js";

/**
 * @interface BookRepositoryPort
 */
export class BookRepositoryPort {
  /**
   * @returns {Promise<Book[]>}
   */
  getBooks() {
    throw new Error("Method not implemented");
  }
}
