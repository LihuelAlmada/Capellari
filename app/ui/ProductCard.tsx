import Image from "next/image"
import Link from "next/link"
import  { type Product as ProductType } from '@/app/lib/definitions'

const ProductCard = ({ product }: { product: ProductType }) => {

    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={`/products/detail/${product.slug}`}>
                <Image 
                    alt={product.title}
                    src={`/imgs/products/${product.image_url}`}
                    width={288}
                    height={288}
                />

                <div className="px-4 border-t border-gray-200 pb-4">
                    <h4 className="text-sm my-4">{product.title}</h4>
                    <p className="text-2xl font-semibold">${product.price}</p>
                </div>                
            </Link>
        </article>
    )
}

export default ProductCard