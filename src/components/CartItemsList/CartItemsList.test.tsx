import React from "react";
import { render } from "@testing-library/react";
import CartItemsList, { CartItem } from "./CartItemsList";

const items: CartItem[] = [];

test("Renders cart items number message", () => {
  const { getByText } = render(<CartItemsList items={items} />);
  const itemsNumberElement = getByText(/Your cart has/i);
  expect(itemsNumberElement).toBeInTheDocument();
});
