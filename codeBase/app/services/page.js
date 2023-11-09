//Service.js

import styles from '../../styles/services.module.css'
import ServiceCard from './ServiceCard'
import cloud from '../../public/cloud.jpg';
import kafka from '../../public/kafka.jpg';
import middleware from '../../public/middleware.jpg';
import actionable from '../../public/actionable.png';
import planing from '../../public/planing.jpg';
import agile from '../../public/agile.png';
import custexp from '../../public/CustExp.jpg'
import img from '../../public/Rectangle.png';
import Image from 'next/image';


function Services() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div className={styles.bgImg100}>

        <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Services</p>

      </div> </center> 
        
          <div style={{ paddingTop: "100px", paddingBottom: "0px" }}>
            <h1 className={styles.bottomtext100} style={{ textAlign: "left" }}> Blue Spire Inc is a leading provider of information technology, consulting and business-process outsourcing services. We are dedicated to helping clients grow through our combined business-IT knowledge, thoughtful innovation and dedicated workforce.</h1>


            <h1 className={styles.finaltext100} > <b>Explore our services</b></h1>
          </div>

          <div className={styles.page100}>

            <div className="flex flex-wrap justify-center">


              <ServiceCard
                image={cloud} // Provide the image URL
                serviceName="Cloud Solutions" // Provide the heading text
                destination="services/cloud" // Provide the link URL
              />
               <ServiceCard
                image={kafka} // Provide the image URL
                serviceName="Kafka Distribution"// Provide the heading text
                destination="services/kafka" // Provide the link URL
              />
               <ServiceCard
                image={middleware} // Provide the image URL
                serviceName="Middleware Sollutions" // Provide the heading text
                destination="services/middleware"// Provide the link URL

              />
               <ServiceCard
                image={planing} // Provide the image URL
                serviceName="Planing Analytics" // Provide the heading text
                destination="services/planning-analytics" // Provide the link URL
              />
              <ServiceCard
                image={actionable} // Provide the image URL
                serviceName="Actionable Analytics" // Provide the heading text
                destination="services/actionable-analytics" // Provide the link URL
              />
               <ServiceCard
                image={agile} // Provide the image URL
                serviceName="Agile Enterprise" // Provide the heading text
                destination="services/agile-enterprise" // Provide the link URL
              />
              <ServiceCard
                image={custexp} // Provide the image URL
                serviceName="The Customer Experience" // Provide the heading text
                destination="services/customer-experience" // Provide the link URL
              />
            </div>





            <div >


            </div>

          </div>
        </div>
       
      </div>
    </div>

  );
}

export default Services;
