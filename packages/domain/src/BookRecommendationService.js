import { Book } from "./Book.js";
import { BookRepositoryPort } from "./ports/BookRepositoryPort.js";

export class BookRecommendationService {
  #bookRepository;

  /**
   * @param {BookRepositoryPort} bookRepository
   */
  constructor(bookRepository) {
    this.#bookRepository = bookRepository;
  }

  /**
   * @returns {Promise<Book>}
   */
  async getRecommendation() {
    const books = await this.#bookRepository.getBooks();
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
  }
}
