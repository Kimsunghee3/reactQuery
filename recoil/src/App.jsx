import { RecoilRoot }from "recoil"
import { CharacterCounter } from "./pages"

function App(){
  return(
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  )
}

export default App