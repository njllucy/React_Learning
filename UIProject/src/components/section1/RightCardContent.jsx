import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className=' absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h1 className='bg-white rounded-full w-12 h-12 flex justify-center items-center text-2xl font-semibold'>{props.id}</h1>
        <div className=' '>
            <p className='text-white text-lg leading-normal mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempore.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-500 px-5 py-2 rounded-4xl font-semibold text-white '>{props.tag}</button>
                <button className='bg-blue-500 px-2  rounded-full text-white'><i className="ri-arrow-right-circle-line text-2xl"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
