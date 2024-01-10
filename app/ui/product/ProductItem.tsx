import Image from "next/image"
import Link from "next/link"
import DeleteButton from '@/app/ui/DeleteButton'

const ProductItem = ({ product }: any) => {
    
    return (
      <tr key={product.slug}>
      <td className="p-2">{product.title}</td>
      <td className="p-2">{product.price}</td>
      <td className="p-2">{product.inStock}</td>
      <td className="p-2">{product.type}</td>
      <td className="p-2">
        <Image
          src={product.image_url}
          alt={product.title}
          width={80}
          height={80}
        />
      </td>
      <td className="p-2">{product.slug}</td>
      <td className="p-2 truncate max-w-prose">{product.description}</td>
      <td className="p-2">
        <Link
          href={`/admin/edit/${product.slug}`}
          className="rounded bg-green-400 p-2 text-white"
        >
          Edit
        </Link>

        <DeleteButton slug={product.slug} />
        
      </td>
    </tr>
    )
}

export default ProductItem


