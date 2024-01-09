import Link from "next/link";
import Image from "next/image";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import DeleteButton from '@/app/ui/DeleteButton'

const getAllProducts = async () => {
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const ProductsTable = async () => {
  const products = await getAllProducts();

  return (
      <table className="w-full text-xs text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-3 py-2">
              Name
            </th>
            <th scope="col" className="px-3 py-2">
              Price
            </th>
            <th scope="col" className="px-3 py-2">
              Stock
            </th>
            <th scope="col" className="px-3 py-2">
              Type
            </th>
            <th scope="col" className="px-3 py-2">
              Image
            </th>
            <th scope="col" className="px-3 py-2">
              Slug
            </th>
            <th scope="col" className="px-3 py-2">
              Description
            </th>
            <th scope="col" className="px-3 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.slug}>
              <td className="p-2">{product.title}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.inStock}</td>
              <td className="p-2">{product.type}</td>
              <td className="p-2">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  width={80}
                  height={80}
                />
              </td>
              <td className="p-2">{product.slug}</td>
              <td className="p-2 truncate max-w-prose">{product.description}</td>
              <td className="p-2">
                <Link
                  href={`/admin/edit/${product.slug}`}
                  className="rounded bg-green-400 p-2 text-white"
                >
                  Edit
                </Link>

                <DeleteButton slug={product.slug} />
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default ProductsTable;