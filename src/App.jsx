import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'
import Enlaces from './views/Enlaces/Enlaces'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enlaces' element={<Enlaces />}/>
      </Routes>
    </div>
  )
}

export default App
