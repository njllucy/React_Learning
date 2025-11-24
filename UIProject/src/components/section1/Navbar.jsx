import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-18 py-8 font-semibold'>
      <h4 className='bg-black text-white py-2 px-4 rounded-3xl uppercase space-x-4 tracking-widest text-xs'>Target Audience</h4>
      <button className='bg-gray-300 px-4 py-2 rounded-lg uppercase space-x-3 tracking-widest text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
