import ProductCard from "@/app/ui/ProductCard";
import { mockData } from "@/app/lib/products-data";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: `Capellari - ${params.category}`,
  };
}

const Products = ({ params }: Props) => {
  const { category } = params;

  const items =
    category === "all"
      ? mockData
      : mockData.filter((product) => product.type === category);
  return (
    <div>
      You are see: {params.category}
      <section className="grid grid-cols-4 gap-6">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
