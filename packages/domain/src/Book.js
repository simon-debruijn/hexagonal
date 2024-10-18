export class Book {
  #title;
  #description;
  #price;

  /**
   * @param {string} title
   * @param {string} description
   * @param {number} price
   */
  constructor(title, description, price) {
    if (typeof price !== "number") {
      throw new Error(`price ${price} is not a valid format`);
    }
    const priceAsFloat = Number.parseFloat(`${price}`);
    if (Number.isNaN(priceAsFloat)) {
      throw new Error(`price ${priceAsFloat} is not a valid format`);
    }

    this.#title = title;
    this.#description = description;
    this.#price = priceAsFloat;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get price() {
    return this.#price;
  }

  toObj() {
    return {
      title: this.title,
      description: this.description,
      price: this.price,
    };
  }
}
