
import styles from '../../styles/services.module.css'
import Image from 'next/image';
function FirstCard({ card, text }) {
  return (
    <div className={styles.firstcard100} >

      <Image className={styles.firstcardimg100} src={card} alt="first-card-img" />

      <div className={styles.textoverlay100}>

        <div className={styles.firstcardtext100}>&nbsp;&nbsp;&nbsp;&nbsp;{text} &nbsp;&nbsp;&nbsp;&nbsp; </div>
      </div>


    </div>

  );
}
export default FirstCard;
