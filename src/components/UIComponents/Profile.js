import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";

const people = [
    {
        name: 'Molly Sanders',
        Status: "Approved",
        department: 'Vp of Sales',
        policy: '$20,000',
        desc: "All includes",

        image:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Roberts',
        Status: "Waiting Approval",
        department: 'Advisory Board',
        policy: '$5,000',
        desc: "Basic policy",

        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Devin Childs',
        Status: "Declined",
        department: 'Marketing Manager',
        policy: '$5,000',
        desc: "Basic policy",

        image:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        Status: "Approved",
        department: 'Managing Director',
        policy: '$25,000',
        desc: "All includes",

        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        Status: "Approved",
        department: 'Managing Director',
        policy: '$25,000',
        desc: "All includes",

        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        Status: "Approved",
        department: 'Managing Director',
        policy: '$25,000',
        desc: "All includes",

        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

]




export default function Example() {
    return (
        <div className="w-screen h-screen ">
            <div role="list" className="w-1/5  h-[270px]  ">
                <div className=" w-full h-full  bg-gray-50 shadow-xl relative rounded-md" >
                    <div>
                        <div className="flex-shrink-0 relative ">
                            <img
                                className="w-full h-[110px] object-cover rounded-t-md  "
                                src='/Images/48.jpeg'
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='absolute top-14 left-3'>
                        <div className=" rounded-full flex justify-center items-center">


                            <img className="h-24 w-24 border-4 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                        </div>
                    </div>

<div className=' border-b-2  '>
                    <div className='flex items-center justify-end mr-3 '>
                        <div className='items-center px-3 pb-3 '>
                            <h1 className='text-base text-gray-900 font-medium'>Cait  genevieve</h1>
                            <div className='flex items-center  '>
                                <RiMapPinLine className="w-4 h-4 text-gray-400 mr-1" />
                                <h1 className='text-xs font-normal text-gray-600 '>New York,NY</h1>

                            </div>

                        </div>
                        <div className='px-4 py-3 pb-4 '>
                            <div className='w-7 h-7 border-2 border-blue-500 rounded-full flex items-center justify-center '>
                                <LuUserPlus className='w-4 h-4 text-blue-500' />

                            </div>
                        </div>

                    </div>
                    </div>



                    <div>
                        <h1 className='text-gray-600 text-sm px-4 py-2'>
                            <span className='font-semibold text-gray-800'>7</span> followers you know
                        </h1>

                        <div className='flex relative mx-4'>
                            {people.map((e, index) => (
                                <div className={`w-9 h-9 rounded-full bg-gray-100 items-center flex justify-center absolute `} style={{ left: `${index * 26}px`, zIndex: `${people.length - index}` }}>
                                    <div className="flex-shrink-0 relative">
                                        <img
                                            className="w-7 h-7 object-cover rounded-full"
                                            src={e.image}
                                            alt=""

                                        />
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
