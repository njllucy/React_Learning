import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
   <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FB8u9ENDN2oXcHSYR-e57Fed1V_HpsqN8A&s" alt=""
    style = {{backgroundColor:"teal", overflow:"hidden"}}
    />
    <h1 >{props.title}</h1>
    <p>{props.description}</p>
   </div>
  )
}

export default Card
