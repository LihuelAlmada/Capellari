"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";
import GoBack from "@/app/ui/GoBack";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
interface Product {
  title: string;
  description: string;
  inStock: number;
  price: number;
  type: string;
  slug: string;
}

const createProduct = async (values: Product, file: File) => {
  const storageRef = ref(storage, values.slug);
  const fileSnapshot = await uploadBytes(storageRef, file);

  const fileURL = await getDownloadURL(fileSnapshot.ref);

  const docRef = doc(db, "products", values.slug);

  return setDoc(docRef, {
    ...values,
    image_url: fileURL,
  }).then(() => {});
};

const CreateForm = () => {
  const router = useRouter();

  const [values, setValues] = useState<Product>({
    title: "",
    description: "",
    inStock: 0,
    price: 0,
    type: "",
    slug: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      await createProduct(values, file);
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Create Product Successfully",
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Slug: </label>
        <input
          type="text"
          value={values.slug}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="slug"
          onChange={handleChange}
        />

        <label>Image: </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 rounded w-full border border-blue-100 block my-4"
        />

        <label>Name: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label>Price: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="inStock"
          onChange={handleChange}
        />

        <label>Category: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="type"
          onChange={handleChange}
        />

        <label>Description: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
          name="description"
          onChange={handleChange}
        />

        <div className="flex justify-between">
          <button
            className="flex py-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            type="submit"
            onClick={() => router.push("/admin")}
          >
            Send
          </button>
          <GoBack />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
