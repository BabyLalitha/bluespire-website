

import Image from 'next/image';
import CE1 from '../../../public/ce1.jpg';
import img from '../../../public/Rectangle.png'
import style from '../../../styles/services.module.css'


function CustomerExperience() {
  return (
    <div className='font-poppins'>
     
      <div>


      <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


          <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Customer Experience</p>

        </div> </center>
       
        <table className={style.contenttable100}>
          <tr>
            <td className={style.imagecolumn100}>
              <Image className={style.contentimg100} src={CE1} alt="..." />
            </td>
            <td className={style.textcolumn100}>
              <ul>
                <p className={style.cardtext100}>The end goal is to enrich the customer experience and drive profitability. Blue Spire offers Enterprise Portal solutions to combine information access and content distribution with collaboration, content management, workflow management, and social media integration.</p>
                <li style={{ paddingLeft: "30px" }}>Fully Responsive</li>
                <li style={{ paddingLeft: "30px" }}>Creative & Clean</li>
                <li style={{ paddingLeft: "30px" }}>Content Management</li>
                <li style={{ paddingLeft: "30px" }}>eCommerce</li>
              </ul>
            </td>
          </tr>
        </table>
       
      </div>
    </div>
  );
}

export default CustomerExperience;
