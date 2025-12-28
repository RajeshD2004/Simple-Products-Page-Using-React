import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Counter from './components/Counter'
import NavBar1 from './components/NavBars/NavBar1'
import NavBar2 from './components/NavBars/NavBar2'
import NavBar3 from './components/NavBars/NavBar3'
import NavBar4 from './components/NavBars/NavBar4'
import NavBar5 from './components/NavBars/NavBar5'
import NavBar6 from './components/NavBars/NavBar6'
import Cards from './components/Cards'
import ApiCall from './components/ApiCall'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/aboutPage' element={<AboutPage/>}/>
      <Route path='/products' element={<ApiCall/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
