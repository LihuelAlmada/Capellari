
// import { type Product } from '@/lib/definitions.ts'
// import { mockData } from "@/lib/products-data"
// import { NextResponse } from "next/server"

// type Props = {
//   params: { category: string };
// };

// const sleep = async (timer : Number ) => new Promise((resolve) => setTimeout(resolve))

// export const GET = async (_, { params }: Props}) => {
//   const { category } = params;
    
//     const items = category === 'all'
//                     ? mockData
//                     : mockData.filter(product => product.type === category)

//     await sleep(1000)

//     return NextResponse.json(items)
// }