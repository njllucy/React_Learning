import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='overflow-x-auto rounded-4xl p-6 h-full w-2/3 flex flex-nowrap gap-5'>
      {props.users.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag} id={elem.id}/>;
      })}



    </div>
    
  )
}

export default RightContent
