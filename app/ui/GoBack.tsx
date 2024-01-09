"use client";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="bg-red-500 hover:bg-red-600 flex py-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-10 items-center rounded-lg px-4 text-sm font-medium text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
    >
      Go Back
    </button>
  );
};

export default GoBack;
