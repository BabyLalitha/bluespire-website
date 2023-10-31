import Image from "next/image"
import mappin from '../../../public/mappin.png'
import minimize from '../../../public/minimize.png'

export default function JobCard(props) {
    return (
        <center>
            
            <div className='bg-lightsteelblue aling-center justify-center '>
          <div> 
        <div className='jobCard bg-[#ffffff] rounded-3xl lg:w-10.93% lg:h-8.44% flex drop-shadow-lg  mt-11 mb-10 justify-center ml-30 mr-30  'style={{width:"70vw"}}>
            <div className="  grid lg:grid-cols-3 md:grid-cols-3 sm:grid-rows  " >
            
            <div className='w-[70px] h-[70px] bg-sky-800 rounded-full border justify-center flex align-middle border-sky-800 'style={{margin:'auto',marginLeft:'20px'}}>
                {/* <div class="w-[24.38px] h-6 relative flex-col justify-start items-start inline-flex"></div> */}
                {/* <h3 className='w-[460.57px] h-[50px] font-pop font-Poppins ml-30 text-black text-[25px] font-semibold '>{props.name}</h3> */}
              <h3 className='text-white text-5xl  font-bold mt-8 justify-center flex align-middle '>J</h3>
            </div>
            
            <div classname='grid ' style={{margin:'10px'}}>
            <h3 className='  font-Poppins  text-stone-600 lg:text-[10px] md:text-[8px] text-sm font-semibold 'style={{margin:'0'}}>{props.meta}</h3>
            <h3 className='  font-Poppins  text-stone-600 lg:text-[20px] md:text-[15px] sm:text-[8px] font-semibold' style={{margin:'0'}} > {props.name}</h3>
            <div className=' grid grid-cols-3
            '>
            <div style={{ display: 'grid', gridTemplateColumns:'repeat(2, minmax(0, 0.28fr))' }}>
            <Image  className='flex  justify-center align-bottom'
              src= {mappin} // Replace with the URL of your image
              alt="picture"
              width='0.5vw'
              height='0.5vw'
            />
            <h3 className='font-Poppins  text-stone-600 lg:text-[10px] md:text-[8px] text-sm font-semibold justify-center 'style={{margin:'0'}}>{props.place}</h3>
            
            </div>
            <div className='grid grid-cols-2'style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 0.32fr))', }}>
            <Image  
            className=" justify-center align-middle"
              src= {minimize} // Replace with the URL of your image
              alt="picture"
              
            />
            <h3 className=' grid font-Poppins  text-stone-600  lg:text-[10px] md:text-[8px] text-sm font-semibold justify-center 'style={{margin:'0'}}>{props.type}</h3>
            </div>
            <h3 className=' grid font-Poppins  text-stone-600 lg:text-[10px] md:text-[8px] text-sm  font-semibold 'style={{margin:'0'}} >{props.ctc}</h3>

            </div>
            
            </div>
            <div  style={{marginRight:"-10%",margin:"3%"}} >
            <button className='justify-center  text-white    w-2/5 sm:w-1/3 md:w-1/2 lg:w-1/4 h-16 sm:h-20 lg:h-16 bg-sky-800 'style={{borderRadius:'50px'}}>view Details</button>
            </div>
            </div>  
            </div>
             
        </div>
        </div>
    
        </center>
    )
}
