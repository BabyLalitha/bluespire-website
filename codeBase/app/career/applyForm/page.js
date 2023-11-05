'use client'
import React from 'react'
import jobData from '../../career/jobsData.json';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

function ApplyForm() {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const data = queryParams.get('data');
    // const props = JSON.parse(decodeURIComponent(data));
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phno: '',
        resume: '',
        photo: '',
        moreAboutYou: '',
    })
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] })
        }
        setFormData({ ...formData, [name]: value });
    };
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const jobTitle = searchParams.get('jobTitle');
    // const job = jobData.find(job => job.id === parseInt(id));
    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   try {
    //     const form = new FormData();
    //     form.append('name', formData.name);
    //     form.append('email', formData.email);
    //     form.append('phno', formData.phno);
    //     form.append('resume', formData.resume);
    //     form.append('photo', formData.photo);
    //     form.append('moreAboutYou', formData.moreAboutYou)
    //     await axios.post('http://10.216.9.140:3001/upload', form);
    //     alert('Form submitted successfully!');
    //   } catch (error) {
    //     console.error('Error submitting form:', error);
    //     alert('Error submitting form. Please try again.');
    //   }
    // };

    return (
        <div>
            <div className=" bg-gray-100 flex items-center justify-center font-poppins" style={{height: '50px'}}>
                <div className="text-black text-[18.67px] font-medium">
                    {jobTitle}-{id}
                </div>
            </div>
            <div className=' relative flex lg:justify-center md:justify-center justify-center font-medium  font-poppins' style={{ paddingBottom: '150px', }}>
                <div className='apply-card'>
                    <form action='http://10.216.9.140:3001/upload' method='POST' encType="multipart/form-data">
                        <div className='info'>
                            <section>
                                <div className='text-black text-[15.67px]   leading-[44.44px] font-semibold'>
                                    {/* <p> Fill out the form</p> */}
                                    <h3> My Information</h3>
                                </div>
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <label>
                                        Name
                                        <abbr title="required">*</abbr>
                                        <br />
                                        <input className=" lg:w-[400px] md:w-[400px] sm:w-[300px]  h-[45px] bg-white rounded-[10px] border border-neutral-300 " type="text" name="name" value={formData.name} onChange={handleChange} required="required" placeholder=' Your full name' />
                                    </label>
                                </div>
                                <br />
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <label>
                                        Email
                                        <abbr title="required">*</abbr>
                                        <br />
                                        <input className=" lg:w-[400px] md:w-[400px] sm:w-[300px] h-[45px] bg-white rounded-[10px] border border-neutral-300 " type="email" name="email" value={formData.email} onChange={handleChange} required="required" placeholder=' Your email address' />
                                    </label>
                                </div>
                                <br />
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <label>
                                        Phone Number
                                        <abbr title="required">*</abbr>
                                        <br />
                                        <input className=" lg:w-[400px] md:w-[400px] sm:w-[300px] h-[45px] bg-white rounded-[10px] border border-neutral-300 " type="text" name="phno" value={formData.phno} onChange={handleChange} required="required" placeholder=' Your phone' />
                                    </label>
                                </div>
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <label>
                                        Photo
                                        <br />
                                        <input className=" lg:w-[400px] md:w-[400px] w-[230px] h-[45px] p-0 bg-white rounded-[10px] border border-neutral-300  " type="file" name="photo" accept=".jpg, .jpeg, .png" onChange={handleChange} />
                                        <p className='text-[#575761]'>Accepted files: jpg, jpeg, and png.</p>
                                    </label>
                                </div>
                            </section>

                            <section>
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <h3> CV/Resume</h3>
                                    <p className='text-[#575761]'> Upload your CV or Resume file </p>
                                </div>
                                <div className="text-black text-[15.67px] leading-[44.44px] font-bold">
                                    <label className="text-black  lg:text-[15.67] text-[15.67px] leading-[44.44px]  font-bold">
                                        Resume
                                        <abbr title="required">*</abbr>
                                        <br />
                                        <input className=" lg:w-[400px] md:w-[400px] w-[230px] h-[45px] p-0 bg-white rounded-[10px] border border-neutral-300 " type="file" name="resume" accept=".pdf, .doc, .docx, .txt" onChange={handleChange} required="required" style={{ margin: '0', }} />                                         
                                        <p className='text-[#575761]'>Accepted files: DOC, DOCX, and PDF.</p>
                                    </label>
                                </div>
                            </section>

                            <section>
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <h3> Message </h3>
                                    <p> More about you </p>
                                </div>
                                <div className="text-black text-[15.67px] leading-[44.44px]  font-bold">
                                    <label>
                                        <textarea className=" lg:w-[400px] md:w-[400px] sm:w-[300px] h-[100px] bg-white rounded-[10px] border border-neutral-300 " name="moreAboutYou" value={formData.moreAboutYou} onChange={handleChange} placeholder=' Tell us more about yourself' rows={5} />
                                    </label>
                                </div>
                            </section>

                        </div>
                        <div className=" h-[62.22px] relative flex items-center font-medium justify-center">
                            <div className=" w-[200px] h-[50.22px] bg-sky-800 rounded-[23px]" />
                            <button className="text-[18.22px] absolute text-white justify-center  align-middle" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='bg-transparent mt-5 flex flex-wrap justify-center ml-24'>
                </div>
            </div>
            {/* + */}
        </div>
    )
}

export default ApplyForm;