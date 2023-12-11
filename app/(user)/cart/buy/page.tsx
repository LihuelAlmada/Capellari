"use client";
import Button from '@/app/ui/Button'

import { useCartContext } from "@/app/context/CartContext"

const Buy = () => {
  
  const { cart } = useCartContext()

  return (
<div className="p-6 md:p-10 bg-zinc-100 min-h-screen">
      <h1 className="font-bold text-2xl md:text-3xl mb-6 md:mb-10">Shopping Cart</h1>
      {cart.map((product, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-200 bg-opacity-50"
                      : "bg-blue-300 h-10 bg-opacity-50"
                  }
                >
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2">{product.type}</td>
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2">{product.type}</td>
                  <td className="px-4 py-2 text-center ">{product.price}</td>
                  
                  <td className="flex h-10 justify-around items-center">
                    <Button
                      onClick={() => {
                        
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
      <div className="border shadow-sm rounded-lg p-4 md:p-6">
        <div className="grid gap-4 md:gap-6">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p className="font-medium">$199.98</p>
          </div>
          <div className="flex justify-between">
            <p>Tax:</p>
            <p className="font-medium">$19.99</p>
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-medium">$219.97</p>
          </div>
        </div>
        <Button className="w-full mt-6 md:mt-10">Checkout</Button>
      </div>
    </div>

  );
};

export default Buy;
