import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams();
    console.log(params.id);
  return (
    <div>
      <h3>{params.id} Course Details</h3>
    </div>
  )
}

export default CourseDetails
