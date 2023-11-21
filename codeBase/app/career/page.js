
import React from 'react';
import styles from '../../styles/careernew.module.css';
import PeopleCard from './People/PeopleRenderer';
import JobCard from './Jobs/JobRenderer';
import Image from 'next/image';
import career1 from '../../public/career1.png';
const ImageComponent = () => {
  return (
    <div style={{ height: 'auto' }}>
      <div style={{ backgroundColor: '#F6F7FA' }}>

        <div style={{ width: '100vw' }}>

          <div >

            <Image  className="w-full sm:h-fit md:h-screen  "
              src={career1}
              alt="career1 image"
              


            />
            {/* absolute  bottom-11 right-0  w-full h-full flex justify-left items-center */}
            <div  className="absolute top-20 sm:top-40" style={{padding:'5%'}} >
              <div className='justify-center align-middle' style={{ margin: 'auto' }}>
                <p className={styles.the}>
                  Find A  <span style={{ color: '#065593' }}>Job</span>  That <br />
                  <span style={{ color: '#065593' }}>Matches</span> Your <br />
                  Passion<br />

                  <span className='text-5xl font-medium mt-10 text-gray-600 font-Poppins font-sans' style={{ fontSize: '20px' }}> Hand-picked opportunities
                  </span></p>
                <div style={{ display: 'flex', paddingTop: '5%' }} >

                  <input type="text" style={{ height: '50px', borderRadius: '20px', width: '90%', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} id="searchInput" placeholder="Search by job title....." />
                  <div>

                    <button style={{ marginLeft: '-225%', color: 'white', background: '#065593', borderRadius: 105,height:'50px',width:'230%' }} >
                      search

                    </button>
                  </div>
                  {/* <input type="text" style={{borderRadius: '20px'}}
    className="h-8 sm:h-10 lg:h-12 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 p-3 rounded-l-full"
    placeholder="Search..."
  />
  <button className="bg-blue text-white h-8 sm:h-10 lg:h-12 px-4 rounded-r-full" style={{}}>
    Search
  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>

            <PeopleCard />
            <div style={{ paddingBottom: '2%' }}>
              <JobCard />
            </div>
          </div>

        </div>

      </div>
    </div>

  );
};

export default ImageComponent;