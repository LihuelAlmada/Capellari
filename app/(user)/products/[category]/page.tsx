import ProductCard from "@/app/ui/ProductCard";
import { mockData } from "@/app/lib/products-data";
import {type Product} from '@/app/lib/definitions'

export async function generateMetadata({ params }: {params: { category: string }}) {
  return {
    title: `Capellari - ${params.category}`,
  };
}

const Products = async ({ params }: {params: { category: string }}) => {
  const { category } = params;
  const response = await fetch(`http://localhost:3000/api/products/${category}`)
  const items = await response.json()

  return (
    <div>
      You are see: {params.category}
      <section className="grid grid-cols-4 gap-6">
        {items.map((product: Product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
