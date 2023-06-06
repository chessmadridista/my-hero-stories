import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Stories from './components/stories/Stories'

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/stories' element={<Stories />} />
      </Routes>
    </>
  )
}

export default App
