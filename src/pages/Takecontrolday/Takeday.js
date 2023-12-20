import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon, MagnifyingGlassIcon, HashtagIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronRight, ShoppingCart, Check } from 'react-hero-icon/outline'

import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Plus, User } from 'react-hero-icon/outline';
import { FiUserPlus } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";




import { Combobox } from '@headlessui/react'


import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'


import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    ChartBarSquareIcon,
    NewspaperIcon,
    ChevronRightIcon,
    StarIcon,
    InboxIcon,
    PlusIcon,
    ArchiveBoxIcon,
    ChevronLeftIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ExclamationCircleIcon,
    AtSymbolIcon,
    FaceSmileIcon,
    CheckIcon,
    ArrowsRightLeftIcon,



} from '@heroicons/react/24/outline'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')

}


const navigation = [
    { name: 'Accomadation', href: '#' },
    { name: 'Flight', href: '#' },
    { name: 'Hotels', href: '#' },
    { name: 'Car Rental', href: '#' },
    { name: 'Airport Size', href: '#' },
]
const people = [
    { id: 1, name: 'Round Trip' },
    { id: 2, name: '1 Passenger' },
    { id: 3, name: 'Econnomy' },
    { id: 4, name: 'Round Trip' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]

export default function Deempathyzing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Features");
    const [showPassword, setShowPassword] = useState(false);
    const [query, setQuery] = useState('')

    const [selected, setSelected] = useState(people[3])
    const [selected1, setSelected1] = useState(people[1])
    const [selected2, setSelected2] = useState(people[2])
    const [value, setValue] = useState(50);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const activelink = (id) => {
        setactive(id)
    }
    const handleRangeChange = (e) => {
        setValue(e.target.value);
    };

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })



    return (
        <div className="h-screen  w-screen bg-[#f0f0f5]">
            <header className=" w-full mx-auto h-4/5 ">
                <nav className=" mx-auto flex w-full items-center h-full " aria-label="Global">
                    <div className="  h-full w-full object-cover  mx-auto bg-[#f0f0f5]  px-20 py-4 flex mt-10 ">
                        <div className='  h-full w-2/5 pl-14 mt-4 '>
                            <div className='py-2'>
                                <h1 className='text-3xl my-3 text-gray-800 font-medium px-2'>Take a control of a day</h1>
                            </div>
                            <div className='h-1 w-10 border-t-2 mx-3 border-[#5078a0]'>

                            </div>
                            <h2 className='text-lg  my-3 text-gray-800 px-2 py-4'>Get a Overview of what your day look like and <br /> conquer your to-dos one at the time</h2>
                            <div className='flex items-center my-3'>
                                <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600" /></div>
                                <div>Add and Priarized new task as they come to you</div>
                            </div>
                            <div className='flex items-center  my-3 py-4'>
                                <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600" /></div>
                                <div>Never forgotten important a headline</div>
                            </div>
                            <div className='flex items-center  my-3 '>
                                <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600" /></div>
                                <div>See your daily/month/week at aquick glance</div>
                            </div>

                        </div>
                        
                    <div role="list" className="w-1/2 h-[500px] mx-10 ">
                        <div className=" w-4/5 h-full  bg-[#ffffff] shadow-xl relative rounded-b-md  " >
                            <nav className='flex items-center w-full bg-[#5078a0] rounded-t-md h-[60px]'>
                                <div className='px-4'>
                                    <Bars3Icon className='w-5 h-5 text-gray-50' />

                                </div>

                                <div className='w-4/6 mx-1'>
                                    <form className="relative flex w-full py-2 h-14 " action="#" method="GET">
                                        <MagnifyingGlassIcon
                                            className="pointer-events-none absolute inset-y-0 left-3 top-0 h-full w-5 text-gray-50"
                                            aria-hidden="true"
                                        />
                                        <input
                                            id="search-field"
                                            className="block  w-full  h-5/6 mt-1 rounded-md   bg-[#7391af] pl-10  text-gray-900 placeholder:text-gray-400 sm:text-sm"

                                            type="search"
                                            name="search"
                                        />
                                    </form>

                                </div>

                                <div className='flex items-center mt-1 '>

                                    <div className='px-2'>
                                        <Plus className="w-5 h-5 text-gray-50" />
                                    </div>
                                    <div className='px-2'>

                                        <CiBellOn className='w-5 h-5  text-gray-50' />
                                    </div>
                                    <div className='px-1'>
                                        <div className="flex-shrink-0 relative ">
                                            <img
                                                className="w-7 h-7 object-cover shadow-inner rounded-full shadow-gray-50 "
                                                src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </nav>


                            <div className='px-5 bg-[#ffffff]'>
                                <div className='flex items-center border-b-2 py-4'>
                                    <h1 className='text-lg font-bold text-gray-700'>Today</h1>
                                    <h2 className='text-xs mt-1 mx-2'>Dec.11,2018</h2>
                                </div>

                                <div>
                                    <div className='flex items-center justify-between py-2 px-2 border-b-2'>
                                        <div className="flex h-6 items-center  ">
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="h-5 w-5  rounded-full border-2 border-gray-300 appearance-none   text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <div className='px-4 text-sm' >Check in to Flight</div>
                                        </div>

                                        <div className='w-2 h-2 rounded-full bg-yellow-600  '>

                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between py-2 border-b-2 px-2'>
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="h-5 w-5  rounded-full border-2 border-gray-300 appearance-none   text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <div className='px-4 text-sm' >Confirm Car Rental</div>
                                        </div>

                                        <div className='w-2 h-2 rounded-full bg-yellow-600 '>

                                        </div>
                                    </div>
                                </div>

                                <div className='border-b-2'>

                                    <div className=''>
                                        <div className="mt-2 relative py-2 px-2">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                            />
                                            <div className='absolute right-24 top-4 border-l-2 px-2'>
                                                <h1 className='text-sm text-gray-400'>Schedule</h1>
                                            </div>
                                            <div className='absolute top-4 right-7  '>
                                                <FiUserPlus className='w-5 h-5  text-gray-400' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>

                                        <div className='flex py-2 px-2 '>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-[#5078a0] px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="rounded-md px-4 py-1 text-sm font-semibold text-gray-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>



                                        <div className='flex items-center py-2 px-2'>


                                            <div>
                                                <HashtagIcon className='w-6 h-6 text-gray-400 mx-2' />
                                            </div>

                                            <div>
                                                <CiFlag1 className='w-6 h-6 text-gray-400 mx-2' />

                                            </div>

                                            <div>
                                                <EllipsisHorizontalIcon className='w-6 h-6 text-gray-400 mx-2' />

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div className='flex items-center justify-between py-2 border-b-2 px-2'>
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="h-5 w-5  rounded-full border-2 border-gray-300 appearance-none   text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <div className='px-4 text-sm' >Reshedule dentist appoinment</div>
                                        </div>


                                    </div>
                                    <div className='flex items-center justify-between py-2 border-b-2 px-2'>
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="h-5 w-5  rounded-full border-2 border-gray-300 appearance-none   text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <div className='px-4 text-sm' >Call insurance company</div>
                                        </div>


                                    </div>
                                    <div className='flex items-center justify-between py-2 border-b-2 px-2'>
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="h-5 w-5  rounded-full border-2 border-gray-300 appearance-none   text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <div className='px-4 text-sm' >Water plants</div>


                                        </div>
                                        <div className='w-2 h-2 rounded-full bg-[#8c87f0] '>

                                        </div>


                                    </div>
                                </div>


                                <div className='flex items-center py-3 px-2'>

                                    <div>
                                        <Plus className="w-5 h-5 text-[#38638d] " />
                                    </div>
                                    <div className='mx-2 text-sm text-[#38638d] font-bold'>
                                        Add Task
                                    </div>

                                </div>



























                            </div>
                        </div>

                    </div>


                    </div>














































                </nav>




            </header>








        </div>

    )
}
