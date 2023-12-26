import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { Exclamation } from 'react-hero-icon/solid';
import { ExclamationCircle } from 'react-hero-icon/outline';
import { PiCloudArrowUpLight } from "react-icons/pi";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const activityItems = [
    {

        name: 'Elonoir chair',
        imageUrl: '/Images/61.jpeg',
        description: "Arm chair",
        role: 'Human Resources',
        like: "$429.00",
        comment: 17,
        date: '8h ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Gilroy Night Stand',
        imageUrl: '/Images/62.jpeg',

        description: "Tables",
        role: 'Sr. Front-End Developer',
        like: "$79.00",
        comment: 2,
        date: '45 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: `Hatchling light`,
        imageUrl: '/Images/63.jpeg',
        description: "Lighting",
        role: 'Product designer',
        like: "$99",
        comment: 8,
        date: '17 minutes ago',
        dateTime: '2023-01-23T11:00',
    },

]






const stars = (noOfStar) => {
    const starComponents = [];
    for (let i = 0; i < 5; i++) {
        const starColor = i < noOfStar ? "text-[#f5a440]" : "text-gray-400";
        starComponents.push(<StarIcon key={i} className={`text-xs w-5 h-5 ${starColor}`} />);
    }
    return <div className="flex">{starComponents}</div>;
};


























export default function Tweet() {
    return (
        <div className="w-full h-screen">
            <div className=" w-2/6  mx-auto h-full  py-32">
                <div className=' '>

                    <div className="bg-[#464b5a]  py-8 sm:px-12  relative w-full mt-2 shadow-md shadow-gray-400 ">
                        <div className='flex items-center justify-center '>
                            <div className="mt-2  rounded-lg  bg-[#3c4150] h-48 w-64 shadow-inner shadow-gray-800 border-b-2 border-gray-500 ">
                                <div className="flex  flex-col items-center px-5 py-9 ">
                                    <div>
                                    <PiCloudArrowUpLight className='w-14 h-14 text-gray-400' />
                                    </div>
            
                                    <div className=" text-sm  text-gray-600 py-1 px-2">
            
                                        <label
                                            htmlFor="file-upload"
                                            className="text-base font-semibold text-gray-300 px-1 " >
                                             <span className="">Drag and Drop to upload or</span> <span className='text-[#82dcff] cursor-pointer'> browse</span>  <span>to choose a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                      
                                    </div>
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
