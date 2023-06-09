### React Query
React Query는 리액트 애플리케이션에서 서버의 데이터를 조회하거나 캐싱, 업데이트, 에러 처리와 같은 비동기 로직을 지원하는 fetching 라이브러리이며, Server-side와 Client-side 사이에서 비동기 로직을 보다 쉽게 다루게 해주며 Server State를 관리해준다.
react-query 공식문서에서 react-query는 React 내에서 서버상태를 가져오고, 캐싱하고, 동기화하고, 업데이트 하는 작업을 쉽게 하는 라이브러리로 설명하고 있다
```sh
$ npm i react-query
```

>공식문서
https://tanstack.com/query/latest/docs/react/guides/window-focus-refetching?from=reactQueryV3&original=https%3A%2F%2Ftanstack.com%2Fquery%2Fv3%2Fdocs%2Fguides%2Fwindow-focus-refetching


### useQuery select
reactQuery를 이용해 서버로부터 데이터를 조회할 때 사용한다.
데이터베이스로 비유하면 select 같은 느낌이다.


### queryKey
useQuery마다 부여되는 고유 key값
```jsx
// persons가 queryKey값이다.
const res = useQuery('persons', queryFN)
```


### useMutation update
데이터 변경 작업을 할 때 사용