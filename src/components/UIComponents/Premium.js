import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon, StarIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Check } from 'react-hero-icon/outline';





const stars = () => {
    const star = [];
    for (let i = 0; i < 5; i++) {
        star.push(<StarIcon key={i} className="w-4 h-4 text-[#2da587] mx-0.5" />)
    }
    return star

}

export default function Example() {
    return (
        <div className="w-screen h-screen bg-white ">
            <div role="list" className="w-1/6 mx-auto h-[400px]">
                <div className=" w-full h-full  bg-white shadow-xl relative  border-2 border-gray-100 " >
                    <div className='w-full border-t-4 border-[#1eafe1]'>
                        <div className='px-5 py-2'>
                            <h1 className='text-sm tracking-wider font-medium text-gray-700 py-1 mt-4' >FREELANCER</h1>
                            <h1 className='text-[11px] font-normal text-gray-500' >Perfect for independent designers for<br />
                                Prototyping and domestration</h1>
                        </div>
                        <div className='flex items-center bg-gray-50 mt-3 px-2 py-2'>
                            <div className=' text-sm text-gray-700 flex px-3 py-2  '>
                                <span className='text-xl '>$</span> <span className='text-5xl font-thin tracking-widest'>12</span>
                            </div>
                            <div className=' text-[11px] text-gray-400 font-medium px-2 py-4 ml-2'>
                                per month billed annually or $14 month to month
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2 whitespace-nowrap'>
                        <div className='flex items-center px-2 py-1'>
                            <div><Check className="w-3 h-3" /></div>
                            <div className='text-xs mx-3'><span className='font-bold text-gray-700'> 1</span> <span className='text-gray-500 font-medium'>User</span> </div>

                        </div>
                        <div className='flex items-center px-2 py-1'>
                            <div><Check className="w-3 h-3" /></div>
                            <div className='text-xs mx-3'><span className='font-bold text-gray-700'> 5</span> <span className='text-gray-500 font-medium'>Projects</span> </div>

                        </div>
                        <div className='flex items-center px-2 py-1'>
                            <div><Check className="w-3 h-3" /></div>
                            <div className='text-xs mx-3'> <span className='text-gray-500 font-medium'>Download prototypes</span> </div>

                        </div>
                        <div className='flex items-center px-2 py-1'>
                            <div><Check className="w-3 h-3" /></div>
                            <div className='text-xs mx-3'><span className='text-gray-500 font-medium'>Password protected prototypes</span> </div>

                        </div>

                    </div>
                    <div className='px-6 py-4'> 
                        <div className=' border-2 items-start flex justify-center py-2'>
                            <button className='text-[10px] tracking-widest font-bold text-gray-800 '>
                                GET STARTED
                            </button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
