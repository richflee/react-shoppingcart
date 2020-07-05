import React from "react";
import { CartItem } from "../CartItemsList/CartItemsList";

interface CartTotalPanelProps {
  items: CartItem[];
}

export default function CartTotalPanel(props: CartTotalPanelProps) {
  const { items } = props;
  const cartTotalInCents = items.reduce((acc, current) => {
    return acc + current.priceRaw;
  }, 0);
  return (
    <>
      <h4>Hello, Mr.Lee</h4>
      {!items && <p>Empty cart.</p>}
      {items && <div>Total: {cartTotalInCents} cents</div>}
    </>
  );
}
