import './App.css'
import { Routes, Route } from "react-router-dom" 
import { }

function App() {
  return (
    <>
      <div className='App'>
        <h1>Awesome blog</h1>
        <Routes>
          <Route path="/" element={<PostLists />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
        </Routes>
      </div>
    </>
  )
}

export default App
