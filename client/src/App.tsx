import './App.css'
import HomePage from './views/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Views/Register'
import Login from './Views/Login'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
