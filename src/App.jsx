import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
