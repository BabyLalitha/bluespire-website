'use client';

import img from '../../public/Rectangle.png';
import img2 from '../../public/aboutImg2.png';
import styles from '../../styles/about.module.css';
import Image from 'next/image'
import LeaderCard from './LeaderCard';
import teja from '../../public/teja.jpg';
import kiran from '../../public/kiran.jpg';
import chandra from '../../public/chandra.jpg'
import sample from '../../public/white.png'
import { useRouter } from 'next/navigation';

function About() {
  const router=useRouter();

  
  const ceoData = [
    {
      id: 0,
      name: "Partha",
      image: sample,
      title: "CEO",
      li: "http://www.goolge.com/",
    },
  ];

  const leaderData = [
    {
      id: 1,
      name: "Kiran Todupunoori",
      image: kiran,
      title: "Development Manager",
      li: "https://www.linkedin.com/in/kirantodupunoori/",
    },
    {
      id: 2,
      name: "Tejaswi Peesapati",
      image: teja,
      title: "Business Delivery Manager",
      li: "https://www.linkedin.com/in/tejaswipeesapati/",
    },


    {
      id: 3,
      name: "Arjun Chnadramouli",
      image: chandra,
      title: "Talent Acquisition Manager",
      li: "https://www.linkedin.com/in/gurneet-singh-05079a27/",
    }


  ];

  const arr = leaderData.map((data) => {
    return (
      <LeaderCard
        key={data.id} 
        name={data.name}
        image={data.image}
        title={data.title}
        li={data.li}
      />
    );



  });

  const ceo = ceoData.map((data) => {
    return (
      <LeaderCard
        key={data.id} 
        name={data.name}
        image={data.image}
        title={data.title}
        li={data.li}
      />
    );
  });

  
  return (
    <div className='font-poppins' >


      <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>ABOUT US</p>

      </div> </center>



      <div className={styles.sideCard} >

        <div className='w-1/2' style={{ marginLeft: '5vw', marginRight: '5vw' }}>
          <p style={{ height: '100%', color: '#000000', fontSize: '24px', fontWeight: '700', lineHeight: '36px', wordWrap: 'break-word' }} className={styles.whoWeAre}>Who We Are<br /></p>
          <p style={{ height: '100%', color: '#000000', opacity: 0.8, fontSize: '18px', fontWeight: '400', lineHeight: '30px', wordWrap: 'break-word' }} className={styles.whoWeAre}><span>The world of technology can be fast-paced. Thats why our goal is to provide an experience that keeps up with your companys needs. We will help you understand how to plan for your technology needs and invest in your infrastructure.</span><br /><br /> <span>As a customer focused partner, we are driven to go beyond the expected. Our perceptive and flexible team of knowledgeable professionals takes a consultative approach to software solutions, and has the deep practical experience to deliver powerful technology</span><br /><br /><span>We are uniquely structured to be a responsive and agile local provider, with the technical strength of a global enterprise. As a trusted advisor, we are highly focused on what really matters - leveraging advanced technology efficiently and effectively to help companies succeed.</span></p>
        </div>
        <div className='w-1/2' style={{ marginLeft: 'auto', marginRight: 'auto' }}>

          <center><Image className={styles.image} src={img2} alt="image" />
          </center>
        </div>
      </div>
      <br />





      <div style={{ background: '#F5F5F5' }}>

        <div >
          <div style={{ color: 'black', paddingBottom: '10px', fontSize: '24px', fontWeight: '700', textAlign: 'center', paddingTop:'20px' }}>High ROI<br /></div>

          <div style={{ color: '#000000', fontSize: '18px', fontWeight: '400', lineHeight: '30px', alignContent: 'center', lineHeight: '30px', wordWrap: 'break-word' }}>
            <div style={{ padding: '20px 5%'  }}>Blue Spires proven and demonstrable track record empowers us to deliver value in each engagement, a fact substantiated by our ever-increasing client base. Our operational excellence ensures every dollar spent by our clients on an outsourcing engagement provides them an enhanced ROI, which is both tangible and measurable.<br /><br />We bring expertise in cutting-edge technology to our client projects. In addition to the state-of-the-art technology, we adopt widely accepted standards in our development process<br /><br />As we march forward, we remain committed to strengthening our skills and expertise towards adding incremental value to our clients businesses by continually moving up the services value chain.<br />Our Technical team is proficient in using industry-standard technology tools and processes. We also make extensive use of our Outsourcing Methodology Process, an iterative product development process that has been implemented successfully time after time.
            </div>
          </div>
        </div>
      </div>




      <center><div style={{ margin: '5vw', textAlign: 'center', color: 'black', fontSize: '60.21px', justifyContent: 'center', alignItems: 'center', fontWeight: '400', lineHeight: '90.31px', wordWrap: 'break-word' }}>Our leaders <br /></div></center>



      <center><div >

        <div>{ceo}</div>

      </div>  </center>

      <center> <div style={{ paddingTop: '45px', paddingBottom: '100px' }}>
        <div className={styles.gridContainer}>

          {arr}
        </div>
      </div> </center>





      <div >
        <div style={{ height: '100%', position: 'relative', background: '#F5F5F5' }}>
          <div style={{ padding: '95px 5vw' }} >
            <div style={{ height: '100%', color: '#000000', fontSize: '39px', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word', paddingBottom: '45px' }}>Reimagine your career <br /></div>
            <div style={{ height: '100%', color: '#000000', fontSize: '24px', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word' }} className={styles.retext}>Your professional journey is a reflection of who you aspire to become. Its about blending your expertise, your inquisitiveness, and your authentic self into your endeavors.</div>
            <div className='mt-10'>
              <center> <div className={styles.button} style={{ height: '60px', textAlign: 'center', position: 'absolute', background: '#065593', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '17px' }} >
                <span  ><center><button className='align-middle' onClick={()=> router.push('/career')}> Join Today </button> </center></span>
              </div></center>
            </div>
          </div>
        </div>
      </div>



    </div>

  )
}



export default About
