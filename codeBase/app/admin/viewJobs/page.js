'use client';

import React from 'react'
import IndexPage from '../page.js'
import { useState, useEffect } from 'react';
import styles from '../../../styles/admin.module.css'
import {useRouter} from 'next/navigation'

function Viewjob() {
    //const [items, setItems] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [message,setMessage]=useState('');

    const router=useRouter();

    useEffect(() => {
        // Fetch data from the API route
        fetch('/api/crudJob')
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const deleteById=async(id)=>{
        const c=window.confirm("Are you sure you want to delete this job?")
        if(c){
        try {
            const response = await fetch('/api/crudJob', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id }), 
            });

              if (response.status === 200) {
                setMessage('Records deleted successfully');
              } else {
                setMessage('Error deleting records');
              }
            } catch (error) {
              console.error('Error deleting records:', error);
              setMessage('Error deleting records');
            }
            setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        }
    }

    return (

        <div className='container'>
            <div className='row'><IndexPage /></div><br />
            <div className='row'>
                <table className='table table-bordered table-hovered'>
                    <thead>
                    <tr>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Job ID</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Role</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Type</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Location</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Employment Type</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Job Description</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Skills Required</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Experience Required</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Screening Questions Ids</th>
                        <th style={{position:"sticky",top:"0",backgroundColor:"#fff"}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                   {jobs.map((job,index) => (
                    <tr key={job._id}>
                            <td>{job._id}</td>
                            <td>{job.role}</td>
                            <td>{job.type}</td>
                            <td>{job.location}</td>
                            <td>{job.EmploymentType}</td>
                            <td>{job.jobDescription}</td>
                            <td>{job.skills}</td>
                            <td>{job.experience}</td>
                            <td>{job.selectedQuestions.join(',')}</td>
                            <td><button className={styles.link} onClick={()=>deleteById(job._id)}>Delete</button><button className={styles.link} onClick={()=>router.push(`/admin/updateJob?id=${job._id}`)}>Update</button></td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Viewjob