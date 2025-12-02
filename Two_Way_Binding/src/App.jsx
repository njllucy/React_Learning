import React, { useState } from 'react'

const App = () => {
 const [title, settitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    settitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='enter your name'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}
        /> <br />
        
        <input type="email" placeholder='enter your mail'/> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
