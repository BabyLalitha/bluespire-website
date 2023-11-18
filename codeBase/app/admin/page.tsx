'use client';

import Link from 'next/link'
import styles from '../../styles/admin.module.css'
import {useRouter} from "next/navigation";
import axios from 'axios';
import {toast} from "react-hot-toast";

export default function Admin() {
    const router = useRouter()
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className='w-[100%] h-screen'>
        <div className="w-[100%] h-48 bg-light-gray flex flex-col items-center justify-center">
          <div className='w-[100%] h-[30%] flex justify-end items-center'>
            <button
              onClick={logout}
              className="bg-blue mt-4 hover:bg-blue text-white font-bold py-2 px-4 rounded"
            >Logout</button>
          </div>
          <div className="text-black text-3xl font-medium font-['Poppins'] h-[70%]">
            Welcome Admin
          </div>
        </div>
        <div className="flex w-100 place-content-center text-black text-[25] font-medium font-['Poppins'] pt-20 ">
          <Link className={styles.link} href="/admin/postJob">Post a New Job</Link>
          <Link className={styles.link} href="/admin/viewJobs">View All Jobs</Link>
        </div>
      </div>
    </>
  )
}