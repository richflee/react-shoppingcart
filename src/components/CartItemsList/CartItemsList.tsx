import React from "react";

export interface CartItem {
  title: string;
  id: number;
  priceRaw: number;
}

interface CartItemsListProps {
  items: CartItem[];
}

function CartItemsList(props: CartItemsListProps) {
  const { items } = props;
  return (
    <>
      <h3>Your cart has {items.length} items in it</h3>
      <ul>
        {items.map((item: CartItem) => (
          <li key={`item-${item.id}`}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(CartItemsList);
