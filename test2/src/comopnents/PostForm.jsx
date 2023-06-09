import { useState } from "react";

export default function PostForm({ onSubmit, initialValue }){
    const [post, setPost] = useState({
        title: initialValue.title || "",
        body: initialValue.body || "",
    })

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(post)
        setPost({
            title:"",
            body:"",
        })
    }

    const renderField = (label) => {
        <div>
            <label>{label}</label>
            <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} />
        </div>
    }

    return(
        <form onSubmit={handleSubmit}>
            {renderField("Title")}
            {renderField("Body")}
            <button type="submit">submit</button>
        </form>
    )
}