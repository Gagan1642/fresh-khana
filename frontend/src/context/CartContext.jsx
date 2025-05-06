// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available, otherwise empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart with image
  const addToCart = (foodName, foodPrice, foodImage) => {
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.name === foodName);
    
    if (existingItemIndex >= 0) {
      // If item exists, increase quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      updatedItems[existingItemIndex].totalPrice = 
        updatedItems[existingItemIndex].quantity * parseFloat(updatedItems[existingItemIndex].price.replace('₹', ''));
      setCartItems(updatedItems);
    } else {
      // If item doesn't exist, add it with quantity 1
      const price = foodPrice.replace('₹', '');
      setCartItems([
        ...cartItems,
        {
          id: Date.now(), // Generate a unique ID
          name: foodName,
          price: foodPrice,
          image: foodImage,
          quantity: 1,
          totalPrice: parseFloat(price),
          selected: true // Default items to selected state
        }
      ]);
    }
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        const price = parseFloat(item.price.replace('₹', ''));
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * price
        };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  // Toggle item selection
  const toggleItemSelection = (itemId) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    
    setCartItems(updatedItems);
  };

  // Calculate cart total (only for selected items)
  const getCartTotal = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((total, item) => total + item.totalPrice, 0);
  };

  // Get total number of items in cart
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart,
      updateQuantity,
      toggleItemSelection,
      getCartTotal,
      getCartItemCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;