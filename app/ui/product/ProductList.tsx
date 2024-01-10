import ProductCard from "./ProductCart"

const ProductList = async ( {category}: any ) => {
    const products = await fetch(`https://capellari-appliances.vercel.app/api/products/${category}`, {
    cache: "no-store",
    next: {
      tags: ["products"],
    },
  }).then((r) => r.json());

  const sortedProducts = products.sort((a: any, b: any) => a.type.localeCompare(b.type));

    //TODO: add type
    return (
        <section className="flex justify-center items-center gap-10 flex-wrap">
            {sortedProducts.map((product: any) => <ProductCard key={product.slug} item={product} />)}
        </section>
    )
}

export default ProductList