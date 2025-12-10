import { useState,useEffect } from 'react'
import './App.css'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState("green")

  useEffect(()=>{
    document.title=`Count is ${count} ${color}`;
  },[count,color])
   
  function addValue(){
    setCount(count+1);
  }

  function changeColor(){
    setcolor(color==="green"?"red":"green");
  }


  return (
    <>
     <p style={{color:color}}>count : {count}</p>
     <button onClick={addValue}>Add</button> <br /> <br />
     <button onClick={changeColor}>Change color</button> <br /><br />
     <MyComponent />
    </>
  )
}

export default App
