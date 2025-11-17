import React from 'react'

const Button = ({name,handleClick}) => {
  return (
    <>
    <div>
         <button
          onClick={handleClick}
          className='outline-none px-4 py-2 rounded-4xl text-white font-bold shadow-lg'
          style={{
            backgroundColor:name,
            


          }}>
            {name}
            </button>
    </div>
    </>
  )
}

export default Button
