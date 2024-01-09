"use client";

import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const deleteProduct = async (slug: string) => {
  try {
    const docRef = doc(db, "products", slug);
    await deleteDoc(docRef);
    console.log("Delete Product:", slug);
    alert(`Product deleted, slug: ${slug} Reload the page` );
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
