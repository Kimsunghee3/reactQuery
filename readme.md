### react-query
state는 server state와 client state로 나눌 수 이쓴데 
react query에서는 server state를 관리하는 것을 목적으로 한다.
전역 상태를 쓰지 않고 리액트 내부 state와 context를 사용하여 서버 상태를 관리한다..

### useQuery
데이터를 조회할 때 사용한다.
첫번째 인자로 요청할 데이터명이들어가게 되며, 두번재 인자로는 요청api가 들어가게된다.

### useMutation
react Query를 이용해 서버에 데이터 변경 작업을 요청할 때 사용한다.
데이터베이스로 비유하면 insert, update, delete에 해당된다.
mutate함수를 반환한다.
데이터를 받아오지 않으므로 queryKey가 없어도 된다.
```jsx
// 첫번째인자: 쿼리키, 두번째인자: api호출함수, 세번째인자: 쿼리옵션
useMutation(key, function, options)
```

### mutationKey
문자열또는 배열로 지정할 수 있다.

### mutationFn
서버와 통신할 promise처리가 이루어지는 api함수를 의미한다.(axios를 이용해 서버에 API요청)


### Mutation
서버에 있는 데이터를 수정하는 네트워크 통신을 만드는 것

### mutationFn(mutation Function)
promise처리가 이루어지는 함수다.


### async await 
> async
async await을 통해 promise를 편리하게 사용할 수 있다.
async는 function앞에 위치한다. async가 붙여진 함수는 항상 `promise`를 반환한다.
```jsx
async function a(){
    return 1
}
```

>await
await는 async함수 안에서만 동작한다.
await키워드를 만나면 프라미스가 처리될 때까지 기다린다.
```jsx
async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("완료"), 1000)
    })

    // 함수를 실행하게 되면 아래의 코드에서 잠시 실행이 중단되었다가
    // promise가 처리되면 다시 실행된다.
    // promise객체의 result값이 변수 result에 할당된다.
    let result = await promise
}

f()
```
https://springfall.cc/post/7



### promise
promise로 비동기 작업을 만들때에는 new Promise를 하는 것이다.
```js
const promise = new Promise((resolve, reject) => {
    // 비동기 작업
})
```
new Promise안에 있는 콜백함수를 `executor`라고 부른다.
executor는 첫번째 인수로 resolve, 두번째 인수로 reject를 받는다.
resolve는 executor내에서 호출할 수 있는 또 다른 함수이며, resolve를 호출하게 된다면
비동기 작업이 성공했다는 의미다.
reject또한 executor내에서 호출할 수 있는 또 다른 함수이며 reject를 호출하게 된다면
비동기 작업이 실패했다는 의미다.
new Promise를 하는 순간 이곳에 할당된 비동기 작업은 바로 시작되며, 기다리지 않고
바로 호출해버린다.

### then / catch
promise가 끝나고 난 다음의 동작을 설정해줄 수 있는 게 바로 `then메서드`와 `catch메서드`이다.
then메서드는 해당 promise가 성공했을 때의 동작을 지정하며, 인자로 함수를 받는다.
catch메서드는 해당 promise가 실패했을 때 동작을 지정하며, 인자로 함수를 받는다.


### async await
async함수의 리턴 값은 promise이다.
await은 promise가 끝날 때까지 기다리라는 의미로 promise가 fulfilled(완료),
reject(에러)가 되든 끝날 때까지 기다리는 함수이다. await은 async함수 내부에서만 사용할 수 있다.

setTimeoutPromise의 executor에서 resolve함수가 호출될 때까지 기다린다. 그동안 startAsyncJobs는 멈춰있다.