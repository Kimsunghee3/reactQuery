import { useQuery } from "react-query";
import axios from "axios";

const { 
    isSucess, 
    isError, 
    isLoading, 
    isFetching, 
    data, 
    error 
} = useQuery(
    'getUsers', 
    () => axios.get("http://localhost:3000/users"),
    {
        onSuccess: (data) => {
            console.log('onSuccess', data)
        },
        onError: (error) => {
            console.log('onError', error)
        }
    }
)

if(isFetching){
    console.log('fetching')
}
if(isLoading){
    console.log('loading...')
}

if(isError){
    console.log('error', error)
}

if(isSucess){
    console.log("success", data)
}