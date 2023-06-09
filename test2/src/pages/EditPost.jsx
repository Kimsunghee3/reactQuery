import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updatePost, fetchPost } from "../api/posts";
import { useParams } from "react-router-dom";

export default function EditPost(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { id } = useParams()
    const {
        isLoading,
        isError,
        data: posts,
        error,
    } = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id),
    })

    const updatePostMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"]})
            navigate("/")
        },
    })

    if(isLoading) return "loading..."
    if(isError) return `Error:${error.message}`
    
    const handleSubmit = (updatePost) => {
        updatePostMutation.mutate({id, ...updatePost})
    }

    return(
        <div>
            <PostForm onSubmit={handleSubmit} initialValue={post} />
        </div>
    )
}