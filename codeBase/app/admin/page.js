'use client';

import Link from 'next/link'
import styles from '../../styles/admin.module.css'

export default function Admin() {
  
  return (
    <>
    {/* <div className='font-poppins'> */}
      {/* <div className='container'> */}
        {/* <div className='row'> */}
        <div className="w-200 h-32 bg-gray-100 flex items-center justify-center">
                        <div className="text-black text-3xl font-medium font-['Poppins'] ">
                            Welcome Admin
                        </div>
                    </div>
        {/* </div> */}
        <div className="flex w-100 place-content-center text-black text-[25] font-medium font-['Poppins'] pt-20 ">
          {/* <button onClick={() => router.push('/admin/newJob')}>
      Post a New Job
    </button> */}
          <Link className={styles.link} href="/admin/postJob">Post a New Job</Link>
          <Link className={styles.link} href="/admin/viewJobs">View All Jobs</Link>
          {/* <Link className={styles.link} href="/admin/deleteJob">Delete a Job</Link>
    <Link className={styles.link} href="/admin/updateJob">Update a Job</Link> */}
        </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}