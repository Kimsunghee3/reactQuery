import { useQuery } from "react-query"

const fetchPosts = async() => await axios.get(`/api/post/list`).then(res => res.data)
const { data, isLoadding, error} = useQuery(['fetchPosts'], fetchPosts)