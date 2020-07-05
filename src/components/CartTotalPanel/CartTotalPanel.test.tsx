import React from "react";
import { render } from "@testing-library/react";
import CartTotalPanel from "./CartTotalPanel";
import { CartItem } from "../CartItemsList/CartItemsList";

const items: CartItem[] = [];

test("renders Hello message", () => {
  const { getByText } = render(<CartTotalPanel items={items} />);
  const subHeadingElement = getByText(/Hello, Mr.Lee/i);
  expect(subHeadingElement).toBeInTheDocument();
});
