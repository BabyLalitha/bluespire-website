'use client';

import React from 'react'
import IndexPage from '../page.js'
import { useState, useEffect } from 'react';
import styles from '../../../styles/admin.module.css'
// import Job from '../models/tblJobs'
import {useRouter} from 'next/navigation'

function Viewjob() {

    //const [items, setItems] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [message,setMessage]=useState('');
    const [update,setUpdate]=useState('');
    const[saveButton,setSaveButton]=useState(false);

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

    const updateById=(index)=>{
      //console.log(jobs[index]._id);
      setSaveButton(true);
      setUpdate(index);
    }

    const Submit=async(index)=>{
      // console.log(jobs[index]);
      const idToUpdate=jobs[index]._id;
      const updateData={"_id":jobs[index]._id,"role":jobs[index].role,"type":jobs[index].type,"location":jobs[index].location,"EmploymentType":jobs[index].EmploymentType,"jobDescription":jobs[index].jobDescription,"skills":jobs[index].skills,"experience":jobs[index].experience,"selectedQuestions":jobs[index].selectedQuestions};
      try {
        const response = await fetch('/api/crudJob', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id:idToUpdate,updateData }), 
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
    }

    const handleInputChange=(e,index,field)=>{
      const updatedData=[...jobs];
      if(field==='_id'){
        updatedData[index]._id=e.target.value;
      }
      if(field==='role'){
        updatedData[index].role=e.target.value;
      }
      if(field==='type'){
        updatedData[index].type=e.target.value;
      }
      if(field==='location'){
        updatedData[index].location=e.target.value;
      }
      if(field==='EmploymentType'){
        updatedData[index].EmploymentType=e.target.value;
      }
      if(field==='jobDescription'){
        updatedData[index].jobDescription=e.target.value;
      }
      if(field==='skills'){
        updatedData[index].skills=e.target.value;
      }
      if(field==='experience'){
        updatedData[index].experience=e.target.value;
      }
      setJobs(updatedData);
    }

    // const onUpdate=(id)=>{
    //   router.push({
    //     pathname : '/admin/updateJob',
    //     query : {id:id}
    //   });
    // }

    return (

        <div className='container'>
            <div className='row'><IndexPage /></div><br />
            <div className='row'>
                <table className='table table-bordered table-hovered'>
                    <thead>
                    <tr>
                        <th>Job ID</th>
                        <th>Role</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Employment Type</th>
                        <th>Job Description</th>
                        <th>Skills Required</th>
                        <th>Experience Required</th>
                        <th>Screening Questions Ids</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                   {jobs.map((item,index) => (
                    <tr key={item._id} >
                            <td>{update===index?
                            <input type="number"
                            value={item._id}
                            onChange={(e) => handleInputChange(e, index,"_id")}
                            />:
                            item._id
                            }</td>
                            <td>{update===index?
                            <input type="text"
                            value={item.role}
                            onChange={(e) => handleInputChange(e, index,"role")}
                            />:
                            item.role
                            }</td>
                            <td>{update===index?
                            <input type="text"
                            value={item.type}
                            onChange={(e) => handleInputChange(e, index,"type")}
                            />:
                            item.type
                            }</td>
                            <td>{update===index?
                            <input type="text"
                            value={item.location}
                            onChange={(e) => handleInputChange(e, index,"location")}
                            />:
                            item.location
                            }</td>
                            <td>{update===index?
                            <input type="text"
                            value={item.EmploymentType}
                            onChange={(e) => handleInputChange(e, index,"EmploymentType")}
                            />:
                            item.EmploymentType
                            }</td>
                            <td>{update===index?
                            <textarea
                            value={item.jobDescription}
                            onChange={(e) => handleInputChange(e, index,"jobDescription")}
                            />:
                            item.jobDescription
                            }</td>
                            <td>{update===index?
                            <textarea
                            value={item.skills}
                            onChange={(e) => handleInputChange(e, index,"skills")}
                            />:
                            item.skills
                            }</td>
                            <td>{update===index?
                            <textarea
                            value={item.experience}
                            onChange={(e) => handleInputChange(e, index,"experience")}
                            />:
                            item.experience
                            }</td>
                            <td>{update===index?
                            <input type="text"
                            value={item.selectedQuestions.join("\b")}
                            onChange={(e) => handleInputChange(e, index,"selectedQuestions")}
                            />:
                            item.selectedQuestions.join("\b")
                            }
                              </td>
                            <td><button className={styles.link} onClick={()=>deleteById(item._id)}>Delete</button><button className={styles.link}>Update</button>
                            {update===index && <button className={styles.link} onClick={()=>Submit(index)}>Save</button>}
                            </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Viewjob