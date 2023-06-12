import countState from "../atom/Atom"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"

export const Counter = () => {
    const count = useRecoilValue(countState)
    const setCount = useSetRecoilState(countState)
    const resetCount = useResetRecoilState(countState)

    const increase = () => {
        setCount((count) => count + 1)
    }

    const decrease = () => {
        setCount((count) => count -1)
    }

    const reset = () => {
        resetCount()
    }

    return(
        <div>
            <h2>Recoil Counter</h2>
            <div>{count}</div>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
            <button onClick={reset}> reset </button>
        </div>
    )
}