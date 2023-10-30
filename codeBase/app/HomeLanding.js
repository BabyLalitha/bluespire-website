import React from 'react'
import HomeLandingImage from './../public/assets/HomeLanding.jpeg'
import Image from 'next/image';

function HomeLanding() {
  return (
    <div>
      {/* this div is for image */}
      <div className=''>
        <div className='h-screen w-[100%] absolute top-0'>
          <Image src={HomeLandingImage} alt="homeLandingImage" className='z-0 bg-cover h-screen bg-no-repeat' />
        </div>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex flex-col justify-center items-center h-[90vh] w-[100%]'>
            <p className='z-10 text-5xl text-white text-center w-[80vw] font-poppins max-w-screen-2xl'>
              Evolve, pioneer, and deliver solutions in tune with the pace of business.
            </p>
            <div className='z-10 pt-10'>
              <button className='px-10 py-1 border-2 rounded-3xl text-white hover:bg-blue hover:border-blue'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLanding