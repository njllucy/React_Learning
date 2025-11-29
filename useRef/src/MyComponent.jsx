import React from 'react'
import { useState,useEffect,useRef } from 'react'
const MyComponent = () => {
    // let [number,setNumber]=useState(0);

    // const ref =useRef(0);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(()=>{
        console.log("rendered");
        // console.log(inputRef);
    })


    function handleClick1(){
        // setNumber(number+1)
        // ref.current++;
        // console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

      function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";

    }

      function handleClick3(){
        inputRef3.current.focus();
        inputRef2.current.style.backgroundColor="";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
    }

  return (
    <div>
      <button onClick={handleClick1}
      >Click me 1</button> <br />
      <input ref={inputRef1}/>
<br /><br />
      <button onClick={handleClick2}
      >Click me 2</button> <br />
      <input ref={inputRef2}/>
<br /><br />
      <button onClick={handleClick3}
      >Click me 3</button> <br />
      <input ref={inputRef3}/>
    </div>
  )
}

export default MyComponent
