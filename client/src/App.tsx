import { useState } from 'react'
import './App.css'
import Home from './Views/Home'

function App() {
  const [count, _setCount] = useState(0)

  return (
    <>
    <Home/>
      <h1>{count}</h1>
    </>
  )
}

export default App
