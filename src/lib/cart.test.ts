import { describe, it, expect } from "vitest";
import { cartTotal } from "./cart";

describe("cartTotal", () => {
  it("пустая корзина = 0", () => expect(cartTotal([])).toBe(0));
  it("считает сумму", () =>
    expect(
      cartTotal([
        { price: 100, qty: 2 },
        { price: 50, qty: 1 },
      ]),
    ).toBe(251));
});
