
import img from '../../../public/Rectangle.png';
import styles from '../../../styles/services.module.css'
import AA1 from "../../../public/aa1.jpg";
import AA2 from '../../../public/aa2.jpg';
import Image from 'next/image';

function ActionableAnalytics() {
  return (
    <div className='font-poppins'>
      
      <div>
      <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Actionable Analytics </p>

      </div> </center>

        <table className={styles.contenttable100}>
          <tr>
            <td className={styles.imagecolumn100}>
              <Image className={styles.contentimg100} src={AA1} alt="..." />
            </td>
            <td className={styles.textcolumn100}>
              <p className={styles.cardtext100}>Data-driven strategies have become more crucial for competitive advantage and have become a crucial way for leading companies to outperform their peers. Actionable analytics are very much needed to innovate, compete, and capture value.

Important aspects are to analyze the operations, predict future outcomes using machine learning algorithms, improve decision-making processes with proactive alerting and recommendations, and simplify and automate decision-making when dealing with complex problems.
              </p>
            </td>
          </tr>
        </table>

        <table className={styles.contenttable100}>
          <tr>
            <td className={styles.textcolumn100}>
              <p className={styles.cardtext100}>How do we get there? Blue Spire has the expertise to build a solution that can deliver these business needs by bringing together - Big Data Storage, Faster data processing capabilities, and Machine learning.
              </p>
            </td>
            <td className={styles.imagecolumn100}>
              <Image  className={styles.contentimg100} src={AA2} alt="..." />
            </td>
          </tr>
        </table>
        
      </div>
    </div>
  );
}

export default ActionableAnalytics;
