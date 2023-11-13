
import Button from '@/app/ui/Button'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className="p-6 md:p-10 bg-zinc-100 min-h-screen">
      <h1 className="font-bold text-2xl md:text-3xl mb-6 md:mb-10">Shopping Cart</h1>
      <div className="grid gap-6 md:gap-10 mb-6 md:mb-10">
        <div className="border shadow-sm rounded-lg p-4 md:p-6">
          <div className="flex items-center gap-4 md:gap-6">
            <Image
              alt="Product Image"
              className="rounded-md"
              src="/placeholder.svg"
              height={80}
              width={80}
            />
            <div className="flex-1">
              <h2 className="font-medium text-lg md:text-xl">Product Name</h2>
              <p className="text-zinc-500 dark:text-zinc-400">$99.99</p>
            </div>
            <div className="w-[80px] md:w-[100px]">
              
            </div>
            <Button className="ml-4 md:ml-6 bg-red-400" >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg p-4 md:p-6">
        <div className="grid gap-4 md:gap-6">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p className="font-medium">$199.98</p>
          </div>
          <div className="flex justify-between">
            <p>Tax:</p>
            <p className="font-medium">$19.99</p>
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-medium">$219.97</p>
          </div>
        </div>
        <Button className="w-full mt-6 md:mt-10">Checkout</Button>
      </div>
    </div>
    
  )
}

export default Cart