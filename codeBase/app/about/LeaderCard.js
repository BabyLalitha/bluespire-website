
import li_icon from '../../public/linkedin.png';
import Image from 'next/image';
import styles from '../../styles/about.module.css';

export default function LeaderCard(props) {
  return (
    <div style={{paddingLeft:'25px',paddingRight:'25px'}} >
      <div >
        <div className={styles.acard100}>
          <Image src={props.image} alt="LeaderCard" className={styles.acardimg100} />
          <div style={{ textAlign:'center' }} >
            <p style={{color: 'black', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: '600',  wordWrap: 'break-word'}}>{props.name}</p>
            <p style={{color: 'rgba(0, 0, 0, 0.80)', fontSize: '10px', fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>{props.title}</p>
          </div>
          <div className={styles.acardbody100}>
            <a href={props.li}  className={styles.asocialbtn}>
              <Image style={{justifyContent:'center'}} src={li_icon}></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
