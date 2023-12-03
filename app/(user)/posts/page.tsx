import Link from "next/link";

const Posts = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  return (
    <ul>
      {
        posts.map((post: { title: string, body: string, userId: number}) => (
          <li key={post.userId} className="my-4">
            <Link href={`/posts/${post.userId}`}>
              <h3 className="text-2xl font-semi">{post.title}</h3>
              <hr />
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Posts;