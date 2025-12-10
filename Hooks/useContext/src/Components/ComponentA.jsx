import React from 'react'
import ComponentC from './ComponentC'
import { useState,createContext } from 'react'

export const userContext = createContext();

const ComponentA = () => {
    const [user, setuser] = useState("Lucyyy")
  return (
    <div className="box">
      <h3>ComponentA</h3>
    <h2>{`Hello ${user}`}</h2>
   <userContext.Provider value={user}>
         <ComponentC />
   </userContext.Provider>
    </div>
  )
}

export default ComponentA
