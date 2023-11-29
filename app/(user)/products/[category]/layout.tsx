import Link from "next/link"

const ProductsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    return (
        <div className="container m-auto">
            <nav className="flex gap-10 py-4">
                <Link href={"/products/all"}>All</Link>
                <Link href={"/products/tvs"}>TVs</Link>
                <Link href={"/products/washing-machine"}>Washing Machine</Link>
                <Link href={"/products/air-conditioning"}>Air Conditioning</Link>
                <Link href={"/products/ovens"}>Ovens</Link>
                <Link href={"/products/refrigerator"}>Refrigerator</Link>
            </nav>
            {children}
        </div>
    )
}

export default ProductsLayout