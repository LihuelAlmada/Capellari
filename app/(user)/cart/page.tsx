"use client";

import Button from "@/app/ui/Button";
import Link from "next/link";
import { useCartContext } from "@/app/context/CartContext";

const Cart = () => {
  const { cart, calculateTotalCost, removeProduct } = useCartContext();

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
            <Button
              onClick={() => {
                removeProduct(product.slug);
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
            <p>Total:</p>
            <p className="font-medium">${calculateTotalCost()}</p>
          </div>
        </div>
        <Link
          href="/cart/buy"
          className="w-5/6 mt-6 md:mt-10 flex py-2 self-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
