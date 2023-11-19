import { NextResponse } from "next/server"

export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'no-cache'
    next: {
      revalidate: 0
    }
  })
  const posts = await response.json()
  // revalidateTag('posts')

  return NextResponse.json(posts)
}

export async function POST(request : Request) {
  const { title, body, userId } = await request.json()

  // Perform any necessary validation or processing

  // Example: Save the post to a database
  const newPost = {
    title,
    body,
    userId
  }

  // Return the newly created post
  return NextResponse.json(newPost)
}

// }