import ProductList from '@/app/ui/product/ProductList'
import { Suspense } from "react";

export async function generateMetadata({ params }: {params: { category: string }}) {
  return {
    title: `Capellari - ${params.category}`,
  };
}

const Products = async ({ params }: {params: { category: string }}) => {
  const { category } = params;

  return (
    <div>
      You are see: {category}
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList category={params.category} />
      </Suspense>
    </div>
  );
};

export default Products;
