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


### todo 할일 관리 프로그램만들기
물론입니다! Recoil, useQuery, useMutation을 활용하여 간단한 할일 관리 애플리케이션을 만들어보는 것을 추천드립니다. 이를 통해 세 가지 라이브러리를 함께 사용하는 방법과 데이터 상태 관리, 비동기 데이터 처리 등을 경험할 수 있습니다.

할일 관리 애플리케이션은 일상 생활에서 자주 사용되는 기능이고, 간단하면서도 실용적인 예시입니다. 사용자가 할일을 추가하고, 완료한 할일을 체크박스로 표시하는 기능을 구현해보세요. 이를 위해 Recoil의 atom과 selector를 사용하여 할일 목록을 관리하고, react-query의 useQuery와 useMutation을 사용하여 데이터를 가져오고 수정합니다.

위의 코드 예시를 참고하여 할일 목록 애플리케이션을 만들어보세요. 사용자가 새로운 할일을 입력하고 추가할 수 있으며, 추가된 할일 목록을 화면에 표시합니다. 또한 완료한 할일은 체크박스를 통해 표시할 수 있도록 구현해보세요.

이를 통해 Recoil, useQuery, useMutation의 활용 방법을 실제 예시를 통해 익힐 수 있을 것입니다. 만들어보면서 필요한 부분이나 궁금한 점이 있다면 언제든지 물어보세요!
```jsx

```
