import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { userContext } from './ComponentA'

const ComponentB = () => {
    const user=useContext(userContext);
  return (
    <div className='box'>
      <h3>ComponentB</h3>
      {/* <ComponentC /> */}
      <h3>{`hey,${user} again`}</h3>
    </div>
  )
}

export default ComponentB
