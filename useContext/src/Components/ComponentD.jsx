import React from 'react'
import { useContext } from 'react'
import { userContext } from './ComponentA'
import ComponentB from './ComponentB';

const ComponentD = () => {
    const user=useContext(userContext);
  return (
    <div className='box'>
      <h3>ComponentD</h3>
      <h2>{`Bye,${user}`}</h2>
      <ComponentB />
    </div>
  )
}

export default ComponentD
