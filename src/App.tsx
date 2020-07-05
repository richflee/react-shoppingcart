import React, { useState, useCallback } from "react";
import "./App.css";
import TwoColLayout from "./components/TwoColLayout/TwoColLayout";
import ShoppingCarousel from "./components/ShoppingCarousel/ShoppingCarousel";
import CartItemsList, {
  CartItem,
} from "./components/CartItemsList/CartItemsList";
import CartTotalPanel from "./components/CartTotalPanel/CartTotalPanel";

function generateRandumNum(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = useCallback(() => {
    const newItem: CartItem = {
      id: generateRandumNum(0, 1000000),
      title: "Hello world",
      priceRaw: 500,
    };
    setCartItems((items) => items.concat([newItem]));
  }, [setCartItems]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping cart</h1>
      </header>
      <ShoppingCarousel addItem={addToCart} />
      <TwoColLayout
        left={<CartItemsList items={cartItems} />}
        right={<CartTotalPanel items={cartItems} />}
      />
    </div>
  );
}

export default App;
