import { useState,useEffect } from 'react'


import './App.css'

function App() {
  const [cards,setCards]=useState([])

  const fetchData = async()=>{
    let a = await fetch ("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    // console.log(data)
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <>
    <div className="container flex-wrap px-5">
        {cards.map((card) => {

      return <div key={card.id} className="card">
        <h1 className='mb-5 uppercase'>Title : {card.title}</h1>
        <p className='mb-5'>Content : {card.body}</p>
        <span className='text-sm font-bold text-gray-500'>By:UserId:{card.userId}</span>
      </div>

        })}
    </div>
     
    </>
  )
}

export default App
