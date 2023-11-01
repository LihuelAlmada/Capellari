type Props = {
  params: { id: string }
}

export async function generateMetadata ({params} : Props) {
  return {
    title: `Capellari - ${params.id}`
  }
}

const Products = ({params} : Props) => {
  return (
    <div
      
    >
      You are see: {params.id}
    </div>
  )
}

export default Products