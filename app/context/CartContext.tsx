"use client"
import { createContext, useContext, useState, ReactNode } from "react"
import { type ProductInCart } from "@/app/lib/definitions";

interface CartContextProps {
  cart: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider")
  }
  
  return context
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductInCart[]>([])

  const addToCart = (productInCart: ProductInCart) => {

    const existingProduct = cart.find(
      (product) => product.slug === productInCart.slug
    );

    if (existingProduct) {
      setCart((prevCart) => {
        return prevCart.map((product) =>
          product.slug === productInCart.slug
            ? { ...product, quantity: product.quantity + productInCart.quantity }
            : product
        );
      });
    } else {
      setCart([...cart, productInCart]);
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}