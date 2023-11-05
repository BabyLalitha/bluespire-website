'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jobData from '../../career/jobsData.json';
import { useSearchParams } from 'next/navigation';

const JD = () => {
    const router = useRouter();
    //   const { id } = router.query;
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const ApplyNow = () => {
        router.push(`/career/applyForm?id=${id}`);
      };
    //   console.log('router.query:', router.query);
    //   console.log('jobData:', jobData);
    // const job = jobData.find(job => job.id === parseInt(id));
    // if (!job) return <div>Job not found</div>;
    const [Data, setJobData] = useState(null);
    useEffect(() => {
    // Fetch data from the API route
    fetch(`/api/getJobById?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJobData(data); // Set the initial data to jobs state
        console.log('Fetched data:', data);
      })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

    return (
        // <div>
        //   <h1>{job.title}</h1>
        //   <p>{job.description}</p>
        // </div>
        <>
            <div className="bg-gray-100 flex items-center justify-center font-poppins" style={{height:'50px'}}>
                <div className="text-black text-[18.67px] leading-[44.44px]  font-medium  ">
                {Data?.jobTitle}-{Data?._id}
                </div>
            </div>
            <div className="mx-auto p-8 font-poppins"></div>
            <div className="  mb-8 ">
                {/* <div className="w-[1000px] h-auto 00px] relative bg-white flex-col justify-start items-start inline-flex"> */}
                <div className=" h-[62.22px] relative flex items-center font-medium justify-center" style={{ marginBottom: '23px'}}>
                    <div className="w-[258.08px] h-[50.22px] bg-sky-800 rounded-[23px]"/>
                    <button className="  top-[8.89px] text-[18.22px] absolute text-white justify-center leading-[44.44px]" style={{ textAlign: 'center' }} onClick={ApplyNow}>Apply for This Job</button>
                </div>
                <div className=" h-auto 87.78px] " style={{marginLeft:'23px'}}>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-bold  ">Minimum Qualification:</span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-normal"> {Data?.qualification}<br /></span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-bold  ">Experience level: </span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-light  ">{Data?.seniorityLevel}<br /></span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-bold  ">Experience Length:</span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-normal"> {Data?.experience} years<br /></span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-bold  ">Location: </span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-light  ">{Data?.location}<br /></span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-bold  "> Job type:</span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-normal"> {Data?.jobType}<br /></span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-semibold  ">Work place type: </span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-normal">{Data?.workplaceType}</span>
                </div>
                <div className="text-black text-[18.67px] leading-[44.44px] font-bold"style={{marginLeft:'23px', marginRight:'23px'}}>Job description<br /></div>
                <div className=" h-auto 00.11px]"style={{marginLeft:'23px', marginRight:'23px'}}>
                    <span className="text-black text-[18.67px] leading-[44.44px] font-light">
                        We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.<br /><br />
                        To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce complete solutions in a short turnaround time.<br /><br />
                    </span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-semibold">Laravel Developer Requirements:<br /></span>
                    {/* <span className="text-black text-[18.67px] leading-[44.44px] font-light"><br /></span> */}
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-light" style={{ paddingBottom: '150px' }}>
                        A degree in programming, computer science, or a related field.<br />
                        Experience working with PHP, performing unit testing, and managing APIs such as REST.<br />
                        A solid understanding of application design using Laravel.<br />
                        Knowledge of database design and querying using SQL.<br />
                        Proficiency in HTML and JavaScript. Experience developing in Vue is considered a plus.<br />
                        Practical experience using the MVC architecture.<br />
                        The ability to work on LAMP development environment<br />
                        Problem-solving skills and critical mindset.<br />
                        Great communication skills.<br />
                        The desire and ability to learn.<br />
                    </span>
                    <span className="text-black text-[18.67px] leading-[44.44px] font-semibold  ">Responsibilities:<br /></span>
                    <span className="text-black text-[18.67px] leading-[44.44px]  font-light  " style={{ paddingBottom: '150px' }}>
                        Discussing project aims with the client and development team.<br />
                        Designing and building web applications using Laravel.<br />
                        Troubleshooting issues in the implementation and debug builds.<br />
                        Working with front-end and back-end developers on projects.<br />
                        Testing functionality for users and the backend.<br />
                        Ensuring that integrations run smoothly.<br />
                        Scaling projects based on client feedback.<br />
                        Recording and reporting on work done in Laravel.<br />
                        Maintaining web-based applications.<br />
                        Presenting work in meetings with clients and management.<br />
                    </span>
                </div>
                {/* </div> */}
            </div></>
    );
}

export default JD;
