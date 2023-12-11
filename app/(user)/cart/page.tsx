"use client";

import Button from "@/app/ui/Button";
import Image from "next/image";
import { useCartContext } from "@/app/context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div className="p-6 md:p-10 min-h-screen flex flex-col">
      <h1 className="font-bold text-2xl md:text-3xl mb-6 md:mb-10">
        Shopping Cart
      </h1>
      <tr className="w-full h-10 flex justify-between">
        <th className="px-4 py-2 w-3/6">Name</th>
        <th className="px-4 py-2 w-1/6 text-center">Type</th>
        <th className="px-4 py-2 w-1/6">Quantity</th>
        <th className="px-4 py-2 text-center w-1/6">Price</th>
        <th className="px-4 py-2 text-center">Action</th>
      </tr>
      {cart.map((product, index) => (
        <tr
          key={index}
          className={
            index % 2 === 0
              ? "bg-gray-200 bg-opacity-50 w-full h-10 flex justify-between"
              : "bg-blue-300  bg-opacity-50 w-full h-10 flex justify-between"
          }
        >
          <td className="px-4 py-2 w-3/6">{product.title}</td>
          <td className="px-4 py-2 w-1/6 text-center">{product.type}</td>
          <td className="px-4 py-2 w-1/6 text-center">{product.quantity}</td>

          <td className="px-4 py-2 text-center w-1/6">{product.price}</td>

          <td className="h-10">
            <Button onClick={() => {}}>Delete</Button>
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

export default Cart;
