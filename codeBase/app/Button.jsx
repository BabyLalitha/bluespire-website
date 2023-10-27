import React from 'react'
import './globals.css'
import { useRouter } from 'next/navigation'
const Button = ({ name, link }) => {
  const router = useRouter();
  const naviagte = (link) => {
    router.replace(link);
  }
  return (
    <button className='bg-white text-blue border border-blue w-36 px-6 py-2 rounded-full hover:bg-blue hover:text-white' onClick={()=>naviagte(link)}>
        {/* Contact Us */}
        {name}
    </button>
  )
}

export default Button