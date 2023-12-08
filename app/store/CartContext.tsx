"use client"
import { createContext, useContext, useState, ReactNode } from "react"

interface CartContextProps {
  cart: any[];
  addToCart: (product: any) => void;
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
  const [cart, setCart] = useState<any[]>([])

  const addToCart = (product: any) => {
    setCart([...cart, product])
  }
  console.log(cart)

  return (
    <CartContext.Provider value={{
      cart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}