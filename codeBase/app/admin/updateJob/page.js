'use client';

import React from 'react'
import IndexPage from '../page'
import styles from '../../../styles/admin.module.css'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

function UpdateJob() {
    const [job, setJob] = useState({});
    const [_id, setJobId] = useState('');
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [EmploymentType, setEmploymentType] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [message, setMessage] = useState('');

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    
    useEffect(() => {
        // Define the ID you want to fetch
        const resourceId = id; // Replace with the actual ID
        // Make a GET request to the API route
        fetch(`/api/getJobById?id=${resourceId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                setJob(responseData);
                setJobId(responseData._id);
                setRole(responseData.role);
                setType(responseData.type);
                setLocation(responseData.location);
                setEmploymentType(responseData.EmploymentType);
                setJobDescription(responseData.jobDescription);
                setSkills(responseData.skills);
                setExperience(responseData.experience);
                setSelectedQuestions(responseData.selectedQuestions);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        const idToUpdate = job._id;
        const updateData = { "_id": _id, "role": role, "type": type, "location": location, "EmploymentType": EmploymentType, "jobDescription": jobDescription, "skills": skills, "experience": experience, "selectedQuestions": selectedQuestions };
        try {
            const response = await fetch('/api/crudJob', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: idToUpdate, updateData }),
            });

            if (response.status === 200) {
                setMessage('Record updated successfully');
            } else {
                setMessage('Error updating record');
            }
        } catch (error) {
            console.error('Error updating record:', error);
            setMessage('Error updating record');
        }
        setJobId('');
        setRole('');
        setType('');
        setLocation('');
        setEmploymentType('');
        setJobDescription('');
        setSkills('');
        setExperience('');
        setSelectedQuestions('');
    }
    
    return (
        <>
            <div className='container'>
                <div className='row'><IndexPage /></div><br /><br />
                <div className='row'>
                    <div className={styles.jobForm}>
                        <form onSubmit={submit}>
                            <div className={styles.formField}>
                                <label htmlFor="jobId" className={styles.formLabel}>Job ID:</label>
                                <input className={styles.formInput}
                                    type="text"
                                    id="jobId"
                                    value={_id}
                                    placeholder='Enter Job Id'
                                    onChange={(e) => setJobId(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"_id")}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="role" className={styles.formLabel}>Role:</label>
                                <input className={styles.formInput}
                                    type="text"
                                    id="role"
                                    value={role}
                                    placeholder='Enter Job role'
                                    onChange={(e) => setRole(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"role")}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="type" className={styles.formLabel}>Type:</label>
                                <select className={styles.formInput}
                                    id="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"type")}
                                    required>
                                    <option value="">Select a type</option>
                                    <option value="Onsite">Onsite</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="location" className={styles.formLabel}>Location:</label>
                                <input className={styles.formInput}
                                    type="text"
                                    id="location"
                                    value={location}
                                    placeholder='Enter Job Location'
                                    onChange={(e) => setLocation(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"location")}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="EmploymentType" className={styles.formLabel}>Employment Type:</label>
                                <select className={styles.formInput}
                                    id="EmploymentType"
                                    value={EmploymentType}
                                    onChange={(e) => setEmploymentType(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"EmploymentType")}
                                    required>
                                    <option value="">Select a Employment type</option>
                                    <option value="Full time">Full Time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="jobDescription" className={styles.formLabel}>Job Description:</label>
                                <textarea className={styles.formInput}
                                    type="text"
                                    id="jobDescription"
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"jobDescription")}
                                    placeholder="Enter job description"
                                    required
                                ></textarea>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="skills" className={styles.formLabel}>Skills required:</label>
                                <textarea className={styles.formInput}
                                    id="skills"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"skills")}
                                    placeholder="Enter skills required"
                                    required
                                ></textarea>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="experience" className={styles.formLabel}>Experience required:</label>
                                <textarea className={styles.formInput}
                                    id="experience"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"experience")}
                                    placeholder="Enter experience required"
                                    required
                                ></textarea>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="selectedQuestions" className={styles.formLabel}>Screening Questions:</label>
                                <input className={styles.formInput}
                                    type="text"
                                    id="selectedQuestions"
                                    value={selectedQuestions}
                                    onChange={(e) => setSelectedQuestions(e.target.value)}
                                    // onChange={(e) => handleInputChange(e,"experience")}
                                    placeholder="Enter screening questions"
                                    required
                                ></input>
                            </div>
                            <button className={styles.formSubmitButton} type="submit">Update Job</button>
                        </form>
                        {message}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateJob