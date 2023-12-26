import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { CiCirclePlus } from "react-icons/ci";
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import {

    AtSymbolIcon,
    FaceSmileIcon,
    PhotoIcon,
    VideoCameraIcon


} from '@heroicons/react/24/outline'







const info = [
    { Name: "Amber Matthews", userid: "@ambermatthews", imageurl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "6" },
    { Name: "Russell Robertson", userid: "@russellrobertson", imageurl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" },
    { Name: "Kathleen Ellis", userid: "@kathleenellis", imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" }
]
const trending = [
    { title: "#FirstSnow", tweets: "13.7K" },
    { title: "Thanksgiving Weekend", tweets: "17.8K" },
    { title: "#OscarBuzz", tweets: "10.3K" },
    { title: "Black Friday", tweets: "10.3K" },
]


const activityItems = [
    {

        name: 'Amanda Wagner',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: '  Join us on November 27th tor our 1st Dribbble meetup in Waterloo! Cauing al designers, UV/UXers, iUstaiors and other creatives from the KW and sunouneing area together to talk shop, ingle, and walk away with some great swegl',
        role: 'Human Resources',
        like: 45,
        comment: 17,
        date: '8h ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Kimberly Kennedy',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: "Had an inspiring bwo cays ar leteTal ho learaho from the best design thinkers in the biz. Can't wait te start plaving with some oreat new ideas",
        role: 'Sr. Front-End Developer',
        like: 11,
        comment: 2,
        date: '45 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Adam Henderson',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: "Had an inspiring bwo cays ar leteTal ho learaho from the best design thinkers in the biz. Can't wait te start plaving with some oreat new ideas",
        role: 'Product designer',
        like: 34,
        comment: 8,
        date: '17 minutes ago',
        dateTime: '2023-01-23T11:00',
    },

]






function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Discover', href: '#' },
    { name: 'Connect', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Jobs', href: '#' },

]


export default function Deempathyzing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Features");
    const [showPassword, setShowPassword] = useState(false);

    // const userid=()=>{
    //     const user=info.map((e)=>e.Name.toLocaleLowerCase())
    //     return user
    // }







    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const activelink = (id) => {
        setactive(id)
    }




    return (
        <div className="min-h-screen  w-screen">
            <header className="bg-white w-full mx-auto h-20 ">
                <nav className="mx-auto flex w-full items-center justify-between  lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">


                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ">
                       
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end  justify-between items-center">

                        <form className="relative flex w-2/6 py-4 h-20 " action="#" method="GET">

                            <MagnifyingGlassIcon
                                className="pointer-events-none absolute inset-y-0 left-4 top-1 h-full w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            <input
                                id="search-field"
                                className="block  w-full border-2 h-5/6 mt-2 rounded-3xl    bg-gray-50 pl-10  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                placeholder='Search'
                                type="search"
                                name="search"
                            />
                        </form>
                        <div className="mx-4 mt-2">
                            <img className="h-10 w-10 rounded-full " src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className='relative mt-2'>
                            <div className='absolute inset-y-0 left-3 top-2'>
                                <PencilSquareIcon className='w-5 h-5 text-white  ' />
                            </div>
                            <button
                                type="button"
                                className="rounded-3xl bg-[#419bbe] px-4 pl-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                New Post
                            </button>
                        </div>
                    </div>
                </nav>
            </header>


            <div>
                <div className='flex items-center justify-end'>
                    <div className='w-3/5  flex justify-end '>
                        <div className=" w-4/5  mb-2">
                            <div className='w-full h-20 bg-gray-100 px-4  sm:px-6 flex items-center  '>
                                <div className='px-4 py-4 w-full '>
                                    <div className='px-4 w-full'>
                                        <div className="relative mt-2 rounded-md shadow-sm w-full">
                                            <input
                                                type="text"
                                                name="account-number"
                                                id="account-number"
                                                className="block w-full rounded-lg border-0  bg-gray-50 py-2 px-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Type your Message"
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                <VideoCameraIcon className="h-6 w-6 text-gray-600 mx-1" aria-hidden="true" />
                                                <PhotoIcon className="h-6 w-6 text-gray-600 mx-1" aria-hidden="true" />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {activityItems.map((item) => (
                                <div className="bg-white px-4 py-5 sm:px-6  border-b-2 relative w-full">
                                    <div className="flex space-x-3">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={item.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 py-1">
                                                    <a href="#" className="hover:underline">
                                                        {item.name}
                                                    </a>
                                                </p>
                                                <p className="text-sm text-gray-700 font-semibold ">
                                                    <a href="#" className="hover:underline">
                                                        {item.role}
                                                    </a>
                                                </p>
                                            </div>
                                            <div>
                                                <p className="py-1 text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="flex ">
                                                <div className="flex  py-2 justify-center items-center">
                                                    <div className=' py-2 text-xl'><BiLike className=" text-gray-500" /></div>
                                                    <div className='px-3 py-2'>{item.like}</div>
                                                </div>
                                                <div className="flex px-4 py-2 justify-center items-center">
                                                    <div className='py-2 text-xl'><MdOutlineModeComment className=" text-gray-500" /></div>
                                                    <div className='px-3 py-2'>{item.comment}</div>
                                                </div>
                                                <div className="flex px-4 py-2 justify-center items-center">
                                                    <div className=' py-2 text-xl'><FiShare className=" text-gray-500" /></div>
                                                    <div className='px-3 py-2'>share</div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                    <div className='absolute top-4 right-2 text-sm text-gray-500 font-semibold'>{item.date}</div>
                                </div>

                            ))}
                        </div>
                    </div>
























                    <div className='mb-20'>
                        <div className="flex min-h-full flex-1 flex-col  py-6 sm:px-6 lg:px-8">

                            <div className="  sm:w-full sm:max-w-[350px] ">
                                <div className="  shadow sm:rounded-b-lg ">
                                    <div className="bg-white w-full px-5 py-5  ">
                                        <div className="flex items-baseline justify-between">
                                            < h1 className="text-base text-gray-700 font-medium">Who to Follow</h1>
                                            <div className="flex items-center">
                                                <div className="text-base text-[#419bbe] font-semibold px-2">View all</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="bg-gray-50 w-full px-4 py-2  ">
                                        <div className="">
                                            {info.map((information) => (
                                                <div className="flex items-center px-2 py-3  border-gray-300">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full"
                                                            src={information.imageurl}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="flex-grow mx-6">
                                                        <div className="text-base text-gray-700 font-bold">{information.Name}</div>
                                                        <div className="text-gray-500 text-sm">{`${information.userid}`}</div>
                                                    </div>
                                                    <div className="flex-shrink-0 mx-6 font-bold">
                                                        <CiCirclePlus className='w-6 h-6  text-gray-600 ' />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>






                                </div>

                            </div>


                        </div>
                        <div>

                            <div className="flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8">
                                <div className=" sm:mx-auto sm:w-full sm:max-w-[350px] ">
                                    <div className="  shadow sm:rounded-b-lg ">
                                        <div className="bg-white w-full px-5 py-5  ">
                                            <div className="flex items-baseline justify-between">
                                                < h1 className="text-base text-gray-700 font-medium">Trending News</h1>
                                                <div className="flex items-center">
                                                    <div className="text-base text-[#419bbe] font-semibold px-2">View all</div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="bg-gray-50 w-full px-4 py-2  ">
                                            <div className="">
                                                {trending.map((information) => (
                                                    <div className="flex items-center px-2 py-3  border-gray-300">

                                                        <div className="flex-grow ">
                                                            <div className="text-base text-[#5f9cb6] font-bold">{information.title}</div>
                                                            <div className="text-gray-500 text-sm">{`${information.tweets} posts`}</div>
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>

                                        </div>






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
