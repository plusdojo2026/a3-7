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
import MyPage from './MyPage/MyPage'
import FooterComponent from './Components/FooterComponent'
import Layout from './layouts/layout'
import LayoutComponent from './Components/LayoutComponent'
import Progress from './Progress/Progress'
import Memory from './Memory/Memory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/NewRegist' element={<NewRegist></NewRegist>}></Route>

            <Route element={<Layout></Layout>}>
              <Route path='/Home' element={<Home></Home>}></Route>
            </Route>

            <Route element={<LayoutComponent></LayoutComponent>}>
            <Route path='/Progress' element={<Progress></Progress>}></Route>
            <Route path='/MyPage' element={<MyPage></MyPage>}></Route>
            <Route path='/Memory' element={<Memory></Memory>}></Route>
            </Route>

          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
