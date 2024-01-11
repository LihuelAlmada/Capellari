"use client";
import { useRouter } from "next/navigation";

const ReloadPage = () => {
  const router = useRouter();
  return (
    <>
      <div>
        If you do not see your changes, you can reload the page
      </div>
      <button
        onClick={router.refresh}
        className="bg-gray-500 hover:bg-gray-600 flex py-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-10 items-center rounded-lg px-4 text-sm font-medium text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      >
        Reload Page
      </button>
    </>
  );
};

export default ReloadPage;
