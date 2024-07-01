import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const newObj = { ...product, quantity: 1 };

    setTotal((prev) => prev + newObj.price);
    let flag = true;
    cart.map((item) => {
      if (item.id == newObj.id) {
        flag = false;
        item.quantity += 1;
      }
      return item;
    });

    if (flag) {
      setCart((prevCart) => [...prevCart, newObj]);
    }
  };

  const removeFromCart = (product) => {
    if (product.quantity > 1) {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id == product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    } else {
      setCart((prev) => prev.filter((item) => item.id != product.id));
    }
    setTotal((prev) => prev - product.price + 0);
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
