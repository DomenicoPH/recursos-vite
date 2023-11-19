import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'
import Enlaces from './views/Enlaces/Enlaces'
import Portafolio from './views/Portafolio/Portafolio'
import Proyectos from './views/Proyectos/Proyectos'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enlaces' element={<Enlaces />}/>
        <Route path='/portafolio' element={<Portafolio />}/>
        <Route path='/proyectos' element={<Proyectos />}/>
      </Routes>
    </div>
  )
}

export default App
