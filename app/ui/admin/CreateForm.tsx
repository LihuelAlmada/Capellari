"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import Button from '@/app/ui/Button'
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"
import GoBack from "@/app/ui/GoBack";
import { useRouter } from 'next/navigation'

interface Product {
  title: string;
  description: string;
  inStock: number;
  price: number;
  type: string;
  slug: string;
}


const createProduct = async (values: Product, file: File) => {
  
  const storageRef = ref(storage, values.slug)
  const fileSnapshot = await uploadBytes(storageRef, file)

  const fileURL = await getDownloadURL(fileSnapshot.ref)

  const docRef = doc(db, "products", values.slug)
  

  return setDoc(docRef, {
    ...values,
    image_url: fileURL
  }).then(() => {
  })
}

const CreateForm = () => {

  const router = useRouter()

  const [values, setValues] = useState<Product>({
    title: '',
    description: '',
    inStock: 0,
    price: 0,
    type: '',
    slug: ''
  })
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    setFile(selectedFile || null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (file) {
      await createProduct(values, file)
    } else {
      console.log("No file selected")
    } 
  }

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
        <Button type="submit" onClick={() => router.push('/admin')}>Send</Button>
        <GoBack />
        </div>
      </form>
    </div>
  )
}

export default CreateForm
