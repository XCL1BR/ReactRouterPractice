import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobData = useLoaderData();

    if (!jobData || !jobData.title) {
        return <p>Error: Job data not found.</p>;
    }

    return (
        <div>
            <p><b>Job Title:</b> {jobData.title}</p>
        </div>
    )
}

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:5000/jobs/' + id);
    
    if (!res.ok) {
        const errorMessage = await res.text(); // Get the error message from the response
        console.error('Fetch error:', errorMessage); // Log the error message
        throw new Error('Failed to fetch job data: ' + errorMessage);
    }

    return res.json();
}
