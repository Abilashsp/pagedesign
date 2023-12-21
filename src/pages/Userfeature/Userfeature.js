import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { Exclamation } from 'react-hero-icon/solid';
import { ExclamationCircle } from 'react-hero-icon/outline';

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
            <div className=" w-2/5 mx-auto h-full  py-32">
                <div className=''>
         
                    <div className="bg-white px-4 py-3 sm:px-6 border relative w-full mt-2 shadow-md shadow-gray-400 ">
                        <div className='flex items-center'>

                        <div>
                            <div>
                                <ExclamationCircle className="w-5 h-5"/>
                            </div>

                        </div>

                        <div>
                            <h1 className='mx-2 text-sm font-medium'>
                                Pro user feature

                            </h1>
                    
                        </div>
                       
                

                    </div>
                    <div>
                    <h2  className='mx-2 text-xs'>
                              This is feature available to the pro user at an additional cost.Check out our <span className='text-[#468ce1]'>pricing information</span> to learn more and activate free trial.
                            </h2>
                    </div>
                    </div>

            
                </div>
            </div>
        </div>
    )
}
