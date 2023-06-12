function setTimeoutPromise(delay){
    return new Promise((resolve) => setTimeout(resolve, delay))
}

async function startAsync(age){
    if(age > 20) return `${age} success`
    else throw new Error(`${age} is not over 20`)
}

async function startAsyncJobs(){
    // setTimeoutPromise의 executor에서 resolve함수가 호출될 때까지 기다린다.(코드의 2번째줄)
    await setTimeoutPromise(1000)
    const promise1 = startAsync(25)

    // 예외처리를 위하여 try catch를 사용
    try{
        // promise가 resolve한 값을 리턴한다.
        const value = await promise1
        console.log(value)
    }catch(e){
        console.error(e)
    }

    const promise2 = startAsync(15)

    try{
        const value = await promise2
        console.log(value)
    }catch(e){
        console.error(e)
    }
}

startAsyncJobs()