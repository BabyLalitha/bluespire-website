'use client';

import Link from 'next/link'
import styles from '../../styles/admin.module.css'

export default function Admin() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className={styles.title}>Welcome Admin</div><br />
        </div>
        <div className='row'>
          {/* <button onClick={() => router.push('/admin/newJob')}>
      Post a New Job
    </button> */}
          <Link className={styles.link} href="/admin/postJob">Post a New Job</Link>
          <Link className={styles.link} href="/admin/viewJobs">View All Jobs</Link>
          {/* <Link className={styles.link} href="/admin/deleteJob">Delete a Job</Link>
    <Link className={styles.link} href="/admin/updateJob">Update a Job</Link> */}
        </div>
      </div>
    </>
  )
}