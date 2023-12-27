"use client"
import { useRouter } from 'next/navigation'

const GoBack = () => {

  const router = useRouter()
  return (
    <button
      onClick={router.back}
      className='bg-red-500 hover:bg-red-600'
    > Go Back</button>
  )
}

export default GoBack
