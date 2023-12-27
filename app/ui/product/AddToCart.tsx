"use client";
import { useCartContext } from "@/app/context/CartContext";
import {
  type Product as ProductType,
  type ProductInCart,
} from "@/app/lib/definitions";
import React, { useState } from "react";

const AddToCart = ({ product }: { product: ProductType }) => {

  const { addToCart } = useCartContext();

  const [counter, setCounter] = useState(1);

  const productInCart: ProductInCart = {
    ...product,
    quantity: counter,
  };

  const increase = () => setCounter(counter + 1);
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-3">
        <button
          className="rounded-full py-2 px-3 bg-blue-400 text-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={decrease}
        >
          -
        </button>
        <div>{counter}</div>
        <button
          className="rounded-full py-2 px-3 bg-blue-400 text-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={increase}
        >
          +
        </button>
      </div>
      <button
        className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900"
        onClick={() => addToCart(productInCart)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
