import { describe, expect, it } from "vitest";
import { Book } from "./Book.js";

describe(Book.name, () => {
  it("should throw on NaN as price", () => {
    const act = () =>
      new Book("1984", "A dystopian novel by George Orwell", NaN);

    expect(act).toThrow(new Error("price NaN is not a valid format"));
  });

  it("should throw on string as price", () => {
    const act = () =>
      // @ts-expect-error
      new Book("1984", "A dystopian novel by George Orwell", "1.99");

    expect(act).toThrow(new Error("price 1.99 is not a valid format"));
  });
});
