import React, { useRef } from "react";

const ShoppingCarousel = function (props: any) {
  const { addItem } = props;
  const renders = useRef(0);
  console.log("rendering carousel", renders.current++);
  return <button onClick={addItem}>Add to cart</button>;
};

export default React.memo(ShoppingCarousel);
