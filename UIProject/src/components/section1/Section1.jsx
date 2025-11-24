import React from 'react'
import Navbar from './Navbar'
import PageoneContent from './PageoneContent';

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-green-50'>
        <Navbar />
        <PageoneContent users={props.users}/>
    </div>
  )
}

export default Section1
