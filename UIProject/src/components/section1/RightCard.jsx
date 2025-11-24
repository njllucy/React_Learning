import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full overflow-hidden w-60  relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />

      <RightCardContent tag={props.tag} id={props.id}/>

    </div>
  )
}

export default RightCard
