import Link from "next/link"

const ProductosLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    return (
        <div className="container m-auto">
            <nav className="flex gap-10 py-4">
                <Link href={"/products/all"}>All</Link>
                <Link href={"/products/tvs"}>TVs</Link>
                <Link href={"/products/washing-machine"}>washing machine</Link>
                <Link href={"/products/aires"}>Aires</Link>
            </nav>
            {children}
        </div>
    )
}

export default ProductosLayout