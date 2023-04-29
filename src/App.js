import React from 'react'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { Route ,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import  './App.css'

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App