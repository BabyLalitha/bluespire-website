'use client'
import jobdata from "./data";
import JobCard from "./JobCard";
import { useState, useEffect } from 'react';
export default function PeopleRenderer() {
  const [Data, setJobData] = useState(null);
  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/crudJob')
      .then((response) => response.json())
      .then((data) => {
        setJobData(data); // Set the initial data to jobs state
        console.log('Fetched data:', data);
      })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);
  const arr = Data?.map((data) => {
    return (
      <JobCard
        id={data._id}
        type={data.jobType}
        jobTitle={data.jobTitle}
        location={data.location}
        experience={data.experience}
        companyName={data.companyName}
      />
    );
  });
  return (
    <div style={{ backgroundColor: '#FFFF', paddingTop: '2%' }}>
      <div className='bg-lightsteelblue'>
        <h1 className="text-black text-3xl font-semibold font-['Poppins'] text-center mb-11 font-pop ">All Listed jobs</h1>
        <div className='bg-ligthsteelblue  flex-wrap justify-center mb-15 '>
          {arr}
        </div>
      </div>
    </div>
  );
}