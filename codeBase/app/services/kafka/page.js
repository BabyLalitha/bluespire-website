import Kafka1 from '../../../public/kafka1.jpg';
import Kafka2 from '../../../public/kafka2.jpg';
import style from '../../../styles/services.module.css';
import Image from 'next/image';
import img from '../../../public/Rectangle.png';

function Kafka() {
  return (
    <div className='font-poppins'>


<center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Kafka</p>

      </div> </center>

      
      <div>

        
        <div className={style.buttomdiv100} >
          <h1 className={style.bottomtext100} ><strong>ENTERPRISE MESSAGING HUB - WITH ADVANCED KAFKA FRAMEWORK</strong></h1>
          <table className={style.contenttable100}>
            <tr>
              <td className={style.textcolumn100}>
                <p className={style.bottomtext100}>Blue Spire's expertise helps you to more quickly and with less risk, achieve a well-architected Kubernetes-as-a-Service (KaaS) platform that spans the cloud, and the Edge.</p>
                <h1 className={style.bottomtext100}><b>Our Capabilities:</b></h1>
                <p className={style.bottomtext100}><b>Cloud Native Strategy</b></p>
                <p className={style.bottomtext100}>Define how adopting a Cloud Native approach—including Kubernetes, software architectures, and DevOps—will impact your business and your path to success</p>
                <p className={style.bottomtext100}><b>Application Modernization</b></p>
                <p className={style.bottomtext100}>Achieve increased agility with containerized and micro service applications.</p>
              </td>


              <td className={style.imagecolumn100}>
                <Image className={style.contentimg100} src={Kafka1} alt='kafka1' style={{ height: "500px", width: "700px" }} />
              </td>

            </tr>
          </table>




        </div>
        <div style={{ backgroundColor: 'white', paddingTop: '50px', paddingBottom: '50px' }}>
          <center><Image src={Kafka2} alt='kafka2' style={{ height: '500px' }} /></center>
        </div>
        <div style={{ paddingBottom: '100px' }}>
          <p className={style.bottomtext100}><b>APPLICATIONS DATA FLOW - KAFKA AS A CENTRAL HUB</b></p>

          <p className={style.bottomtext100}><b>APACHE KAFKA ECOSYSTEM / COMPONENTS</b></p>
          <ul>
            <p className={style.bottomtext100} style={{ textAlign: 'left', fontSize: '30px', fontFamily: 'Caliber', fontStyle: 'normal' }}>Apache Kafka ecosystem</p>
            <p className={style.bottomtext100} style={{ textAlign: 'left' }}>
              <li>Kafka Core</li>
              <li> Broker</li>
              <li>Clients library (producer, consumer, admin)</li>
              <li>Kafka Connect○ Kafka Streams</li>
              <li>Mirror Maker</li>
              <li>Apache Kafka components</li>
            </p>


            <p className={style.bottomtext100} style={{ textAlign: 'left', fontSize: '30px', fontFamily: 'Caliber', fontStyle: 'normal' }}>Kafka Broker</p>
            <p className={style.bottomtext100} style={{ textAlign: 'left' }}>

              <li>Central component responsible for hosting topics and delivering messages</li>
              <li> One or more brokers run in a cluster alongside with a Zookeeper ensemble</li>
              <li>Kafka Producers and Consumers</li>
              <li>Java-based clients for sending and receiving messages</li>
              <li>Kafka Admin tools</li>
              <li>Java- and Scala- based tools for managing Kafka brokers</li>
              <li>Managing topics, ACLs, monitoring etc.</li>
            </p>




          </ul>

        </div>

      </div>
     
    </div>

  )
}

export default Kafka