//ServiceCard.js

'use client'
import styles from '../../styles/services.module.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../Button';


function ServiceCard({ image, serviceName, serviceInfo, destination }) {

  




  return (
    <div  className='font-poppins'  style={{ paddingBottom: "10%" }} >

      <div className={styles.container100}>
        <div className={styles.card100}>
          <Image src={image} alt='serviceCard' className={styles.cardim100}  style={{height:'300px'}}/>
          <div className={styles.cardbody100}>
            <p className={styles.cardtitle100}  >{serviceName}</p>

            <p className={styles.cardinfo}> {serviceInfo}</p>
            {/* <button className={styles.cardbtn100} onClick={() => handleServivceButton()} >Explore</button> */}
            <Button 
            name='explore'
            link={`/${destination}`}
            />
          </div>


        </div>

      </div>
      <center><span className={styles.hover4}>{serviceName} </span></center>

    </div>

  );
}
export default ServiceCard;