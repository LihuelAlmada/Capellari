import Button from '@/app/ui/Button'

const ProductDetailPage = () => {

  return (
    <div className="bg-gray-100 min-h-screen min-w-max flex items-center justify-center">
          <div className="rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 ">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">New Product</h1>
              <p className="text-zinc-500 dark:text-zinc-400">
                Create a product you need put all date of a new Product
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title">title</label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="title"
                    type="title"
                    name="title"
                    placeholder="Enter product title "
                    required
                  />
                </div>
                <label htmlFor="Image">Image</label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="Image"
                    type="Image"
                    name="Image"
                    placeholder="add image"
                    required
                  />
                </div>
                <label htmlFor="Description">Description</label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="Description"
                    type="Description"
                    name="Description"
                    placeholder="Enter your product description"
                    required
                  />
                </div>
                <label htmlFor="price">Price</label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="price"
                    type="price"
                    name="price"
                    placeholder="Enter your product Price"
                    required
                  />
                </div>
                
                <Button>create new product</Button>
              </div>
            </div>
          </div>
        </div>
  )
};

export default ProductDetailPage;


