'use client';

import React from 'react'
import IndexPage from '../page.js'
import styles from '../../../styles/admin.module.css'
import { useState } from 'react';

function Newjob() {
    // const [_id, setJobId] = useState('');
    // const [role, setRole] = useState('');
    // const [location, setLocation] = useState('');
    // const [type, setType] = useState('');
    // const [EmploymentType, setEmploymentType] = useState('');
    // const [jobDescription, setJobDescription] = useState('');
    // const [skills, setSkills] = useState('');
    // const [experience, setExperience] = useState('');
    // var [active, setActive] = useState(false);
    // const [isScreeningQuestionVisible, setScreenQuestionVisible] = useState(false);
    // const [checkBox, setCheckBox] = useState(false);
    // const [screeningQuestions, setScreeningQuestions] = useState([]);
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

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('/api/crudJob', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ _id, role, type, location, EmploymentType, jobDescription, skills, experience, active, selectedQuestions }),
    //     });
    //     if (response.ok) {
    //         console.log("added to database");
    //     }
    //     else {
    //         console.log("error");
    //     }
    //     // console.log(jobId);
    //     // console.log(selectedQuestions);
    //     setJobId('');
    //     setRole('');
    //     setType('');
    //     setLocation('');
    //     setEmploymentType('');
    //     setJobDescription('');
    //     setSkills('');
    //     setExperience('');
    //     setActive(false);
    //     setSelectedQuestions([])
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/crudJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ companyName,companyWebsite,jobTitle,jobCategory,jobType,location,skills,experience,qualification,applnLink,jobDescription,active }),
        });
        if (response.ok) {
            console.log("added to database");
        }
        else {
            console.log("error");
        }
        // console.log(jobId);
        // console.log(selectedQuestions);
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

    // const displayQuestions = () => {

    //     setScreenQuestionVisible(!isScreeningQuestionVisible);
    //     fetch('/api/getScreening')
    //         .then((response) => response.json())
    //         .then((data) => setScreeningQuestions(data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // };

    // const addQuestion = (id, c) => {
    //     if (c) {
    //         selectedQuestions.push(id);
    //     }
    //     else if (!c) {
    //         const i = selectedQuestions.indexOf(id);
    //         if (i != -1)
    //             selectedQuestions.splice(i, 1);
    //     }
    // }

    // Function to handle the toggle action
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

    // Dynamically assign the "on" class based on the toggle state
    // const buttonClass = isToggled ? 'on' : '';

    return (
        <div>
            {/* <div className='container'> */}
                {/* <div className='row'><IndexPage /></div><br /><br /> */}
                {/* <div className='row'> */}
                    {/* <div className={styles.jobForm}>
                        <form>
                            <div className={styles.formField}>
                                <label htmlFor="jobId" className={styles.formLabel}>Job ID:</label>
                                <input className={styles.formInput}
                                    type="text"
                                    id="jobId"
                                    placeholder='Enter Job Id'
                                    value={_id}
                                    onChange={(e) => setJobId(e.target.value)}
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
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="type" className={styles.formLabel}>Type:</label>
                                <select className={styles.formInput}
                                    id="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
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
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="EmploymentType" className={styles.formLabel}>Employment Type:</label>
                                <select className={styles.formInput}
                                    id="EmploymentType"
                                    value={EmploymentType}
                                    onChange={(e) => setEmploymentType(e.target.value)}
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
                                    placeholder="Enter experience required"
                                    required
                                ></textarea>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="screening questions" className={styles.formLabel}>Screening Questions:</label>
                                <input type="button" className={styles.formButton} onClick={displayQuestions} value="Add questions" />
                            </div>
                            <div className={styles.formField}>
                                {isScreeningQuestionVisible && <>
                                    <ul>
                                        <p>Select the screening questions for this job:</p>
                                        {screeningQuestions.map((item) => (
                                            <li key={item._id}>
                                                <input type="checkbox" value={checkBox} onChange={(e) => addQuestion(item._id, e.target.checked)}></input>{item.question}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                                }
                            </div>
                            <div className={styles.formField}>
                                <label className={styles.formLabel} htmlFor="active">Active:</label>
                                <button type="button"
                                    className={`${active ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                                        } px-4 py-2 rounded-full`}
                                    onClick={handleToggle}
                                >
                                    {active ? 'ON' : 'OFF'}
                                </button>
                            </div>
                            <button className={styles.formSubmitButton} onClick={onSubmit}>Post Job</button>
                        </form>

                        
                    </div> */}
                    <div className="w-200 h-32 bg-gray-100 flex items-center justify-center">
                        <div className="text-black text-3xl font-medium font-['Poppins'] ">
                            Create Job
                        </div>
                    </div>

                    <div className="flex w-100 place-content-center text-black text-[25] font-medium font-['Poppins'] pt-32 ">
                        <form onSubmit={onSubmit}>
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
                                    {/* <div className="sm:col-span-2">
          <label for="postal-code" >ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
          </div>
        </div> */}
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    {/* <h2 className=" font-semibold leading-7 text-gray-900">Profile</h2>
      <p className="mt-1 text-base leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p> */}

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        {/* <div className="sm:col-span-4">
          <label for="username" >Username</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-base">workcation.com/</span>
              <input type="text" name="username" id="username" autocomplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-6" placeholder="janesmith"/>
            </div>
          </div>
        </div> */}

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

                                        {/* <div className="col-span-full">
          <label for="photo" >Photo</label>
          <div className="mt-2 flex items-center gap-x-3">
            <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
          </div>
        </div> */}

                                        {/* <div className="col-span-full">
          <label for="cover-photo" >Cover photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-base leading-6 text-gray-600">
                <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div> */}
                                    </div>
                                </div>

                                <div>
                                    {/* <h2 className=" font-semibold leading-7 text-gray-900">Notifications</h2>
      <p className="mt-1 text-base leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p> */}

                                    {/* <div className="mt-10 space-y-10">
        <fieldset>
          <legend className="text-base font-semibold leading-6 text-gray-900">By Email</legend>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-base leading-6">
                <label for="comments" className="font-medium text-gray-900">Comments</label>
                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-base leading-6">
                <label for="candidates" className="font-medium text-gray-900">Candidates</label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-base leading-6">
                <label for="offers" className="font-medium text-gray-900">Offers</label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-base font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p className="mt-1 text-base leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-everything" >Everything</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-email" >Same as email</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-nothing" >No push notifications</label>
            </div>
          </div>
        </fieldset>
      </div> */}
                                </div>
                            </div>

                            <div className="w-100 pb-40 flex items-end justify-end" >
                                <button
                                    className="rounded-full  bg-sky-800  text-white h-14 w-40"
                                    type="submit"
                                >
                                    <div className=" p-50">Post Job </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            // </div>
        // </div>
    )
}

export default Newjob