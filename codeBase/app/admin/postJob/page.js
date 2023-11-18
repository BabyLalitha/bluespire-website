'use client';

import React from 'react'
import styles from '../../../styles/admin.module.css'
import { useState, useEffect } from 'react';
import TextInput from '../../../components/TextInputField.js';
import Dropdown from '../../../components/DropDownField.js';

function Newjob() {

    const [companyName, setCompanyName] = useState('');
    const [clientName, setClientName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobType, setJobType] = useState('');
    const [workplaceType, setWorkplaceType] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [seniorityLevel, setSeniorityLevel] = useState('');
    const [qualification, setQualification] = useState('');
    const [applnLink, setApplnLink] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    var [active, setActive] = useState(false);

    const [isScreeningQuestionVisible, setScreenQuestionVisible] = useState(false);
    const [checkBox, setCheckBox] = useState(false);
    const [screeningQuestions, setScreeningQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [ScreeningQuestionList, setScreeningQuestionList] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const workplaceTypeOptions = [
        {label:'select',value:''},
        {label:'Onsite',value:'onsite'},
        {label:'Hybrid',value:'hybrid'},
        {label:'Remote',value:'remote'}
    ]

    const jobCategoryOptions = [
        {label:'select',value:''},
        {label:'Accounting/Auditing',value:'Accounting/Auditing'},
        {label:'Administartive',value:'Administartive'},
        {label:'Advertising',value:'Advertising'},
        {label:'Analyst',value:'Analyst'},
        {label:'Art/Creative',value:'Art/Creative'},
        {label:'Business Development',value:'Business development'},
        {label:'Consulting',value:'Consulting'},
        {label:'Customer Service',value:'Customer service'},
        {label:'Distribution',value:'Distribution'},
        {label:'Design',value:'Design'},
        {label:'Engineering',value:'Engineering'},
        {label:'Finances',value:'Finances'},
        {label:'Human Resources',value:'Human Resources'},
        {label:'Information Technology',value:'Information Technology'},
        {label:'Legal',value:'Legal'},
        {label:'Management',value:'Management'},
        {label:'Marketing',value:'Marketing'},
        {label:'Public Relations',value:'Public Relations'},
        {label:'Product Management',value:'Product Management'},
        {label:'Project Management',value:'Project Management'},
        {label:'Production',value:'Production'},
        {label:'Quality Assurance',value:'Quality Assurance'},
        {label:'Sales',value:'Sales'},
        {label:'Strategy Planning',value:'Strategy Planning'},
        {label:'Supply Chain',value:'Supply chain'},
        {label:'Training',value:'Training'},
        {label:'Others',value:'others'}
    ]

    const jobTypeOptions=[
        {label:'select',value:''},
        {label:'Full Time',value:'Full Time'},
        {label:'Part Time',value:'Part Time'},
        {label:'Contract',value:'Contract'},
        {label:'Temporary',value:'Temporary'},
        {label:'Volunteer',value:'Volunteer'},
        {label:'Internship',value:'Internship'}
    ]

    const experienceOptions = [
        {label:'select',value:''},
        {label:'0',value:'0'},
        {label:'1',value:'1'},
        {label:'2',value:'2'},
        {label:'3',value:'3'},
        {label:'4',value:'4'},
        {label:'5',value:'5'},
        {label:'6',value:'6'},
        {label:'7',value:'7'},
        {label:'8',value:'8'},
        {label:'9',value:'9'},
        {label:'10',value:'10'},
        {label:'10+',value:'10+'}
    ]

    const seniorityLevelOptions = [
        {label:'select',value:''},
        {label:'Internship',value:'Internship'},
        {label:'Entry Level',value:'Entry Level'},
        {label:'Associate',value:'Associate'},
        {label:'Mid-senior Level',value:'Mid-senior Level'},
        {label:'Director',value:'Director'},
        {label:'Executive',value:'Executive'},
        {label:'Not Applicable',value:'Not Applicable'}
    ]

    const handleAddQuestion1 = () => {
        if (newQuestion.trim() !== '') {
            setQuestions([...questions, newQuestion]);
            setNewQuestion(''); // Clear the input field after adding the question
            setShowMessage(true); // Show a message
            // setTimeout(() => {
            //     setShowMessage(false);
            // }, 3000);
        }
    }

    // useEffect(() => {
    //     fetch('/api/getScreening')
    //         .then((response) => response.json())
    //         .then((data) => setScreeningQuestions(data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // });

    const displayQuestions = () => {

        setScreenQuestionVisible(!isScreeningQuestionVisible);

    };

    const addQuestion = (question, c) => {
        if (c) {
            selectedQuestions.push(question);
        }
        else if (!c) {
            const i = selectedQuestions.indexOf(question);
            if (i != -1)
                selectedQuestions.splice(i, 1);
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/crudJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ companyName, clientName, jobTitle, jobCategory, jobType, location, workplaceType, skills, experience, seniorityLevel, qualification, applnLink, jobDescription, active, selectedQuestions }),
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
        setClientName('');
        setJobTitle('');
        setJobCategory('');
        setJobType('');
        setLocation('');
        setWorkplaceType('');
        setSkills('');
        setExperience('');
        setSeniorityLevel('');
        setActive(false);
        setQualification('');
        setApplnLink('');
        setJobDescription('');
    }

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
            <div className="w-200 h-32 bg-gray-100 flex items-center justify-center">
                <div className="text-black text-3xl font-medium font-['Poppins'] ">
                    Create Job
                </div>
            </div>

            <div className="flex w-100 place-content-center text-black text-[25] font-medium font-['Poppins'] pt-20 ">
                <form onSubmit={onSubmit}>
                    <div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <TextInput
                                    label="Company Name"
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    placeholder="Company Name"
                                    className="form-text"
                                />
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
                                <TextInput
                                    label="Job Title"
                                    id="jobTitle"
                                    name="jobTitle"
                                    type="text"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    placeholder="Job Title"
                                    className="form-text w-full"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <Dropdown
                                    label="Job Category"
                                    id="jobcategory"
                                    name="jobCategory"
                                    options={jobCategoryOptions}
                                    value={jobCategory}
                                    onChange={(e)=>setJobCategory(e.target.value)}
                                    className="form-text"
                                />
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <Dropdown
                                    label="Job Type"
                                    id="jobType"
                                    name="jobType"
                                    options={jobTypeOptions}
                                    value={jobType}
                                    onChange={(e)=>setJobType(e.target.value)}
                                    className="form-text"
                                />
                            </div>

                            <div className="sm:col-span-3 ">
                                <TextInput
                                    label="Job Location"
                                    id="location"
                                    name="location"
                                    type="text"
                                    value={location}
                                    onChange={(e)=>setLocation(e.target.value)}
                                    placeholder="Location"
                                    className="form-text"
                                />
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <Dropdown
                                    label="Workplace Type"
                                    id="workplaceType"
                                    name="workplaceType"
                                    options={workplaceTypeOptions}
                                    value={workplaceType}
                                    onChange={(e)=>setWorkplaceType(e.target.value)}
                                    className="form-text"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <TextInput
                                    label="Qualification"
                                    id="qualification"
                                    name="qualification"
                                    type="text"
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)}
                                    placeholder="Qualification"
                                    className="form-text"
                                />
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <label htmlFor="Skill" >
                                    Skills<span class="text-red-500">*</span>
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
                                <Dropdown
                                    label="Experience"
                                    id="experience"
                                    name="experience"
                                    options={experienceOptions}
                                    value={experience}
                                    onChange={(e)=>setExperience(e.target.value)}
                                    className="form-text"
                                />
                            </div>

                            <div className="sm:col-span-3 pl-3">
                                <Dropdown
                                    label="Seniority Level"
                                    id="seniorityLevel"
                                    name="seniorityLevel"
                                    options={seniorityLevelOptions}
                                    value={seniorityLevel}
                                    onChange={(e)=>setSeniorityLevel(e.target.value)}
                                    className="form-text"
                                />
                            </div>

                            <div className="col-span-full">
                                <TextInput
                                    label="Job Application Link"
                                    id="jobApplicationLink"
                                    name="jobApplicationLink"
                                    value={applnLink}
                                    onChange={(e)=>setApplnLink(e.target.value)}
                                    placeholder="Job application link url"
                                    className="form-text w-full"
                                />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="jobDescription">
                                    Job Description<span class="text-red-500">*</span>
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

                                <div className="col-span-full">
                                    <label htmlFor="screeningQuestions">
                                        Screening Questions<span class="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2 font-light">
                                        <ul><p>Select the screening questions for this job:</p>
                                            {/* {screeningQuestions.map((questions) => (
                                                <li key={questions._id}>
                                                    <input type="checkbox" value={checkBox} onChange={(e) => addQuestion(questions.question, e.target.checked)}></input>&nbsp;&nbsp;{questions.question}
                                                </li> 
                                            ))} */}
                                        </ul>
                                    </div>
                                </div><br />

                                <div className="col-span-full">
                                    <label htmlFor="screeningQuestions">
                                        Custom Screening Question
                                    </label>
                                    <div className="mt-2">
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
                                </div><br />

                                <div className="col-span-full">
                                    <label htmlFor="active">Active<span class="text-red-500">*</span></label>
                                    <div className="mt-2">
                                        <button type="button"
                                            className={`${active ? 'bg-sky-800 text-white' : 'bg-gray-300 text-gray-700'
                                                } px-4 py-2 rounded-full`}
                                            onClick={handleToggle}
                                        >
                                            {active ? 'ON' : 'OFF'}
                                        </button>
                                    </div>
                                </div>
                            </div>
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
    )
}

export default Newjob