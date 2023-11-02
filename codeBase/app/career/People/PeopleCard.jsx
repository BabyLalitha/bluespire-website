
 import Image from "next/image"
import codesandbox from '../../../public/codesandbox.png'
export default function PeopleCard(props) {
    return (
        <div className=' bg-lightsteelblue'>
       <center><div className='peopleCard bg-[#ffffff] rounded-3xl  sm:w-1/2  lg:w-4/5 p-2 drop-shadow-lg'style={{ margin:'20px 20px 20px'}}>
            <div className="flex items-center justify-center">
            <div className='  opacity-30 bg-sky-200 align-middle rounded-full' style={{width:'8vw', height:'8vw',margin:'8px'}}>
            <div className='flex justify-center align-middle  '>
            <Image  
              src= {codesandbox} // Replace with the URL of your image
              alt="picture"
              className="justify-center align-middle sm:w-1 sm:h-1 md:w-3 md:h-3 lg:w-5 lg:h-5 "
            />
            </div>
            
            </div>
            </div>  
            <h3 className='text-xs sm:text-base lg:text-lg  flex justify-center align-center  font-semibold relative' style={{paddingTop:'1vw',margin:'0'}}>{props.name}</h3>
        </div></center>  
        </div>
    )
}



{/* <div className='peopleCard bg-[#ffffff] rounded-3xl   drop-shadow-lg'style={{width:'17vw',height:'17vw', gap:'5', margin:'20px auto'}}> */}