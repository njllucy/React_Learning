import { useState,useCallback,useEffect,useRef } from 'react'
// import React from 'react'

function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [characterAllowed, setCharacterAllowed] = useState(false)
const [Password, setPassword] = useState("")
//UseRef Hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass=""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str += "0123456789"
  if(characterAllowed) str += "@#!$%^&*(){}[]/~"

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char);
  }
  setPassword(pass);

},[length,numberAllowed,characterAllowed,setPassword])

const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,9)
  window.navigator.clipboard.writeText(Password)
},[Password])

useEffect(()=>{
  passwordGenerator();
},[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <div className='text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-600'>
      <h1 className='font-bold text-white text-center mb-4'>Password Generator</h1>
      <div className='bg-white text-gray-600 flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
      value={Password} 
      className='outline-none w-full py-1 px-3'
      placeholder='password' readOnly ref={passwordRef}
       />
       <button
       onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Lenght: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          value={length}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           />
           <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
           <input 
          type="checkbox"
          defaultChecked={characterAllowed}
          id="characterInput"
          value={length}
          onChange={() => {
            setCharacterAllowed((prev) => !prev)
          }}
           />
           <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
