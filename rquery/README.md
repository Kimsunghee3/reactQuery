### ReactQuery

```sh
$ npx create-react-app
$ npm install react-query
```
### setQueryData
로컬 상태 업데이트를 위한 메서드
스턴스에 저장된 쿼리 데이터를 업데이트하여 해당하는 컴포넌트를 리렌더링합니다. 이는 로컬 상태를 변경하기 위해 사용되며 
주로 로컬 작업 또는 캐시 데이터의 업데이트를 처리할 때 사용됩니다. 데이터 업데이트 후에 React Query는 자동으로 쿼리의 결과를 재요청하지 않으므로 주의해야 합니다. 

### useMutation
비동기 작업을 수행하고 백엔드와의 상호작용을 처리하기 위해 사용된다.
```jsx
# isLoading

# isError
# 에러의 상태에 따라 ui조정
const { mutate, isLoading, isError, error}


// isError값이 true인경우 error.message를 사용하여 에러메시지를 표현
if(isError){
    return <div>Error:{error.message}</div>
// false일 경우 else를 출력
}else{
    return <button onClick={handleAsyncAction}>click me!!</button>
}
```

### query cache
react query를 이용해서 사용된 쿼리의 메타 정보와 상태 등의 데이터를 저장하는 용도로 사용한다.
onError, onSuccess콜백을 사용하여 어플리케이션 전역에 이벤트를 핸들링 할 수 있다.


### useQuery
서버에서 데이터를 가져오기 위해 사용하는 hook이다.
unique key, promise기반의 함수, 옵션 값을 파라미터로 받아서 동작한다.
unique key는 어플리케이션 전역에서 해당 쿼리를 refetching, caching, sharing하는 용도로 사용되며
쿼리의 리턴 값으로 status, data, error와 같은 템플릿을 포함하여 데이터 사용에 필요한 정보가 제공된다.

>isLoading
쿼리에 데이터가 없고 fetching하는 상태

>isError
쿼리에 에러가 발생한 상태

>isSuccess
쿼리가 성공적으로 실행되었고 데이터를 사용가능한 상태

> isIdle
쿼리를 사용할 수 없는 상태

> error
쿼리가 isError인 경우 에러 정보 확인을 위해 사용하는 프로퍼티

> data
쿼리가 isSucess 상태인 경우 데이터 사용을 위해 사용하는 프로퍼티

> isFetching
쿼리의 fetching/refetching여부에 대한 boolean값