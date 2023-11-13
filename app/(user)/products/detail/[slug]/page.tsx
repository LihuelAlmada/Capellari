type Props = {
  params: { slug: string }
}

const Detail = ({params} : Props) => {
  const { slug } = params

  return (
      <div className="container m-auto pt-8">
          <h2 className="text-4xl text-bold">Product</h2>
          <hr/>
      </div>
  )
}

export default Detail