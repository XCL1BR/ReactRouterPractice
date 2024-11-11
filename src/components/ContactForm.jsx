import React from 'react'

const ContactForm = () => {
  return (
    <div className='form'><h5>Contact Form</h5>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
  
    </div>
  )
}

export default ContactForm