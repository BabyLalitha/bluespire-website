'use client'
import Cloud1 from '../../../public/cloud1.jpg';
import Cloud2 from '../../../public/cloud2.jpg';
import img from '../../../public/Rectangle.png';
import one from '../../../public/one.jpg';
import two from '../../../public/two.jpg';
import three from '../../../public/three.jpg';
import four from '../../../public/four.jpg';
import five from '../../../public/five.jpg';
import six from '../../../public/six.jpg';
import seven from '../../../public/seven.jpg';
import ten from '../../../public/ten.jpg';
import Image from 'next/image';
import astyles from '../../../styles/about.module.css';
import { useRouter } from 'next/navigation';

function Cloud() {
  const router=useRouter();
  return (
    <div className='font-poppins'>

<center><div style={{ backdropFilter: "blur(424px)", justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <center> <Image className='w-screen' style={{ height: '420px', position: 'relative' }} src={img} alt='Image' /></center>


        <p style={{ textAlign: 'center', color: 'white', fontSize: '58px', fontWeight: '400', lineHeight: '80px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', wordWrap: 'break-word', position: 'absolute' }}>Cloud services</p>

      </div> </center>


      <div className='my-16'>


        <div className='w-[100%] h-auto flex flex-col md:flex-row justify-center items-center my-10 md:my-0'>
          <div className='h-full w-[100%] md:w-1/2 md:order-2'>
            <h3 className='mb-5 font-semibold text-lg pl-[5%] md:hidden'>

              Cloud Migration & Management
            </h3>
            <Image className='w-[90vw] h-auto md:h-[45vh] md:w-auto mx-auto my-5' src={Cloud1} alt="homeImageone" />
          </div>
          <div className='h-full md:w-1/2 w-[100%] flex justify-center items-center'>
            <div className='md:w-[40vw] w-[90%]'>
              <h3 className='mb-5 font-semibold text-lg hidden md:block'>

                Cloud Migration & Management
              </h3>
              <p className='text-[15px] font-light'style={{paddingBottom:'50px'}}>


                Enterprises are embracing the advanced cloud technology to accelerate their business growth in a rapid pace to keep up with the constantly evolving business needs and the ever changing customer demands.<br/>
                <br/>
                Our team of experienced consultants will collaborate with you to assess your current IT landscape to define an ideal approach to migrate your business applications into cloud, and execute it successfully. Our team is also efficient in delivering scalable, secured and high performing custom cloud applications when the situation calls for it. Here are the cloud service, we have expertise in;<br/>
                <br/>
                <ul class="list-disc ">
                  <li>Complete infrastructure migration.</li> 
                  <li>On-premise business application to cloud migration. </li>
                  <li>Re-architect & Modernization of existing applications for cloud deployments.</li> 
                  <li>Data migration and Cross platform migration (e.g Azure to AWS or other platforms) .</li>
                  <li>DevOps & Automation on Cloud.</li>
                  </ul>
              </p>


            </div>
          </div>
        </div>


        <div style={{ background: '#F5F5F5' }}>

          <div >
            <div style={{ color: 'black', paddingTop: '30px', fontSize: '24px', fontWeight: '700', textAlign: 'center' }}>Cloud Migration Services<br /></div>

            <div className="text-15px" style={{ color: '#000000',  fontWeight: '400',paddingTop:'20px', lineHeight: '30px', alignContent: 'center', lineHeight: '30px', wordWrap: 'break-word' }}>
              <div style={{ padding: '0 5%',paddingBottom:'30px' }}> We provides a full array of cloud migration services that helps you leverage the cloud platform to its full potential. We perform an in depth analysis of your existing business, requirements, future plans and goals, while enabling you to understand your cloud readiness level and determine an actionable technology roadmap to leverages the power of cloud. Our experienced team will work with you to gain an understanding of your business process, existing IT infrastructure & technologies to design a strategy through:<br/>
              <br/>
              <ul class="list-disc">
               <li>What to Move: Prioritize your applications, workflows and infrastructure for cloud migrations.</li>
                <li>How to Move: Formulate a migration strategy to address your business goals and migrate your processes with minimal disruption to your business operations.</li>
                <li>Where to Move: We help you migrate to reliable platforms like Microsoft Azure, Amazon Web Services (AWS) and more.</li>
                <li>Cloud Infrastructure Design: We work towards meeting your organization’s requirements by defining & creating cloud infrastructure that is reliable, secure, scalable and easy to maintain.</li>
               </ul>
              </div>
            </div>
          </div>
        </div>



        <div className='w-[100%] h-auto flex flex-col md:flex-row justify-center items-center'>
          <div className='h-full w-[100%] md:w-1/2'style={{paddingTop:'30px'}}>
            <h3 className='mb-5 font-semibold text-lg pl-[5%] md:hidden'>
              Cloud Application Development Services
            </h3>
            <Image className='w-[90vw] h-auto md:h-[45vh] md:w-auto mx-auto my-5' src={Cloud2} alt="homeImageone" />
          </div>
          <div className='h-full md:w-1/2 w-[100%] flex justify-center items-center'>
            <div className='md:w-[40vw] w-[90%]'>
              <h3 className='mb-5 font-semibold text-lg hidden md:block'>
                Cloud Application Development Services
              </h3>
              <p className='text-lg font-light'>
                Whether you are looking to build a completely new application on the cloud or looking to move your existing On-premise applications to the cloud, our cloud experts can help you do it right. We build and deploy robust cloud applications that are highly scalable. Our cloud architects and developers are adept at developing applications on Azure, AWS and Force.com platforms, enabling your applications to leverage the power and scalability of cloud, while reducing your overall IT infrastructure costs. We have also helped many enterprises re-architect their complex On-premise applications to be deployed on cloud platforms while also ensuring the improvement in application performance.
              </p>
            </div>
          </div>
        </div>


        <div style={{ background: '#F5F5F5' }}>
          <div >
            <div style={{ color: 'black', paddingTop: '34px', fontSize: '24px', fontWeight: '700', textAlign: 'center' }}>Cloud Managed Services & Automation<br /></div>

            <div className="text-lg" style={{ color: '#000000', paddingTop:'25px' ,fontWeight: '400', lineHeight: '30px', alignContent: 'center', lineHeight: '30px', wordWrap: 'break-word' }}>
              <div style={{ padding: '0 5%',paddingBottom:'25px' }}> Cloud infrastructure management is a time consuming activity. You focus on your core business and leave your cloud management to our cloud experts. We provide round the clock cloud management services which covers complete cloud infrastructure management, cloud monitoring, cloud usage optimization, DevOps, cloud automation and much more. We continuously monitor to traffic spikes, possible problems, identify threats and manage incidents 24/7. Our cloud consultants can analyze your existing cloud infrastructure setup to identify gaps and offer solutions to address them for improvements.<br/>
              <br/>
Though the cloud and DevOps are totally two different concepts, we understands how these both can be applied together for any business in order to achieve the highest operational efficiency. We can transform your cloud application development process and speed-up product release time to market. DevOps services in the cloud with the experienced partner like us results in faster time to market for application delivery with lowered cost of application development, deployment, operations and support. Our team of DevOps implementation engineers will guide you in choosing a right DevOps tool to fit your requirements, or providing inputs on the best way to set up an architecture.

              </div>
            </div>
          </div>
        </div>

        <center><div>
        <div className="text-5xl font-poppins "style={{ color: 'black', paddingTop: '35px', fontWeight: '300', textAlign: 'center' }}>Ecosystem Partnerships<br /></div> 
        <div style={{ color: '#000000', paddingTop:'30px',fontSize: '26px', fontWeight: '150', lineHeight: '26px', alignContent: 'center', lineHeight: '30px', wordWrap: 'break-word' }}>
        <div style={{padding:'0 5vw'}}>No challenge is out of reach. We extend our industry expertise and comprehensive cloud services through a vast global network of market leaders and innovators to accelerate our clients’ path to value.</div> 
         
        </div>
        <div >
        <div class="flex flex-wrap "style={{margin:'40px 15% 40px'}}>
  
  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={one} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>
  
  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={two} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>

  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={three} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>

  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={four} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>

  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={five} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>

  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={six} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>

  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={seven} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>

  <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
    <Image 
    src={ten} alt="Image 1" class="w-[173px] h-[76px] rounded-lg"/>
  </div>


        </div>
        </div>
        </div></center>


        <div >
        <div style={{ height: '100%', position: 'relative', background: '#F5F5F5' }}>
          <div style={{ padding: '95px 5vw' }} >
            <div style={{ height: '100%', color: '#000000', fontSize: '39px', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word', paddingBottom: '45px' }}>Reimagine your career <br /></div>
            <div style={{ height: '100%', color: '#000000', fontSize: '24px', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word' }} className={astyles.retext}>Your professional journey is a reflection of who you aspire to become. Its about blending your expertise, your inquisitiveness, and your authentic self into your endeavors.</div>
            <div className='mt-10'>
              <center> <div className={astyles.button} style={{ height: '60px', textAlign: 'center', position: 'absolute', background: '#065593', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '17px' }} >
                <span  ><center><button className='align-middle' onClick={()=> router.push('/career')}> Join Today </button> </center></span>
              </div></center>
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
  );
}

export default Cloud;

