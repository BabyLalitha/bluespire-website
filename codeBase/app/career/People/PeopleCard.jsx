
 import Image from "next/image"
import codesandbox from '../../../public/codesandbox.png'
export default function PeopleCard(props) {
    return (
        <div className='bg-lightsteelblue'>
        <div className='peopleCard bg-[#ffffff] rounded-3xl drop-shadow-lg'style={{width:'17vw',height:'17vw', gap:'5', margin:'20px auto'}}>
            <div className="flex items-center justify-center">
            <div className=' mt-6 opacity-30 bg-sky-200 align-middle rounded-full' style={{width:'8vw', height:'8vw'}}>
            <div className='flex justify-center align-middle mt-2 '>
            <Image  
              src= {codesandbox} // Replace with the URL of your image
              alt="picture"
              width='5vw'
              height='5vw'
            />
            </div>
            
            </div>
            </div>  
            <h3 className='text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl flex justify-center align-center  font-semibold relative' style={{paddingTop:'1vw',margin:'0'}}>{props.name}</h3>
        </div>
        </div>
    )
}
