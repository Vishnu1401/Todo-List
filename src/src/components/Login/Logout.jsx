import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate=useNavigate();
  return (
    <div>
     {
         navigate("/")
     }
    </div>
  )
}

export default Logout
