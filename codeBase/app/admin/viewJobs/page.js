'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../../../styles/admin.module.css'
import { useRouter } from 'next/navigation'
import Search from '../../../components/search.js'

function Viewjob() {
  //const [items, setItems] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/crudJob')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data); // Set the initial data to jobs state
        setFilteredJobs(data); // Set the same data to filteredJobs
      })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);


  // setFilteredJobs(jobs);

  const deleteById = async (id) => {
    const c = window.confirm("Are you sure you want to delete this job?");
    if (c) {
      try {
        const response = await fetch('/api/crudJob', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.status === 200) {
          // Update the message state outside of the fetch block
          setMessage('Records deleted successfully');
          // Update the jobs state outside of the fetch block
          setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        } else {
          // Handle error conditions here
          setMessage('Error deleting records');
        }
      } catch (error) {
        // Handle fetch errors here
        console.error('Error deleting records:', error);
        setMessage('Error deleting records');
      }
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Implement your search logic here
    const results = jobs.filter((job) => {
      const searchFields = job.companyName + job.clientName + job.jobCategory + job.jobTitle + job.jobType + job.location + job.workplaceType + job.skills + job.experience + job.seniorityLevel + job.qualification + job.applnLink + job.jobDescription + job.selectedQuestions;
      return searchFields.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredJobs(results);
  };
  // console.log(jobs[0].active);

  return (
    <div>
      {/* <div className='container'> */}
      {/* <div className='row'><IndexPage /> */}
      <div className=" h-32  bg-gray-100 flex items-center justify-center"  style={{width:'100vw'}}>
        <div className="text-black text-3xl font-medium font-['Poppins']">
          List of Jobs
        </div>
      </div>
      <br />
      <div className="text-right pr-10">
        <Search onChange={handleSearch} value={searchQuery} />
      </div>
      {/* </div><br /> */}
      <div className="w-screen flex justify-center p-10 font-poppins text-[12px]">
        <table className="w-screen mx-auto border border-collapse">
          <thead>
            <tr>
              <th className="th">Job ID</th>
              <th className="th">Company Name</th>
              <th className="th">Client Name</th>
              <th className="th">Job Title</th>
              <th className="th">Job Category</th>
              <th className="th">Job Type</th>
              <th className="th">Location</th>
              <th className="th">Workplace Type</th>
              <th className="th">Skills</th>
              <th className="th">Experience</th>
              <th className="th">seniority Level</th>
              <th className="th">Qualification</th>
              <th className="th">Application Link</th>
              <th className="th">Job Description</th>
              <th className="th">Screening Questions</th>
              <th className="th">Active</th>
              <th className="th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchQuery ?
              (filteredJobs.map((job, index) => (
                <tr key={job._id} className="border-t">
                  <td className="td">{job.jobId}</td>
                  <td className="td">{job.companyName}</td>
                  <td className="td">{job.clientName}</td>
                  <td className="td">{job.jobTitle}</td>
                  <td className="td">{job.jobCategory}</td>
                  <td className="td">{job.jobType}</td>
                  <td className="td">{job.location}</td>
                  <td className="td">{job.workplaceType}</td>
                  <td className="td">{job.skills}</td>
                  <td className="td">{job.experience}</td>
                  <td className="td">{job.seniorityLevel}</td>
                  <td className="td">{job.qualification}</td>
                  <td className="td">{job.applnLink}</td>
                  <td className="td">{job.jobDescription}</td>
                  <td className="td">{job.selectedQuestions.join(',')}</td>
                  <td className="td">{job.active}</td>
                  <td className="td"><button className={styles.link} onClick={() => deleteById(job._id)}>Delete</button>
                    <button className={styles.link} onClick={() => router.push(`/admin/updateJob?id=${job._id}`)}>Update</button></td>
                </tr>
              ))) :
              (jobs.map((job, index) => (
                <tr key={job._id} className="border-t">
                  <td className="td">{job.jobId}</td>
                  <td className="td">{job.companyName}</td>
                  <td className="td">{job.clientName}</td>
                  <td className="td">{job.jobTitle}</td>
                  <td className="td">{job.jobCategory}</td>
                  <td className="td">{job.jobType}</td>
                  <td className="td">{job.location}</td>
                  <td className="td">{job.workplaceType}</td>
                  <td className="td">{job.skills}</td>
                  <td className="td">{job.experience}</td>
                  <td className="td">{job.seniorityLevel}</td>
                  <td className="td">{job.qualification}</td>
                  <td className="td">{job.applnLink}</td>
                  <td className="td">{job.jobDescription}</td>
                  <td className="td">{job.selectedQuestions.join(',')}</td>
                  <td className="td">{job.active}</td>
                  <td className="td"><button className={styles.link} onClick={() => deleteById(job._id)}>Delete</button>
                    <button className={styles.link} onClick={() => router.push(`/admin/updateJob?id=${job._id}`)}>Update</button></td>
                </tr>
              )))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Viewjob