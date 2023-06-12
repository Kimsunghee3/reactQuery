const promise1 = new Promise((resolve, reject) => {
    resolve()
    reject()
})

promise1
    .then(() => {
        console.log("success")
    })
    .catch(() => {
        console.log("fail")
    })