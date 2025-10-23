import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.SKU === product.SKU);

      if (existingItem) {
        return prevItems.map(item =>
          item.SKU === product.SKU
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: quantity }];
      }
    });
  };

  const removeFromCart = (sku) => {
    setCartItems(prevItems => prevItems.filter(item => item.SKU !== sku));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (sku) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.SKU === sku ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (sku) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.SKU === sku && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const toggleCart = () => { 
    setIsCartOpen(prev => !prev);
  };

  const closeCart = () => { 
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, toggleCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};