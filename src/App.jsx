import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'
import Exchanges from './components/Exchanges'
import AboutDeveloper from './components/AboutDeveloper'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about-developer' element={<AboutDeveloper/>}/>
       <Route path='/coins' element={<Coins/>}/>
       <Route path='/exchanges' element={<Exchanges/>}/>
       <Route path='/coin/:id' element={CoinDetails}/>
      </Routes>
    </Router>
  )
}

export default App