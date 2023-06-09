import { useState } from "react"
import { useQuery } from "react-query"

function a(){
    const result = useQuery("articles", getArticles)
    const { data, error, isLoading } = result

    if(isLoading) return 
    if(error) return 
}

