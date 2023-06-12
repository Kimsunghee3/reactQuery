### recoil
react상태 관리를 위한 라이브러리이다.
실습을 위하여 기본셋팅을 해주자.

```sh
npx create-react-app

# 설치
npm install recoil
```

### recoilRoot
recoil을 사용하기 위해서는 recoilRoot가 필요하다.
루트 컴포넌트가 recoilRoot를 넣기에 가장 좋은 장소이다.


### atom
atom은 상태(state)의 일부를 나타낸다.
atom은 고유한 키와 초기값을 가지며 이를 통해 recoil에서해당 상태를 식별하고 관리한다.
`useRecoilState`, `useRecoilValue`를 사용하여 해당 atom 상태 값을 가져올 수 있다.
useRecoilState, useRecoilValue는 상태값을 반환한다.
atom은 컴포넌트에서 상태를 공유할 수 있도록 해준다. 
이를 통해 여러 컴포넌트에서 동일한 `atom`을 사용하여 전역 상태를 읽고 업데이트 할 수 있다.
atom은 어떤 컴포넌트에서나 읽고 쓸 수 있으며, atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.
따라서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트가 재렌더링되는 결과가 발생할 것이다.


### selector
파생된 상태의 일부를 나타낸다. 파생된 상태는 상태의 변화다. 
파생된 상태를 어떤 방법으로든 주어진 상태를 수정하는 순수함수에 전달된 상태의 결과물로 생각할 수 있다.

