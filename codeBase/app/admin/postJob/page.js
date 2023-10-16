'use client';
import React from 'react'
import IndexPage from '../page.js'
import styles from '../../../styles/admin.module.css'
import { useState } from 'react';
import  {useEffect} from 'react';
function Newjob() {
    const [_id, setJobId] = useState('');
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [EmploymentType, setEmploymentType] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [isScreeningQuestionVisible, setScreenQuestionVisible] = useState(false);
    const [checkBox, setCheckBox] = useState(false);
    const [screeningQuestions, setScreeningQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [ScreeningQuestionList,setScreeningQuestionList]=useState([]);
    const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const handleAddQuestion = () => {
     if (newQuestion) {
      //setQuestions([...questions, newQuestion]);
      selectedQuestions.push(newQuestion);
       setNewQuestion('');
     }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/crudJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id, role, type, location, EmploymentType, jobDescription, skills, experience, selectedQuestions }),
        });
        if (response.ok) {
            console.log("added to database");
        }
        else {
            console.log("error");
        }
        // console.log(jobId);
        console.log(selectedQuestions);
    }
    useEffect(()=>{
        fetch('/api/getScreening')
            .then((response) => response.json())
            .then((data) => setScreeningQuestions(data))
            .catch((error) => console.error('Error fetching data:', error));
    });
    const displayQuestions = () => {

        setScreenQuestionVisible(!isScreeningQuestionVisible);
        
    };

    const addQuestion = (question, c) => { 
        if (c) {
            selectedQuestions.push(question);
        }
        else if (!c) {
            const i = selectedQuestions.indexOf(question);
            if (i!= -1)
                selectedQuestions.splice(i, 1);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'><IndexPage /></div><br /><br />
                <div className='row'>
                    <div className={styles.jobForm}>
                        <form onSubmit={onSubmit}>
                            <div className={styles.formField}>
                                <label htmlFor="jobId" className={styles.formLabel}>Job ID:</label>
                                <input className={styles.formInput}
                                    type="number"
                                    id="jobId"
                                    value={_id}
                                    placeholder='Enter Job Id'
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
        <label htmlFor="screeningquestionlist" className={styles.formLabel}>ScreeningQuestionList:</label>
        <ul><p>Select the screening questions for this job:</p>
        {screeningQuestions.map((questions) => (
          <li key={questions._id}>
          <input type="checkbox" value={checkBox} onChange={(e) => addQuestion(questions.question, e.target.checked)}></input>{questions.question}
                                            </li> // Adjust property names accordingly
        ))}
      </ul>
      </div>
                            {/* <div className={styles.formField}>
                                <label htmlFor="screening questions" className={styles.formLabel}>Screening Questions:</label>
                                <input type="button" className={styles.formButton} onClick={displayQuestions} value="Add questions" />
                            </div> */}
         <div className={styles.formField}>
        <label htmlFor='Enter your question' className={styles.formLabel}>Enter your question:</label>
        <input
          type="text"
          placeholder="Enter your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
   
      {/* <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}
           //<input type="checkbox" value={checkBox} onChange={(e) => addQuestion(screeningQuestions.question, e.target.checked)}></input>{questions.question}
           </li>
        ))}
      </ul> */}
      </div>
                            <br/>
                            {/* <div className={styles.formField}>
                                {isScreeningQuestionVisible && <>
                                    <ul>
                                        <p>Select the screening questions for this job:</p>
                                        {screeningQuestions.map((item) => (
                                            <li key={item._id}>
                                                <input type="checkbox" value={checkBox} onChange={(e) => addQuestion(item._id, e.target.checked)}></input>&nbsp;&nbsp;{item.question}
                                            </li>
                                        ))}
                                    </ul>
                                    <br />
                                </>
                                }
                            </div> */}
                            <button className={styles.formSubmitButton} type="submit">Post Job</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Newjob