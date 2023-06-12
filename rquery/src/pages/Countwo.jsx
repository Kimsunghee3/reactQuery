import { useMutation, useQuery } from "react-query"

const queryClient = new Queryclient()


export const Countwo = () => {
    const { data=0 } = useQuery()

    const increase = useMutation(() => {
        queryClient.
    },)

    const decrease = useMutation(() => {

    })

    return(
        <>
            <div>카운터: {data} </div>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
        </>
    )
}