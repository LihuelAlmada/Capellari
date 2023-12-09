"use client"
import { createContext, useContext, useState, ReactNode } from "react"
import { type Product as ProductType } from "@/app/lib/definitions";

interface CartContextProps {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
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
  const [cart, setCart] = useState<ProductType[]>([])

  const addToCart = (product: ProductType) => {
    setCart([...cart, product])
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