import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon, StarIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Check } from 'react-hero-icon/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';





const stars = () => {
    const star = [];
    for (let i = 0; i < 5; i++) {
        star.push(<StarIcon key={i} className="w-4 h-4 text-[#2da587] mx-0.5" />)
    }
    return star

}

export default function Example() {
    return (
        <div className="w-screen h-screen bg-white flex  items-center justify-center ">
            <div role="list" className="w-3/12 mx-auto h-[400px">
                <div className=" w-full h-full  bg-white relative  border-2 border-gray-200 " >
                      <div className='  px-8 py-6'>
                        <h1 className='text-base font-semibold text-gray-700 tracking-wide'>Protecting your customers and income</h1>
                        <div className=''>
                            <div className='flex items-center py-5  '>
                                <div className='w-9 h-9 bg-[#7896a5] rounded-full flex items-center justify-center px-2'>
                                    <LockClosedIcon className='w-5 h-5 text-gray-50'/>
                                </div>
                                <div className='px-3 text-sm font-normal text-gray-500'>Machine learning monitors suspicions transaction</div>
                            </div>
                            <div className='flex items-center py-4 '>
                                <div className='w-9 h-9 bg-[#7896a5] rounded-full flex items-center justify-center px-2'>
                                    <LockClosedIcon className='w-5 h-5 text-gray-50'/>
                                </div>
                                <div className='px-3 text-sm text-gray-500'>No fee when your customer dispute a payment</div>
                            </div>
                        </div>
                      </div>

                </div>

            </div>


        </div>
    )
}
