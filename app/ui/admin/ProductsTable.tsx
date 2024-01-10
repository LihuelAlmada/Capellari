import ProductItem from '@/app/ui/product/ProductItem'


const ProductsTable = async () => {

  const products = await fetch(`http://localhost:3000/api/products/all`, {
    cache: "no-store",
    next: {
      tags: ["products"],
    },
  }).then((r) => r.json());

  const sortedProducts = products.sort((a: any, b: any) => a.type.localeCompare(b.type));

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
          {sortedProducts.map((product: any) => (
            <ProductItem key={product.slug} product={product}/>
          ))}
        </tbody>
      </table>
  );
};

export default ProductsTable;