// 'use client';

// import React from 'react'
// import IndexPage from '../page'
// import styles from '../../../styles/admin.module.css'
// import {useState,useEffect} from 'react'
// import {useRouter} from 'next/router'

// function UpdateJob() {
//     const [_id, setJobId] = useState(0);
//     const [role, setRole] = useState('');
//     const [location, setLocation] = useState('');
//     const [type, setType] = useState('');
//     const [EmploymentType, setEmploymentType] = useState('');
//     const [jobDescription, setJobDescription] = useState('');
//     const [skills, setSkills] = useState('');
//     const [experience, setExperience] = useState('');
//     const [isScreeningQuestionVisible, setScreenQuestionVisible] = useState(false);
//     const [checkBox, setCheckBox] = useState(false);
//     const [screeningQuestions, setScreeningQuestions] = useState([]);
//     const [selectedQuestions, setSelectedQuestions] = useState([]);
//     const [job,setJob]=useState({});

//     const router=useRouter();
//     const {id}=router.query;

//     useEffect(() => {
//         // Define the ID you want to fetch
//         const resourceId= id; // Replace with the actual ID
    
//         // Make a GET request to the API route
//         fetch(`/api/getJobById?id=${resourceId}`)
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             return response.json();
//           })
//           .then((responseData) => {
//             // Handle the fetched data
//             setJob(responseData);
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//       }, []);
//       //console.log(job);

//       const handleInputChange=(e,field)=>{
//         if(field==='_id'){
//             job._id=e.target.value;
//           }
//           if(field==='role'){
//             job.role=e.target.value;
//           }
//           if(field==='type'){
//             job.type=e.target.value;
//           }
//           if(field==='location'){
//             job.location=e.target.value;
//           }
//           if(field==='EmploymentType'){
//             job.EmploymentType=e.target.value;
//           }
//           if(field==='jobDescription'){
//             job.jobDescription=e.target.value;
//           }
//           if(field==='skills'){
//             job.skills=e.target.value;
//           }
//           if(field==='experience'){
//             job.experience=e.target.value;
//           }
//       }

//   return (
//     <>
//             <div className='container'>
//                 <div className='row'><IndexPage /></div><br /><br />
//                 <div className='row'>
//                     <div className={styles.jobForm}>
//                         <form >
//                             <div className={styles.formField}>
//                                 <label htmlFor="jobId" className={styles.formLabel}>Job ID:</label>
//                                 <input className={styles.formInput}
//                                     type="number"
//                                     id="jobId"
//                                     value={job._id}
//                                     placeholder='Enter Job Id'
//                                     // onChange={(e) => setJobId(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"_id")}
//                                     required
//                                 />
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="role" className={styles.formLabel}>Role:</label>
//                                 <input className={styles.formInput}
//                                     type="text"
//                                     id="role"
//                                     value={job.role}
//                                     placeholder='Enter Job role'
//                                     // onChange={(e) => setRole(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"role")}
//                                     required
//                                 />
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="type" className={styles.formLabel}>Type:</label>
//                                 <select className={styles.formInput}
//                                     id="type"
//                                     value={job.type}
//                                     // onChange={(e) => setType(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"type")}
//                                     required>
//                                     <option value="">Select a type</option>
//                                     <option value="Onsite">Onsite</option>
//                                     <option value="Hybrid">Hybrid</option>
//                                     <option value="Remote">Remote</option>
//                                 </select>
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="location" className={styles.formLabel}>Location:</label>
//                                 <input className={styles.formInput}
//                                     type="text"
//                                     id="location"
//                                     value={job.location}
//                                     placeholder='Enter Job Location'
//                                     // onChange={(e) => setLocation(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"location")}
//                                     required
//                                 />
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="EmploymentType" className={styles.formLabel}>Employment Type:</label>
//                                 <select className={styles.formInput}
//                                     id="EmploymentType"
//                                     value={job.EmploymentType}
//                                     // onChange={(e) => setEmploymentType(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"EmploymentType")}
//                                     required>
//                                     <option value="">Select a Employment type</option>
//                                     <option value="Full time">Full Time</option>
//                                     <option value="Contract">Contract</option>
//                                     <option value="Internship">Internship</option>
//                                 </select>
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="jobDescription" className={styles.formLabel}>Job Description:</label>
//                                 <textarea className={styles.formInput}
//                                     type="text"
//                                     id="jobDescription"
//                                     value={job.jobDescription}
//                                     // onChange={(e) => setJobDescription(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"jobDescription")}
//                                     placeholder="Enter job description"
//                                     required
//                                 ></textarea>
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="skills" className={styles.formLabel}>Skills required:</label>
//                                 <textarea className={styles.formInput}
//                                     id="skills"
//                                     value={job.skills}
//                                     // onChange={(e) => setSkills(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"skills")}
//                                     placeholder="Enter skills required"
//                                     required
//                                 ></textarea>
//                             </div>
//                             <div className={styles.formField}>
//                                 <label htmlFor="experience" className={styles.formLabel}>Experience required:</label>
//                                 <textarea className={styles.formInput}
//                                     id="experience"
//                                     value={job.experience}
//                                     // onChange={(e) => setExperience(e.target.value)}
//                                     onChange={(e) => handleInputChange(e,"experience")}
//                                     placeholder="Enter experience required"
//                                     required
//                                 ></textarea>
//                             </div>
//                             {/* <div className={styles.formField}>
//                                 <label htmlFor="screening questions" className={styles.formLabel}>Screening Questions:</label>
//                                 <input type="button" className={styles.formButton} onClick={displayQuestions} value="Add questions" />
//                             </div>
//                             <br />
//                             <div className={styles.formField}>
//                                 {isScreeningQuestionVisible && <>
//                                     <ul>
//                                         <p>Select the screening questions for this job:</p>
//                                         {screeningQuestions.map((item) => (
//                                             <li key={item._id}>
//                                                 <input type="checkbox" value={checkBox} onChange={(e) => addQuestion(item._id, e.target.checked)}></input>{item.question}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <br />
//                                 </>
//                                 }
//                             </div> */}
//                             <button className={styles.formSubmitButton} type="submit">Post Job</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//   )
// }

// export default UpdateJob