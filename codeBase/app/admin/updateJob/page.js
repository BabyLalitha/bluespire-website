'use client';

import React from 'react'
import IndexPage from '../page'
import styles from '../../../styles/admin.module.css'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

function UpdateJob() {
    const [job, setJob] = useState({});
    const [_id, setJobId] = useState('');
    // const [role, setRole] = useState('');
    // const [location, setLocation] = useState('');
    // const [type, setType] = useState('');
    // const [EmploymentType, setEmploymentType] = useState('');
    // const [jobDescription, setJobDescription] = useState('');
    // const [skills, setSkills] = useState('');
    // const [experience, setExperience] = useState('');
    // const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [qualification, setQualification] = useState('');
    const [applnLink, setApplnLink] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    var [active, setActive] = useState(false);
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
                setCompanyName(responseData.companyName);
                setCompanyWebsite(responseData.companyWebsite);
                setJobTitle(responseData.jobTitle);
                setJobCategory(responseData.jobCategory);
                setJobType(responseData.jobType);
                setLocation(responseData.location);
                setSkills(responseData.skills);
                setExperience(responseData.experience);
                setQualification(responseData.qualification);
                setApplnLink(responseData.applnLink);
                setJobDescription(responseData.jobDescription);
                setActive(responseData.active);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        const idToUpdate = job._id;
        const updateData = { "_id":_id,"companyName":companyName,"companyWebsite":companyWebsite,"jobTitle":jobTitle,"jobCategory":jobCategory,"jobType":jobType,"location":location,"skills":skills,"experience":experience,"qualification":qualification,"applnLink":applnLink,"jobDescription":jobDescription,"active":active };
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
        setCompanyName('');
        setCompanyWebsite('');
        setJobTitle('');
        setJobCategory('');
        setJobType('');
        setLocation('');
        setSkills('');
        setExperience('');
        setActive(false);
        setQualification('');
        setApplnLink('');
        setJobDescription('');
    }

    const handleToggle = () => {
        if (active == false) {
            active = true;
            setActive(true);
        }
        else {
            active = false;
            setActive(false);


        } // Toggle the state

        console.log(active);
    };
    
    return (
        // <div className='font-poppins'>
        //     <div className='container'>
        //         <div className='row'><IndexPage /></div><br /><br />
        //         <div className='row'>
        //             <div className={styles.jobForm}>
        //                 <form onSubmit={submit}>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="jobId" className={styles.formLabel}>Job ID:</label>
        //                         <input className={styles.formInput}
        //                             type="text"
        //                             id="jobId"
        //                             value={_id}
        //                             placeholder='Enter Job Id'
        //                             onChange={(e) => setJobId(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"_id")}
        //                             required
        //                         />
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="role" className={styles.formLabel}>Role:</label>
        //                         <input className={styles.formInput}
        //                             type="text"
        //                             id="role"
        //                             value={role}
        //                             placeholder='Enter Job role'
        //                             onChange={(e) => setRole(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"role")}
        //                             required
        //                         />
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="type" className={styles.formLabel}>Type:</label>
        //                         <select className={styles.formInput}
        //                             id="type"
        //                             value={type}
        //                             onChange={(e) => setType(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"type")}
        //                             required>
        //                             <option value="">Select a type</option>
        //                             <option value="Onsite">Onsite</option>
        //                             <option value="Hybrid">Hybrid</option>
        //                             <option value="Remote">Remote</option>
        //                         </select>
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="location" className={styles.formLabel}>Location:</label>
        //                         <input className={styles.formInput}
        //                             type="text"
        //                             id="location"
        //                             value={location}
        //                             placeholder='Enter Job Location'
        //                             onChange={(e) => setLocation(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"location")}
        //                             required
        //                         />
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="EmploymentType" className={styles.formLabel}>Employment Type:</label>
        //                         <select className={styles.formInput}
        //                             id="EmploymentType"
        //                             value={EmploymentType}
        //                             onChange={(e) => setEmploymentType(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"EmploymentType")}
        //                             required>
        //                             <option value="">Select a Employment type</option>
        //                             <option value="Full time">Full Time</option>
        //                             <option value="Contract">Contract</option>
        //                             <option value="Internship">Internship</option>
        //                         </select>
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="jobDescription" className={styles.formLabel}>Job Description:</label>
        //                         <textarea className={styles.formInput}
        //                             type="text"
        //                             id="jobDescription"
        //                             value={jobDescription}
        //                             onChange={(e) => setJobDescription(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"jobDescription")}
        //                             placeholder="Enter job description"
        //                             required
        //                         ></textarea>
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="skills" className={styles.formLabel}>Skills required:</label>
        //                         <textarea className={styles.formInput}
        //                             id="skills"
        //                             value={skills}
        //                             onChange={(e) => setSkills(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"skills")}
        //                             placeholder="Enter skills required"
        //                             required
        //                         ></textarea>
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="experience" className={styles.formLabel}>Experience required:</label>
        //                         <textarea className={styles.formInput}
        //                             id="experience"
        //                             value={experience}
        //                             onChange={(e) => setExperience(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"experience")}
        //                             placeholder="Enter experience required"
        //                             required
        //                         ></textarea>
        //                     </div>
        //                     <div className={styles.formField}>
        //                         <label htmlFor="selectedQuestions" className={styles.formLabel}>Screening Questions:</label>
        //                         <input className={styles.formInput}
        //                             type="text"
        //                             id="selectedQuestions"
        //                             value={selectedQuestions}
        //                             onChange={(e) => setSelectedQuestions(e.target.value)}
        //                             // onChange={(e) => handleInputChange(e,"experience")}
        //                             placeholder="Enter screening questions"
        //                             required
        //                         ></input>
        //                     </div>
        //                     <button className={styles.formSubmitButton} type="submit">Update Job</button>
        //                 </form>
        //                 {message}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
        <div>
            <div className="w-200 h-32 bg-gray-100 flex items-center justify-center">
                        <div className="text-black text-3xl font-medium font-['Poppins'] ">
                            Create Job
                        </div>
                    </div>

                    <div className="flex w-100 place-content-center text-black text-[25] font-medium font-['Poppins'] pt-32 ">
                        <form onSubmit={submit}>
                            <div>
                                {/* <p className="mt-1 text-base leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="companyName" >
                                            Company Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="companyName"
                                                id="companyName"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                                className="form-text"
                                                placeholder="Name"

                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 pl-3">
                                        <label htmlFor="companyWebsite" >
                                            Company Website
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="companyWebsite"
                                                id="companyWebsite"
                                                value={companyWebsite}
                                                onChange={(e) => setCompanyWebsite(e.target.value)}
                                                className="form-text"
                                                placeholder="Website Link"

                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="jobTitle" >
                                            Job Title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="jobTitle"
                                                name="jobTitle"
                                                type="text"
                                                value={jobTitle}
                                                onChange={(e) => setJobTitle(e.target.value)}
                                                className="form-text w-full"
                                                placeholder="Title"

                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="jobCategory" >
                                            Job Category
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="jobCategory"
                                                name="jobCategory"
                                                value={jobCategory}
                                                onChange={(e) => setJobCategory(e.target.value)}
                                                className="form-text"
                                            >
                                                <option>select</option>
                                                <option>Technology 1</option>
                                                <option>Technology 2</option>
                                                <option>Technology 3</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 pl-3">
                                        <label htmlFor="jobType" >
                                            Job Type
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="jobType"
                                                name="jobType"
                                                value={jobType}
                                                onChange={(e) => setJobType(e.target.value)}
                                                className="form-text"
                                            >
                                                <option>select</option>
                                                <option>Full Time</option>
                                                <option>Part Time</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 ">
                                        <label htmlFor="locationName" >
                                            Job Location
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="locationName"
                                                id="locationName"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="form-text"
                                                placeholder="Location"

                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 pl-3">
                                        <label htmlFor="Skill" >
                                            Skills
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="skill"
                                                name="skill"
                                                value={skills}
                                                onChange={(e) => setSkills(e.target.value)}
                                                className="form-text"
                                            >
                                                <option>select</option>
                                                <option>Java</option>
                                                <option>JavaScript</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 ">
                                        <label htmlFor="experience" >
                                            Experience
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="experience"
                                                id="experience"
                                                value={experience}
                                                onChange={(e) => setExperience(e.target.value)}
                                                className="form-text"
                                                placeholder="Experience"

                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 pl-3">
                                        <label htmlFor="qualification" >
                                            Qualification
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="qualification"
                                                id="qualification"
                                                value={qualification}
                                                onChange={(e) => setQualification(e.target.value)}
                                                className="form-text"
                                                placeholder="Qualification"

                                            />
                                        </div>
                                    </div>

                                    {/* <div className="col-span-full">
                                        <label for="applicationDeadLine" >
                                            Application Deadline
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="applicationDeadLine"
                                                id="applicationDeadLine"
                                                
                                                className="form-text w-full"
                                                placeholder="Job Application Deadline"

                                            />
                                        </div>
                                    </div> */}

                                    <div className="col-span-full">
                                        <label htmlFor="jobApplicationLink" >
                                            Job Application Link
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="url"
                                                name="jobApplicationLink"
                                                id="jobApplicationLink"
                                                value={applnLink}
                                                onChange={(e) => setApplnLink(e.target.value)}
                                                className="form-text w-full"
                                                placeholder="Job application link url"
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                       

                                        <div className="col-span-full">
                                            <label htmlFor="jobDescription">
                                                Job Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="jobDescription"
                                                    name="jobDescription"
                                                    rows="3"
                                                    className="form-text w-full h-52"
                                                    placeholder="Job Description"
                                                    value={jobDescription}
                                                    onChange={(e) => setJobDescription(e.target.value)}
                                                ></textarea>
                                            </div>

                                            <div className="col-span-full">
                                                <label htmlFor="active">Active</label>
                                                <div className="mt-2">
                                                    <button type="button"
                                                        className={`${active ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                                                            } px-4 py-2 rounded-full`}
                                                        onClick={handleToggle}
                                                    >
                                                        {active ? 'ON' : 'OFF'}
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <p className="mt-3 text-base leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
                                        </div>

                                       
                                    </div>
                                </div>

                                <div>
                                    
                                </div>
                            </div>

                            <div className="w-100 pb-40 flex items-end justify-end" >
                                <button
                                    className="rounded-full  bg-sky-800  text-white h-14 w-40"
                                    type="submit"
                                >
                                    <div className=" p-50">Update Job </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

    )
}

export default UpdateJob