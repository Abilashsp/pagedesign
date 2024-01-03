import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon, StarIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Check } from 'react-hero-icon/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { FaCheckCircle } from "react-icons/fa";





const stars = () => {
    const star = [];
    for (let i = 0; i < 5; i++) {
        star.push(<StarIcon key={i} className="w-4 h-4 text-[#2da587] mx-0.5" />)
    }
    return star

}

export default function Example() {
    return (
        <div className="w-screen h-screen bg-white  ">
            <div role="list" className="w-3/12  h-[400px">
                <div className=" w-full h-full  bg-white relative  border-2 border-gray-200 " >
                    <div className='  px-8 py-6'>
                        <h1 className='text-base font-semibold text-gray-700 tracking-wide py-2'>Everything you need in one place</h1>
                        <div className=''>
                            <div className='flex items-center py-3  '>
                                <FaCheckCircle className='w-5 h-5 text-blue-500' />
                                <div className='px-3 text-sm font-normal text-gray-500'>Create your own online presence</div>
                            </div>
                            <div className='flex items-center py-3 '>
                                <FaCheckCircle className='w-5 h-5 text-blue-500' />
                                <div className='px-3 text-sm text-gray-500'>Manage all of your products and inventory</div>
                            </div>
                            <div className='flex items-center py-3 '>
                                <FaCheckCircle className='w-5 h-5 text-blue-500' />
                                <div className='px-3 text-sm text-gray-500'>Effortlessly complete the order fulfillment</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
