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
            <div className=" w-2/6  mx-auto h-full  py-32">
                <div className=' '>

                    <div className="bg-[#373773]  py-8 sm:px-12  relative w-full mt-2 shadow-md shadow-gray-400 ">
                        <div className=''>
                            <div>
                                <h1 className='text-2xl text-gray-50 px-2 py-2 tracking-wide'>
                                    Here every step of the way
                                </h1>
                                <div className='text-lg  px-2 py-2 w-11/12 text-[#a4deee]  tracking-wide'>
                                    Think of us as your very own help desk,with
                                    free around-the-clock support. Contact us anytime-24 hours a day, 7 days a week.
                                </div>

                            </div>
                        </div>
                        <div className='px-3 pt-4'>
                            <button
                                type="button"
                                className="rounded-3xl bg-gray-50 px-7 py-2 tracking-wide text-sm font-bold text-[#373773] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                REACH OUT NOW
                            </button>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
