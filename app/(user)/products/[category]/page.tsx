
import { mockData } from '@/app/lib/products-data'

type Props = {
  params: { category: string }
}

export async function generateMetadata ({params} : Props) {
  return {
    title: `Capellari - ${params.category}`
  }
}

const Products = ({params} : Props) => {

  const { category } = params

  console.log(params);
  
  const items = category === 'all'
                    ? mockData
                    : mockData.filter(product => product.type === category)
  return (
    <div
    >
      You are see: {params.category}

      <section className="flex justify-center items-center gap-10 flex-wrap">
    asdasd
                { items.map(product => <div key={product.slug}> asd {product.title} </div>) }
                ads
            </section>
    </div>
    
  )
}

export default Products