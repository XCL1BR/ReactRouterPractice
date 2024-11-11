import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Products from './Pages/Products'
import About from './Pages/About'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import Notfound from './components/Notfound'
import JobsLayout from './layout/JobsLayout'
import Job, { JobLoader } from './Pages/Job'
import JobDetails, { JobDetailsLoader } from './components/jobDetails'



// App component that will render the router provider with the router created above
const App = () => {
// Create a router with createBrowserRouter and createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/> }>   //whenever '/' is visited, RootLayout is rendered from that navbar is get aceesed like agar /about jaana hai to wo rootlayout ke navbar mei hai toh outlet ki help se hoga
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<ContactLayout/>}>
          <Route path='info' element={<ContactInfo/>}/>
          <Route path='form' element={<ContactForm/>}/>
        </Route>
        <Route path='jobs' element={<JobsLayout/>}>
        <Route index element={<Job/>} loader={JobLoader}/>
        <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader}/>        
        </Route>

        <Route path='*' element={<Notfound/>}/>  //for all other routes, it will redirect to Notfound component
     </Route>
  )
)



  return (
    <RouterProvider router={router}/>
  )
}

export default App 