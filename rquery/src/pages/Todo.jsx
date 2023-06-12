import { useQuery } from "react-query";

function Todos(){
    const a = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList,
    })
    if(a.isLoading){
        return <span>Loading...</span>
    }if(a.isError){
        return <span>Error: {a.error.message}</span>
    }

    return(
        <ul>
            {a.data.map(() => {
                <li key={todo.id}{todo.title}></li>
            })}
        </ul>
    )
}


