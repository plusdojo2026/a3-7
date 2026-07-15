import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MissionComponent from './Components/MissionComponent'
import Home from './Home/Home'
import Login from './Login/Login'
import NewRegist from './Login/NewRegist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Routes>
            <Route index element={<Login></Login>}></Route>
            <Route path='/NewRegist' element={<NewRegist></NewRegist>}></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
