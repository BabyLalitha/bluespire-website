import Image from 'next/image'
import img from '../../../public/Rectangle.png';
import PA1 from '../../../public/pa1.jpg'
import PA2 from '../../../public/pa2.jpg'
import style from '../../../styles/services.module.css'




function PlaningAnalytics() {
  return (
    <div className="font-poppins">

     
      <div>
      <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Planning Analytics</p>

      </div> </center> 


        
        <div className={style.buttomdiv100} style={{ marginBottom: "50px" }}>
          <p className={style.bottomtext100}><b>PLANNING ANALYTICS</b></p>
          <p className={style.bottomtext100}  >Planning Analytics automates your planning, budgeting, forecasting and analysis processes. Also,  enables finance and line of business users to co-ordinate their planning, linking key business drivers to financial KPIs.</p>

        </div>

        <table className={style.contenttable100}>
          <tr>
            <td className={style.imagecolumn100}>
              <Image className={style.contentimg100} src={PA1} alt="..." />
            </td>
            <td className={style.textcolumn100}>
              <p className={style.cardtext100}> Blue Spire has best in className IBM Planning Analytics aka IBM Cognos TM1 practice to provide world-className delivery of IT services with a repository of best practices, reusable components and templates, backed by strong experience in delivering transformational engagements, our TM1  practice accelerates the implementation process and our solutions help customers gain efficiencies related  financial planning, budgeting, forecasting and consolidation there by improving quality of financial information and enhanced decision making.

              </p>
            </td>
          </tr>
        </table>
        
        <center><Image src={PA2} alt='planningAnalytics2' style={{ height: '300px', width: '1100px' }}></Image></center>

        <ul>
          <p className={style.bottomtext100} style={{ fontSize: '30px', textAlign: 'left',  paddingLeft: "50%", fontStyle: 'normal' }}>KEY Services Offerings:</p>
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

export default PlaningAnalytics