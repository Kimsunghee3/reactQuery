import { atom, useRecoilState } from "recoil"

const counterState = atom({
    key: "counterState",
    default: 0
})

export const Counter = () => {
    const [count, setCount] = useRecoilState(counterState)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <h2> 카운터: {count} </h2>
            <button onClick={increment()}>증가</button>
            <button onClick={decrement()}>감소</button>
        </div>
    )
}
