import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
        <h1>Contact</h1>
        <div className='contact-button'>
          <button onClick={()=>navigate('info')}>Contact Info</button>
          <button onClick={()=>navigate('form')}>Contact Form</button>


        </div>
    </div>
  )
}

export default Contact

//here first we import useNavigate from react-router-dom to use navigate function to navigate to other routes.
//then we create a Contact component which renders a heading and two buttons.
//then those buttons are used to navigate to the ContactInfo and ContactForm routes as it has navigate() function ie when clicked on those buttons, it will navigate to the respective routes.