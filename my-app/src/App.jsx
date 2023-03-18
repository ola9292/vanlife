import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Vans from './Vans'
// import Navbar from './Navbar'
import VanDetail from './VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './pages/host/HostLayout'
import './style.css'
import "./server"
function App() {
 

  return (
    <div className="App">
   
      <Routes>
        <Route element={ <Layout/> }>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="vans" element={ <Vans/> } />
          <Route path="vans/:id" element={ <VanDetail/> } />
     
         
          <Route path="/host" element={ <HostLayout/> }>
            <Route index element={ <Dashboard/> } />
            <Route path="income" element={ <Income/> } />
            <Route path="reviews" element={ <Reviews/> } />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
