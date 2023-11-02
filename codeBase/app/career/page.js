
import React from 'react';
import styles from '../../styles/careernew.module.css';
import PeopleCard from './People/PeopleRenderer';
import JobCard from './Jobs/JobRenderer';
const ImageComponent = () => {
  return (
    <div  style={{backgroundColor:'#F6F7FA'}}>
      
     <div style={{height:'100vh',width:'100vw'}}>
      <div >

      <img className={styles.sss}
      
        src="/career1.png"
        
        

      />
      {/* absolute  bottom-11 right-0  w-full h-full flex justify-left items-center */}
      <div className={styles.find }  >
        <div className='justify-center  align-middle' style={{margin:'auto'}}>
        <p className={styles.the}>
          Find A  <span style={{ color: '#065593' }}>Job</span>  That <br />
          <span style={{ color: '#065593' }}>Matches</span> Your <br />
          Passion<br />

          <span className='text-5xl font-medium mt-10 text-gray-600 font-Poppins font-sans' style={{ fontSize: '20px' }}> Hand-picked opportunities
          </span></p>
        <div style={{ display:'flex',paddingTop:'5%' }} >
        {/* <div style={{height: '100%',marginLeft:'5%', alignItems:'center',display:'relative',color: '#AEB0B4', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Search by job title....... */}
        <input type="text" style={{height:'50px', borderRadius:'20px', width:'90%',justifyContent:'center',alignItems:'center',alignContent:'center'}} id="searchInput" placeholder="Search by job title....."/>
        <div  >
          {/* <button style={{alignItem:'center',display:'flex', justifyContent:'center'}}> */}
            <button style={{marginLeft:'-295%',width:'100%',color:'white' ,background: '#065593', borderRadius: 105,height:'50px',width:'300%' }} >
            search
          
          </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div style={{position:'relative'}}>
      
      <PeopleCard/> 
      <div style={{paddingBottom:'2%'}}>
      <JobCard/>
      </div>
      </div>  

      </div>
      

    </div>

  );
};

export default ImageComponent;