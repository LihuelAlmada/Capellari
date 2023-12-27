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

      <button className="w-full mt-6 md:mt-10">Pay</button>
    </div>
  );
};

export default Buy;
