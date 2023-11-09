'use client'
import React from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center bg-blue w-[100%] h-screen text-white text-2xl'>
      <h1>
        demo page in admin
      </h1>
      <button
        onClick={logout}
        className="bg-orange-500 hover:bg-orange-700 mt-4 text-white font-bold py-2 px-4 rounded"
      >Logout</button>
    </div>
  )
}

export default page