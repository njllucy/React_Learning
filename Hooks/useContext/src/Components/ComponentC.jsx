import React from 'react'
import ComponentD from './ComponentD'
import { useContext } from 'react'
import { userContext } from './ComponentA'

const ComponentC = () => {
    const user=useContext(userContext);
  return (
    <div className='box'>
      <h3>ComponentC</h3>
      {/* <h3>{`hy in the middle,${user}`}</h3> */}
      <ComponentD />
    </div>
  )
}

export default ComponentC
