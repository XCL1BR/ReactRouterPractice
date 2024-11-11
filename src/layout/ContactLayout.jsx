import React from 'react'
import Contact from '../Pages/Contact'
import { Outlet } from'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <Contact /> 
        <Outlet />  {/* This will render the content of the current route */}
    </div>
  )
}

export default ContactLayout


//Here we are foing to see the use of react-router-dom's Outlet component to render the content of the current route.
//nested routes can be added to ContactLayout component to handle different types of contact forms.
//ContactLayout is created to encapsulate the Contact component and its children routes ie ContactInfo and ContactForm.
//for this we are using react-router-dom's Outlet component which renders the content of the current route.
//first we import Outlet from react-router-dom then we create a ContactLayout component which contains the Contact component and Outlet.
//then we return the ContactLayout component and use it in the App.jsx file.
//children routes (ContactInfo and ContactForm) will be rendered inside the ContactLayout component.
//with the help of  <Route path='info' element={<ContactInfo/>}/> and <Route path='form' element={<ContactForm/>}/> which are added in the App.jsx file just below the Contactlayout.jsx, we are able to navigate to the respective routes.
//In Contact component, we have a button which redirects to the respective routes. ie when ContactInfo button is clicked, it redirects to /info and when ContactForm button is clicked, it redirects to /form.