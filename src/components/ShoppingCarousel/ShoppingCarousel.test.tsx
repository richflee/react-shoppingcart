import React from "react";
import { render } from "@testing-library/react";
import ShoppingCarousel from "./ShoppingCarousel";

test("renders Add to cart button", () => {
  const { getByText } = render(<ShoppingCarousel />);
  const buttonElement = getByText(/Add to cart/i);
  expect(buttonElement).toBeInTheDocument();
});
