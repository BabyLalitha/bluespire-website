'use client';

import React from 'react'
import IndexPage from '../page'
import styles from '../../../styles/admin.module.css'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

function UpdateJob() {
    const [job, setJob] = useState({});
    const [_id, setJobId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [clientName, setClientName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [workplaceType,setWorkplaceType]=useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [seniorityLevel,setSeniorityLevel]=useState('');
    const [qualification, setQualification] = useState('');
    const [applnLink, setApplnLink] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [selectedQuestions,setSelectedQuestions]=useState([]);
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
                setClientName(responseData.clientName);
                setJobTitle(responseData.jobTitle);
                setJobCategory(responseData.jobCategory);
                setJobType(responseData.jobType);
                setLocation(responseData.location);
                setWorkplaceType(responseData.workplaceType);
                setSkills(responseData.skills);
                setExperience(responseData.experience);
                setSeniorityLevel(responseData.seniorityLevel);
                setQualification(responseData.qualification);
                setApplnLink(responseData.applnLink);
                setJobDescription(responseData.jobDescription);
                setSelectedQuestions(responseData.selectedQuestions);
                setActive(responseData.active);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        const idToUpdate = job._id;
        const updateData = { "_id":_id,"companyName":companyName,"clientName":clientName,"jobTitle":jobTitle,"jobCategory":jobCategory,"jobType":jobType,"location":location,"workplaceType":workplaceType,"skills":skills,"experience":experience,"seniorityLevel":seniorityLevel,"qualification":qualification,"applnLink":applnLink,"jobDescription":jobDescription,"selectedQuestions":selectedQuestions,"active":active };
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
        setClientName('');
        setJobTitle('');
        setJobCategory('');
        setJobType('');
        setLocation('');
        setWorkplaceType('')
        setSkills('');
        setExperience('');
        setSeniorityLevel('');
        setActive(false);
        setQualification('');
        setApplnLink('');
        setJobDescription('');
        setSelectedQuestions([]);
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
        <div className='font-poppins'>
            <div className="w-200 h-32 bg-gray-100 flex items-center justify-center">
                <div className="text-black text-3xl font-medium font-['Poppins'] ">
                    Update Job
                </div>
            </div>

            <div className="flex w-100 place-content-center text-black text-[25] font-medium font-['Poppins'] pt-20 ">
                <form>
                    <div>
                        {/* <p className="mt-1 text-base leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="companyName" >
                                    Company Name<span className="text-red-500">*</span>
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
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <label htmlFor="clientName" >
                                    Client Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="clientName"
                                        id="clientName"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                        className="form-text"
                                        placeholder="Client Name"

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-full">
                                <label htmlFor="jobTitle" >
                                    Job Title<span className="text-red-500">*</span>
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
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="jobCategory" >
                                    Job Category<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="jobCategory"
                                        name="jobCategory"
                                        value={jobCategory}
                                        onChange={(e) => setJobCategory(e.target.value)}
                                        className="form-text"
                                        required
                                    >
                                        <option>select</option>
                                        <option>Accounting/Auditing</option>
                                        <option>Administartive</option>
                                        <option>Advertising</option>
                                        <option>Analyst</option>
                                        <option>Art/creative</option>
                                        <option>Business development</option>
                                        <option>Consulting</option>
                                        <option>Customer Service</option>
                                        <option>Distribution</option>
                                        <option>Design</option>
                                        <option>Engineering</option>
                                        <option>Finance</option>
                                        <option>Human Resources</option>
                                        <option>Information Technology</option>
                                        <option>Legal</option>
                                        <option>Management</option>
                                        <option>Marketing</option>
                                        <option>Public relations</option>
                                        <option>Product Management</option>
                                        <option>Project Management</option>
                                        <option>Production</option>
                                        <option>Quality Assurance</option>
                                        <option>Sales</option>
                                        <option>Strategy/Planning</option>
                                        <option>Supply Chain</option>
                                        <option>Training</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <label htmlFor="jobType" >
                                    Job Type<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="jobType"
                                        name="jobType"
                                        value={jobType}
                                        onChange={(e) => setJobType(e.target.value)}
                                        className="form-text"
                                        required
                                    >
                                        <option>select</option>
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                        <option>contract</option>
                                        <option>Internship</option>
                                        <option>Temporary</option>
                                        <option>Volunteer</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3 ">
                                <label htmlFor="locationName" >
                                    Job Location<span className="text-red-500">*</span>
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
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <label htmlFor="workplaceType" >
                                    Workplace Type<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="workplaceType"
                                        name="workplaceType"
                                        value={workplaceType}
                                        onChange={(e) => setWorkplaceType(e.target.value)}
                                        className="form-text"
                                        required
                                    >
                                        <option>select</option>
                                        <option>Onsite</option>
                                        <option>Hybrid</option>
                                        <option>Remote</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="qualification" >
                                    Qualification<span className="text-red-500">*</span>
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
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <label htmlFor="Skill" >
                                    Skills<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="skill"
                                        name="skill"
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                        className="form-text"
                                        required
                                    >
                                        <option>select</option>
                                        <option>Java</option>
                                        <option>JavaScript</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3 ">
                                <label htmlFor="experience" >
                                    Experience<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        name="experience"
                                        id="experience"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        className="form-text"
                                        required
                                    >
                                        <option>select</option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>10+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <label htmlFor="seniorityLevel" >
                                    Seniority Level<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="senioritylevel"
                                        name="seniorityLevel"
                                        value={seniorityLevel}
                                        onChange={(e) => setSeniorityLevel(e.target.value)}
                                        className="form-text"
                                        required
                                    >
                                        <option>select</option>
                                        <option>Internship</option>
                                        <option>Entry Level</option>
                                        <option>Associate</option>
                                        <option>Mid-senior level</option>
                                        <option>Director</option>
                                        <option>Executive</option>
                                        <option>Not applicable</option>
                                    </select>
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
                                    Job Application Link<span className="text-red-500">*</span>
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
                                        required
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
                                        Job Description<span className="text-red-500">*</span>
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
                                    </div><br />

                                    {/* <div className="col-span-full">
                                        <label htmlFor="screeningQuestions">
                                            Screening Questions<span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-2 font-light">
                                            <ul><p>Select the screening questions for this job:</p>
                                                {screeningQuestions.map((questions) => (
                                                    <li key={questions._id}>
                                                        <input type="checkbox" value={checkBox} onChange={(e) => addQuestion(questions.question, e.target.checked)}></input>&nbsp;&nbsp;{questions.question}
                                                    </li> // Adjust property names accordingly
                                                ))}
                                            </ul>
                                        </div>
                                    </div><br /> */}

                                    {/* <div className="col-span-full">
                                        <label htmlFor="screeningQuestions">
                                            Custom Screening Question
                                        </label>
                                        <div className="mt-2 font-light">
                                        <input
                                            type="text"
                                            placeholder="Enter your question"
                                            value={newQuestion}
                                            onChange={(e) => setNewQuestion(e.target.value)}
                                            className="form-text"
                                        />
                                        <button className="rounded-full  bg-sky-800  text-white h-7 w-40" onClick={handleAddQuestion1}>Add Question</button>
                                        {showMessage && <p className={styles.successMessage}>Question added successfully.</p>}
                                        </div>
                                    </div><br/> */}

                                    <div className="col-span-full">
                                        <label htmlFor="active">Active<span className="text-red-500">*</span></label>
                                        <div className="mt-2">
                                            <button type="button"
                                                className={`${active ? 'bg-blue-500 text-gray-700' : 'bg-gray-300 text-gray-700'
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
                            <div className="p-50" onclick={submit}>Update Job </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default UpdateJob