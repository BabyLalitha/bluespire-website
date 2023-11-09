import MW1 from '../../../public/mw1.jpg';
import MW2 from '../../../public/mw2.jpg';
import MW3 from '../../../public/mw3.jpg';
import img from '../../../public/Rectangle.png';
import Image from 'next/image';
import style from '../../../styles/services.module.css'


function Middleware() {
  return (
    <div className="font-poppins"> 
    
    <div>
    <center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Middleware Solutions</p>

      </div> </center> 

       
<table className={style.contenttable100}>
                    <tr>
                        <td className={style.imagecolumn100}>
                        <Image className={style.contentimg100} src={MW1} alt="..."/>
                        </td>
                        <td className={style.textcolumn100}>
                        <p className={style.cardtext100} style={{fontSize:'20px'}}> Blue Spire Inc. partnered with WSO2, a leader in comprehensive middleware platforms for enabling service-oriented architecture (SOA) and composite application development and deployment. WSO2 is the only company that provides a completely integrated enterprise application platform for enabling a business to build and connect APIs, applications, Web services, iPaaS, PaaS, software as a service and legacy connections without having to write code; using big data and mobile; and fostering reuse through a social enterprise store. Only with WSO2 can enterprises use a family of governed secure solutions built on the same code base to extend their ecosystems across the cloud and on mobile devices to employees, customers and partners in anyway they like. Hundreds of leading enterprise customers across every sector—health, financial, retail, logistics, manufacturing, travel, technology, telecom and more—in every region of the world rely on WSO2’s award-winning, 100% open source platform for their mission-critical applications. To learn more, visit http://wso2.com or check out the WSO2 community on the WSO2 Blog, Twitter, LinkedIn, and Facebook
                        </p>
                        </td>
                    </tr>
                </table> 





                <table className={style.contenttable100}>
                    <tr>
                    <td className={style.textcolumn100}>
                        <p className={style.cardtext100}>Blue Spire is currently engaged with AZ state agency on an agency wide Digital Transformation initiative to make its services customer focused, simpler to use, and more accessible. Also, to make its workforce more efficient, digital by default, and mobile.
</p>
                        </td>
                        
                        
                        <td className={style.imagecolumn100}>
                        <Image  className={style.contenimg100} src={MW2} alt="..."/>
                        </td>
                        
                    </tr>
                </table>
                <div style={{backgroundColor:"white" , paddingBottom:"50px"}}>
              <center>  <Image  src={MW3} alt="..." style={{width:"1100px" , height:"300px" }}/> </center>
                </div>
                <p className={style.cardtext100} style={{textAlign:"center", paddingBottom:"100px"}}>BlueSpire helped architect and implement a system to manage the identities of all the Customers through a secure Single sign-on system. In order to implement this system BlueSpire took advantage of some of the Industry Standard Open Source technologies such as Apache DS, Vagrant for configuration Piwik for analytics and ElasticSearch. WSO2 Platform with its innovative implementation, flexibility and 100% Open Source Production readiness helped bring the solution together. Now the Customers, for the first-time are able to securely authenticate and access their services with state agency improving Business turnaround times rapidly. Also, built and delivered an innovative platform using API-enabled services to provide rapid access to internal and external consumers. This was mainly delivered using WSO2 ESB.

To learn more or to engage us on any WSO2 implementations around Blue Spire has expertise in WSO2 Product suite - WSO2 Application Server, WSO2 Enterprise Service Bus, WSO2 Identity Server, WSO2 Data Services Server, WSO2 API Manager, WSO2 Micro services Framework for Java & WSO2 Data Analytics Server.
</p>
                </div>

    </div>

  )
}

export default Middleware