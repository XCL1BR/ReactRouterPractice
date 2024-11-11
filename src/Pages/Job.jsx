import React from 'react'
import { Link,useLoaderData } from 'react-router-dom'

const Job = () => {
    const jobsdata=useLoaderData();
  return (
    <div className='jobs'>
        {jobsdata.map((job) => {
            return <Link>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
            <p>{job.company}</p>
            <p>{job.description}</p>
            </Link>
        })}
    </div>
  )
}

export default Job


//jobloader is async function which returns a promise which resolves to the component when the job data is fetched
export const JobLoader = async () => {
const res = await fetch('http://localhost:5000/jobs');
return res.json();
}


//for react router loader usage we create a json file with the same structure as above
//this json file contaoains the job data and can be imported into a react component using the useStaticQuery hook
//then we right click on the json file and select integrated terminal and run the following command
//npx json-server --watch data.json --port 3001(any portnumber you want)
//this will start a json server at http://localhost:3001/jobs
//then we use this link in loader function of react router
//react router loader is a function that returns a promise which resolves to the component when the route data is fetched
//then we import it in job.jsx file and use it in the Job component
//finally we use the JobLoader function which returns a promise which resolves to the component when the job data is fetched in the Job component