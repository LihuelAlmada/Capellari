'use client'
import { useRouter } from 'next/navigation'

export default function NotFound () {

  const router = useRouter()
  return (
    <>
      <main className='container m-auto'>
        <h1 className='text-4xl text-red-600 my-4'>Error 404</h1>
        <hr />
         <button 
         className='rounded-full py-2 px-3 bg-blue-400 text-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
         onClick={router.back}> back </button>
      </main>
    </>
  )
}