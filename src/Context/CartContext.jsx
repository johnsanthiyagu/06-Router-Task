import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const AddToCart = (product) => {
    setCartItems((cartItems) => {
      const itemExists = cartItems.find((item) => item.id === product.id);
      if (itemExists) {
        return cartItems.filter((item) => item.id !== product.id);
      } else {
        return [...cartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const RemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const UpdateQuantity = (id, quantity) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
    
  };

  return (
    <CartContext.Provider
      value={{ cartItems, AddToCart, RemoveFromCart, UpdateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
