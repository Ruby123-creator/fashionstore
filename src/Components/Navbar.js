import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
       <div className="navbar">
         <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
         </div>
        </div> 
    </div>
  )
}

export default Navbar