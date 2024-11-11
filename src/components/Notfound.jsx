import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
const navigate = useNavigate()
  return (
    <div>
        
        <h2>404  | Page Not Found</h2>
      <button onClick={() => navigate('/')}>Go Back to Home</button>//This will redirect to home page when clicked.
    
    </div>
  )
}

export default Notfound




