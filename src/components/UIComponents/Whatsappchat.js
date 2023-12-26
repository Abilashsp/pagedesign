import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { BsCheck2All } from "react-icons/bs";

const people = [
    {
        name: 'Molly Sanders',
        Status: "Approved",
        department: 'Vp of Sales',
        policy: '$20,000',
        desc: "All includes",
        mesg: "Sure! 8:30pm works Great",
        time: "6:42 PM",

        image:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Roberts',
        Status: "Waiting Approval",
        department: 'Advisory Board',
        policy: '$5,000',
        desc: "Basic policy",
        mesg: "Thats really funny! Did you see the photo of matt?",
        time: "Sun",

        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },


]




export default function Example() {
    return (
        <div className="w-screen h-screen ">
            <div role="list" className="w-[380px] h-[170px]  ">
                <div className=" w-full h-full   shadow-xl relative rounded-md" >

                    <div >
                        {people.map((e,index) => (
                            <div className='flex items-center px-4 py-2 bg-gray-50 border-b-2  relative'>
                                <div className="flex-shrink-0 relative ">
                                    <img
                                        className="h-16 w-16 rounded-full shadow-inner shadow-gray-300 border-2 border-gray-200 "
                                        src={e.image}
                                        alt=""
                                    />

                                </div>

                                <div className='px-3   '>
                                    <h1 className='text-base font-semibold text-gray-800 my-1'>
                                        {e.name}
                                    </h1>
                                    <h2 className='text-[14px] font-normal text-gray-400 mb-1 h-10'>
                                        {e.mesg}
                                    </h2>

                                </div>
                                <div className=' absolute top-4 right-3'>
                                     <div className="text-sm font-normal text-gray-400">
                                        {index===1?<div className='flex items-center  '><BsCheck2All className='w-5 h-5 text-blue-500 mx-2 '/><div className='mb-1'>{e.time}</div></div>:<span>{e.time}</span>}
                                
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>












                </div>

            </div>
        </div>
    )
}
