import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
  // async function getData(){
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   console.log(response)
  // }

  // const getData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const data = await response.json();
  //   console.log(data);
  // }

  // const getData =async () => {
  //   const reponnse = await axios.get("https://jsonplaceholder.typicode.com/users")
  //   console.log(reponnse)
  // }

  const [data, setdata] = useState([])

  const getData = async()=>{
    const pics =await axios.get("https://picsum.photos/v2/list");
    console.log(pics.data);
    setdata(pics.data);
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem){
          return <div>
            <h3>Hello,{elem.author}</h3>
            <img src={elem.download_url} alt="pic" width="200px" height="200px"/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
