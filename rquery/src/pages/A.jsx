import { useQuery } from "react-query";
import { axios } from "axios"

const option = useQuery('getUsers', () => axios.post("http://localhost:3000/users"))

if(option.isFetching){
    console.log('fetching')
}

// status프로퍼티를 불러와 isLoading을 대체함
if(option.status === "loading"){
    console.log("loading")
}

if(option.status === "error"){
    console.log("error", option.error)
}

if(option.status === "success"){
    console.log("success", option.data)
}

// const user = {
//     id:1
// }

// const {
//     status,
//     isFetching,
//     data,
//     error
// } = useQuery(['getuser', user.id], () => axios.get(`https://localhost:3000/users/${user.id}`)
// )
