import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='items-center flex py-4 px-8 bg-cyan-300 justify-between'>
      <h2 className='text-xl font-bold'>Lucyyys</h2>
      <div className="flex gap-8 font-semibold">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
