'use client'
import React, { useState } from 'react';
import bslogo from './../public/assets/bsClr.png';
import Image from 'next/image'
import NavLinks from './NavLinks';
import { useRouter } from 'next/navigation';
const NavBar = () => {
  // manage the state of the navbar in mobile view. whether open or closed.
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navigate = (link) => {
    setOpen(false);
    // console.log(`link to naviaget is >> ${link}`);
    router.replace(link.toLowerCase());
  }

  return (
    <div className='bg-white sticky top-0 z-50'>
      <nav className='bg-white sticky top-0 z-50 shadow-cyan-500/50 max-w-screen-2xl mx-auto'>
        <div className='flex items-center font-medium justify-between'>
          <div className='z-50 p-2 md:w-auto w-full flex justify-between pl-[5%] items-center'>
            <a href="/">
              <Image src={bslogo} alt='blue spire logo' className='md:cursor-pointer h-12 w-auto' />
            </a>
            <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins] pr-[5%]'>
            <li className='hover:border-b-4 hover:border-blue'>
              <span onClick={() => navigate("/")} className='py-3 px-3 inline-block text-blue'>
                Home
              </span>
            </li>
            <NavLinks navigate={navigate} />
            <div className='md:block hidden lg:ml-20'>
              {/* <Button name="Contact Us" link="/contact" /> */}
              <button className='bg-white text-blue border border-blue px-10 py-1 rounded-full hover:bg-blue hover:text-white' onClick={() => navigate("/contact")}>
                Contact Us
              </button>
            </div>
          </ul>


          {/*********** mobile view ********************/}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
          >
            <li onClick={() => navigate("/")}>
              <span href="/" className="py-4 pl-1 inline-block text-blue">
                Home
              </span>
              {/* Home */}
            </li>
            <NavLinks navigate={navigate} />
            <div className="py-5">
              {/* <Button name="Contact Us" link="/contact" /> */}
              <button className='bg-white text-blue border border-blue px-10 py-1 rounded-full hover:bg-blue hover:text-white' onClick={() => navigate("/contact")}>
                Contact Us
              </button>
            </div>
          </ul>
        </div>
      </nav >
    </div>
  )
}

export default NavBar;