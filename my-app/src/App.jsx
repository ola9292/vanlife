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
import HostVans from './pages/host/HostVans'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing'

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
            <Route path="vans" element={ <HostVans/> } />
            <Route path="vans/:id" element={ <HostVanDetail/> }>
              <Route index element={ <HostVanInfo/> } />
              <Route path="pricing" element={ <HostVanPricing/> } />
              <Route path="photos" element={ <HostVanPhotos/> } />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
