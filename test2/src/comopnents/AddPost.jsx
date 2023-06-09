import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/posts";
import PostForm from "./PostForm";
import { v4 as uuidv4 } from "uuid" 

export default function AddPost(){
    const queryCilent = useQueryClient()

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryCilent.invalidateQueries({ queryKey: ["posts"]})
            console.log("sucess bro")
        },
    })

    const handleAddPost = (post) => {
        createPostMutation.mutate({
            id: uuidv4(),
            ...post,
        })
    }

    return(
        <div>
            <h2>Add new post</h2>
            <PostForm onsubmit={handleAddPost} initialValue={{}} /> 
        </div>
    )
}