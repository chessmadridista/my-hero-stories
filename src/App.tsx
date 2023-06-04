import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
