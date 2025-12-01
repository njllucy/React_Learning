import React from 'react'
import { useParams } from 'react-router-dom';
const Login = () => {
    const params = useParams();
  return (
    <div>
      Welcome to login page {params.username}
    </div>
  )
}

export default Login
