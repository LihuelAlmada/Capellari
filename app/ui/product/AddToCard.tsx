"use client"
import { useCartContext } from "@/app/context/CartContext"
import Button from "@/app/ui/Button"
import { type Product as ProductType } from "@/app/lib/definitions";

const AddToCard = ({ product }: { product: ProductType }) => {
    console.log(product)
    const { addToCart } = useCartContext()

    return (
        <div>
            <Button 
                className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </Button>
        </div>
    )
}

export default AddToCard