import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Home from './components/home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
