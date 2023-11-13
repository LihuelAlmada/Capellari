"use client";
import React, { useState } from "react";
import Button from '@/app/ui/Button'

function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
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
  );
}

export default Counter;