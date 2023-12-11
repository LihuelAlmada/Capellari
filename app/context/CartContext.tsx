"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { type ProductInCart } from "@/app/lib/definitions";

interface CartContextProps {
  cart: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  removeProduct: (slug: string) => void;
  calculateTotalCost: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const addToCart = (productInCart: ProductInCart) => {
    const existingProduct = cart.find(
      (product) => product.slug === productInCart.slug
    );

    if (existingProduct) {
      setCart((prevCart) => {
        return prevCart.map((product) =>
          product.slug === productInCart.slug
            ? {
                ...product,
                quantity: product.quantity + productInCart.quantity,
              }
            : product
        );
      });
    } else {
      setCart([...cart, productInCart]);
    }
  };

  const removeProduct = (slug: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => !(product.slug === slug)
      );
      return updatedCart;
    });
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, product) => {
      const productPrice = product.price || 0;
      return total + productPrice * product.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeProduct,
        calculateTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
