import Button from '@/app/ui/Button'
import Counter from '@/app/ui/Counter'
import Image from "next/image";
import { type Product as ProductType } from "@/app/lib/definitions";
import AddToCart from '@/app/ui/product/AddToCart'
const ProductDetail = ({ product }: { product: ProductType }) => {

  console.log(product);
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container flex items-start gap-8 px-4 md:px-6">
      <Image
        //aspect-[1/1] when we create a new product
        alt="Sneaker Image"
        className=" object-cover object-center"
        src={product.image_url}
        width={500}
        height={500}
      />
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">{product.title}</h1>
          <p className="text-2xl font-semibold text-zinc-900">${product.price}</p>
          <p className="text-base text-zinc-500">
            {product.description}
          </p>
          <AddToCart product={product} />
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            other comment, offers, etc
          </p>
      </div>
    </div>
  </section>
  )
}

export default ProductDetail