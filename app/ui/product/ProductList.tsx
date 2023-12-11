import { collection, getDocs, query, where } from "firebase/firestore"
import ProductCard from "./ProductCart"
import { db } from "@/firebase/config"


const getProducts = async (category: string ) => {
    const productsRef = collection(db, 'products')
    
    const q = category === "all"
                ? productsRef
                : query(productsRef, where('type', '==', category))

    const querySnapshot = await getDocs( q )
    return querySnapshot.docs.map( docSnapshot => docSnapshot.data() )
}

const ProductList = async ( {category}: any ) => {
    const items = await getProducts(category)

    //TODO: add type
    return (
        <section className="flex justify-center items-center gap-10 flex-wrap">
            {items.map((product: any) => <ProductCard key={product.slug} item={product} />)}
        </section>
    )
}

export default ProductList