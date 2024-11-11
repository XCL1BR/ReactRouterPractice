import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2>Job Openings</h2>
        <p>Check out our latest job openings at our company</p>
        <Outlet /> 
    </div>
  )
}

export default JobsLayout