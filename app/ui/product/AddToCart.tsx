"use client";
import { useCartContext } from "@/app/context/CartContext";
import Button from "@/app/ui/Button";
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
        <Button
          className="rounded-full py-2 px-3 bg-blue-400 text-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={decrease}
        >
          -
        </Button>
        <div>{counter}</div>
        <Button
          className="rounded-full py-2 px-3 bg-blue-400 text-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={increase}
        >
          +
        </Button>
      </div>
      <Button
        className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900"
        onClick={() => addToCart(productInCart)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
