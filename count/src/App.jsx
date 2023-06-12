import { Counter } from "./pages"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  );
}

export default App;
