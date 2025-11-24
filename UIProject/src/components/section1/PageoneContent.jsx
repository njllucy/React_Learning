import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const PageoneContent = (props) => {
  return (
    <div className=' gap-5 py-3 px-18 h-[90vh] flex justify-between'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageoneContent
