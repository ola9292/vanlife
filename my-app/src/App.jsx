import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Vans from './Vans'
import Navbar from './Navbar'
import './style.css'
function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="vans" element={ <Vans/> } />
       
      </Routes>
    </div>
  )
}

export default App
