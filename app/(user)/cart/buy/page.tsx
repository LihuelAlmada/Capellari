"use client";

import { useCartContext } from "@/app/context/CartContext";

const Buy = () => {
  const { calculateTotalCost } = useCartContext();

  //TODO: Add payment logic here
  return (
    <div className="p-6 md:p-10 bg-zinc-100 min-h-screen">
      <h1 className="font-bold text-2xl md:text-3xl mb-6 md:mb-10">
        {calculateTotalCost()}
      </h1>

      <button className="w-full mt-6 md:mt-10 flex py-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">Pay</button>
    </div>
  );
};

export default Buy;
