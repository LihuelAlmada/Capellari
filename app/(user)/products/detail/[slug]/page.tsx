import ProductDetail from '@/app/ui/ProductDetail'
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"
import { type Product as ProductType } from "@/app/lib/definitions";
import { log } from 'console';

type Props = {
  params: { slug: string };
};

const getProduct = async (id: string) => {
  const docRef = doc(db, 'products', id)
  const docSnapshot = await getDoc( docRef )

  console.log(docSnapshot.data())
  return docSnapshot.data()
}


const ProductDetailPage = async ({ params }: Props) => {

  const { slug } = params;

  const product: ProductType | undefined | any = await getProduct(slug)
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return <ProductDetail product={product}/>;
};

export default ProductDetailPage;
