//import { useRouter } from "next/navigation"
import { getPostById } from "../utils"
//import Button from "@/app/ui/Button"


const Post = async ({ params }: {params: { id: string }}) => {
    //const { back } = useRouter()

    const { id } = params
    const post = await getPostById(id)

    return (
        <div>
            <h2>{post.title}</h2>
            <hr/>
            <p>{post.body}</p>

            {/* <Button className="my-8" onClick={back}>Back</Button> */}
        </div>
    )
}

export default Post