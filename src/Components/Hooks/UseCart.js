import { useEffect, useState } from "react";

const useCart = (key) => {
  console.log(key);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
  };

  return [cart, setCart];
};

export default useCart;
