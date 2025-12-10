import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-between m-10'>
       <button onClick={()=>{
        navigate('/')
       }} className='active:scale-95 border-2 mt-5 p-2 rounded ml-10 font-semibold bg-pink-200'>Return to Home Page</button>

       <div>
        <button onClick={()=>{
        navigate(-1)
       }} className='active:scale-95 border-2 mt-5 p-2 rounded ml-10 font-semibold bg-pink-200'>Back</button>

       <button onClick={()=>{
        navigate(+1)
       }} className='active:scale-95 border-2 mt-5 p-2 rounded ml-10 font-semibold bg-pink-200'>Next</button>
       </div>
    </div>
  )
}

export default Navbar2
