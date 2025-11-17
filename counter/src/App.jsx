import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCount] = useState(0);
  const addValue = () => {
    if(counter < 20){
    setCount(counter + 1);
    setCount(counter + 1);
    setCount(counter + 1);
    setCount(counter + 1);

    }
  };
  const removeValue = ()=>{
    if(counter > 0){
    setCount(counter-1)
    }
  }

  return (
    <>
      <h2 style={{backgroundColor:"teal",padding:"10px",borderRadius:"10px"}}>counter value is {counter}</h2>
      <button style={{backgroundColor:"white",color:"black",padding:"10px",borderRadius:"10px"}}
       onClick={addValue}>{counter} Added</button> <br />
      <br />
      <button style={{backgroundColor:"red",padding:"10px",borderRadius:"10px"}}
       onClick={removeValue}>{counter} Removed</button>
    </>
  );
}

export default App;
