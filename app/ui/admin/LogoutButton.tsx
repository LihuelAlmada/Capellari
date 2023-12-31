"use client";

import { useAuthContext } from "@/app/context/AuthContext";

const LogoutButton = () => {
  const { logout }: any = useAuthContext();
  return (
    <button
      onClick={() => {
        logout();
      }}
      className="bg-red-500 hover:bg-red-600text-white font-bold py-2 px-4 rounded"
    >
      Log out
    </button>
  );
};

export default LogoutButton;
