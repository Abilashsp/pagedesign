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
        <div className="w-full h-screen ">
            <div className=" w-full mx-auto h-full  ">
                <div className=' h-full '>

                    <div className="bg-[#f5f8fa] px-5 py-3 sm:px-5 border-t-8 border-[#1e6e87] h-4/5 relative w-full mt-2 shadow-md shadow-gray-400 ">
                        <div className='px-12 py-12 '>
                        <div className='flex items-center'>
                            <div className="">
                                <img
                                    className="h-6 w-6 rounded-full"
                                    src="/Images/64.png"
                                    alt=""
                                />
                            </div>
    
                            <div className='px-2 font-bold'>
                                FutureWeb
                            </div>
                        </div>
                        <div className='w-2/6'>
                            <div>
                                <h1 className='text-3xl font-thin pt-5 text-blue-950'>
                                    Lets explore the Future <br />
                                    of the web together
                                </h1>
                                <h2 className='font-medium pt-2 text-base pb-6 text-blue-950'>
                                    June 17 and 18. 2019 · San Jose MeEnery Convention Center
                                </h2>

                                <div  className='text-sm leading-6'>
                                    FutureWeb is a conference that explores some of the new ideas tools,and technologies are happening in web design. This 2 day event features amazing workshops and sessions led by the best in the business covering topics including HTML/CSS, Javascript, Ul/UX Design, and much, much
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
