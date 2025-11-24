import { useState } from 'react'
import Button from './components/Button'
// import './App.css'

function App() {
  const [color, setColor] = useState("teal")

  return (
    
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-2 rounded-2xl'>
            <Button name="Red" handleClick={() => setColor("red")} />
            <Button name="Green" handleClick={() => setColor("green")} />
            <Button name="Black" handleClick={() => setColor("black")} />
            <Button name="orange" handleClick={() => setColor("orange")} />
          </div>
        </div>
      </div>
      

    
  )
}

export default App
