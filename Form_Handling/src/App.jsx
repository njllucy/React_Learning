import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name'/> <br />
        <input type="email" placeholder='enter your mail'/> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
