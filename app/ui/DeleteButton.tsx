"use client";

import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const deleteProduct = async (slug: string) => {
  const result = await Swal.fire({
    title: `Are you sure you want to delete the product ${slug}?`,
    text: "This action will remove the product permanently.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
  });

  try {
    if (result.isConfirmed) {
      const docRef = doc(db, "products", slug);
      await deleteDoc(docRef);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

const DeleteButton = ({ slug }: { slug: string }) => {
  return (
    <button
      onClick={() => {
        deleteProduct(slug);
      }}
      className="rounded bg-red-400 p-2 text-white"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
