import React, { useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Dasbboard = () => {
const navigate = useNavigate()

useEffect(()=>{
  
  axios.get('http://localhost:5000/api/auth/verify', {

headers: {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  "Content-Type": "application/json",
  Accept: "application/json"
}

  })

  .then((res)=>{
if(!res.data.status){
  localStorage.removeItem('token')
  navigate("/signin")

}

  })

}, [])


  return (
    <div>
      
      <h2>Welcome User</h2>

    </div>
  )
}

export default Dasbboard
