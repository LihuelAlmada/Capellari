"use client"
import { useRouter } from 'next/navigation'
import Button from '@/app/ui/Button'

const GoBack = () => {

  const router = useRouter()
  return (
    <Button
      onClick={router.back}
      className='bg-red-500 hover:bg-red-600'
    > Go Back</Button>
  )
}

export default GoBack
