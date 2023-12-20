import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon,StarIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";





const stars=()=>{
    const star=[];
    for(let i=0;i<5;i++){
        star.push(<StarIcon key={i} className="w-4 h-4 text-[#2da587] mx-0.5"/>)
    }
    return star

}




export default function Example() {
    return (
        <div className="w-screen h-screen bg-white flex  items-center justify-center ">
            <div role="list" className="w-1/5 mx-auto h-[400px]">
                <div className=" w-full h-full  bg-[#f0f0f5] shadow-xl relative px-5 py-6 " >
                    <div className="flex-shrink-0 relative ">
                        <img
                            className="w-full h-1/2    object-cover shadow-inner rounded-md shadow-gray-50 "
                            src='/Images/49.jpg'
                            alt=""
                        />
                    </div>
                    <div>
                        <h1 className='text-[13px] tracking-wide font-bold text-gray-500 py-1 mt-4' >ENTIRE APARTMENT</h1>
                        <h1 className='text-base font-bold text-gray-700' >Modern Studio Central San <br/>Francisco</h1>
                        <div className='mt-2 text-sm text-gray-500'>
                            $120 USD per night
                        </div>
                    </div>
                    <div className='flex mt-2 items-center'>
                        <div className='flex '>{stars()}</div>
                        <div className='px-1 text-gray-700 text-sm font-bold'>23</div>
                    </div>

                </div>

            </div>


        </div>
    )
}
