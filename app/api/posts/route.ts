import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'no-cache'
    next: {
      revalidate: 0
    }
  })
  const posts = await response.json()

  return NextResponse.json(posts)
  } catch (error) {
    console.log(error);
    
  }
}

export async function POST(request : Request) {
  try {
    const { title, body, userId } = await request.json()

  const newPost = {
    title,
    body,
    userId
  }

  return NextResponse.json(newPost)
  } catch (error) {
    console.log(error);
  }
}