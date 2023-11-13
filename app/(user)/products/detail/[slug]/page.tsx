import ProductDetail from '@/app/ui/ProductDetail'
import { mockData } from "@/app/lib/products-data";

type Props = {
  params: { slug: string };
};

const ProductDetailPage = ({ params }: Props) => {

  const { slug } = params;

  const product = mockData.find((product) => product.slug === slug)
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return <ProductDetail product={product}/>;
};

export default ProductDetailPage;