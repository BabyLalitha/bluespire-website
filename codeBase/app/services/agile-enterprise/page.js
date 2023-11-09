

import styles from '../../../styles/services.module.css'
import img from '../../../public/Rectangle.png'
import AE1 from '../../../public/ae1.jpg';
import AE2 from '../../../public/ae2.jpg';
import Image from 'next/image';
import style from '../../../styles/services.module.css'



function AgileEnterprise() {
  return (
    <div className={styles.bgImg100}>

      <div>

        <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


          <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Agile Enterprises</p>

        </div> </center>

        <table className={style.contenttable100}>
          <tr>
            <td className={style.imagecolumn100}>
              <Image className={style.contentimg100} src={AE1} alt="..." />
            </td>
            <td className={style.textcolumn100}>
              <p className={style.cardtext100}>We help our customers get to market faster by leveraging modern infrastructure, agile engineering processes and delivery excellence.

                Our strong regional delivery capabilities are leading the way in perfecting the distributed agile development model.

                Based on our successful implementations, you can be confident that our Distributed Agile Custom Development model can impact your business by eliminating the communication barriers of distributed teams, increasing efficiency, lowering costs and improving the quality of the end product.

              </p>
            </td>
          </tr>
        </table>
        <center><Image src={AE2} alt='AE2' style={{ height: '300px', width: '1100px' }}/></center>

        <ul>
          <p className={style.bottomtext100} style={{ fontSize: '30px', textAlign: 'left', fontFamily: 'Caliber', paddingLeft: "25%", fontStyle: 'normal' }}>KEY Services Offerings:</p>
          <p className={style.bottomtext100} style={{ textAlign: 'left', paddingLeft: "25%", paddingBottom: '50px' }} >
            <li>Full Life Cycle Implementation Services</li>
            <li>Consolidate and automate current reports generation process</li>
            <li>TM1 Infrastructure support</li>
            <li>TM1 Solution architecture and design</li>
            <li>Integration and automation</li>
            <li>Re-engineering and  Redesigning</li>
            <li>Remote System Administration</li>
            <li>TM1 REST API Support</li>
            <li>Disaster Recovery Services</li>
            <li>TM1 Upgrades & Migrations</li>
            <li>TM1  Maintenance & Support Services</li>
          </p>
        </ul>


      </div>
    </div>
  )
}

export default AgileEnterprise