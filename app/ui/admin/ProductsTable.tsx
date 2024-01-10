import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ProductItem from '@/app/ui/product/ProductItem'

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
            <ProductItem key={product.slug} product={product}/>
          ))}
        </tbody>
      </table>
  );
};

export default ProductsTable;