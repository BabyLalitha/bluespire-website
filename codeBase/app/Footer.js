'use client'
import React from 'react'
import bslogo from './../public/assets/bsClr.png';
import Image from 'next/image';
import Button from './Button';
import instagram from './../public/assets/instagram.svg';
const Footer = () => {
  return (

    <footer class="bg-gray-50">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 flex flex-col justify-center">
            <a href="/" class="flex items-center">
              <Image src={bslogo} class="h-28 w-auto mr-3" alt="bluespire logo" />
            </a>
          </div>
          <div class="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2 ">
            <div>
              <h2 class="mb-3 text-sm font-semibold text-blue uppercase">Services</h2>
              <ul class="text-gray-500 font-medium grid grid-cols-2 gap-2 gap-x-8">
                <li>
                  <a href="/" class="hover:text-blue">Cloud Solution</a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue">Kafka Distribution</a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue">middleware solution</a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue">planning Analytics</a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue">Actionable Analytics</a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue">Agile Enterprises</a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue">Customer Experience</a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 font-medium grid grid-cols-2 gap-2 gap-x-8">
                <ul>
                  <h2 class="mb-3 text-sm font-semibold text-blue uppercase">Company</h2>
                  <li>
                    <a href="/" class="hover:text-blue">About Us</a>
                  </li>
                  <li>
                    <a href="/" class="hover:text-blue">Team</a>
                  </li>
                  <li>
                    <a href="/" class="hover:text-blue">Contact Us</a>
                  </li>
                </ul>
                <ul className='flex flex-col justify-center items-center'>
                  <li className='mb-5'>
                    <Button name="Subscribe" link="/subscribe" />
                  </li>
                  <li>
                    <Button name={` Log in `} link="/subscribe" />
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center">
            © Blue spire Inc. 2019. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 items-center">
            <div className='text-gray-500'>Follow Us: </div>
            <div className='bg-blue h-12 w-12 rounded-full flex items-center justify-center'>
              <a href="https://www.linkedin.com/company/blue-spire-inc/mycompany/" target='_blank' className="z-10 text-white hover:text-gray-900 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M7.81982 26.7495H2.42946V11.5608H7.81982V26.7495ZM5.12174 9.48894C3.39808 9.48894 2 8.23972 2 6.73152C2 6.00708 2.3289 5.3123 2.91434 4.80004C3.49978 4.28778 4.2938 4 5.12174 4C5.94968 4 6.74371 4.28778 7.32914 4.80004C7.91459 5.3123 8.24348 6.00708 8.24348 6.73152C8.24348 8.23972 6.84482 9.48894 5.12174 9.48894ZM27.9942 26.7495H22.6154V19.3557C22.6154 17.5936 22.5748 15.3339 19.8129 15.3339C17.0104 15.3339 16.5809 17.2483 16.5809 19.2288V26.7495H11.1963V11.5608H16.3662V13.6327H16.4416C17.1612 12.4393 18.9192 11.18 21.5418 11.18C26.9971 11.18 28 14.3233 28 18.4061V26.7495H27.9942Z" fill="white" />
                </svg>
              </a>
            </div>
            <div className='bg-blue h-12 w-12 flex flex-col items-center rounded-full justify-center'>
              <a href="https://www.instagram.com/bluespireinc/?igshid=NjIwNzIyMDk2Mg%3D%3D" target='_blank' className="text-white hover:text-gray-900 text-3xl">
                <Image src={instagram} alt='instagram logo' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer