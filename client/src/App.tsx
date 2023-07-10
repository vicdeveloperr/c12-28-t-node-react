import { useState } from 'react'
import './App.css'
import Home from './Views/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Views/Register'
import Login from './Views/Login'

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
