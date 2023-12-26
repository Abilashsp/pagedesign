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
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

import { BellIcon } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { HiMapPin } from "react-icons/hi2";


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
        <div className="min-h-screen  w-screen">
            <header className=" w-full mx-auto h-1/2 ">
                <nav className=" px-8 py-8 mx-auto flex w-full items-center h-20  p-3 lg:px-8" aria-label="Global">
                    <div className="absolute inset-0 -z-10  h-1/2 w-full object-cover my-32 ">

                        <div className=' bg-[#1e3c5f] px-12 py-12'>
                            <h1 className='text-3xl my-3 text-gray-50 font-medium'>Special offer for existing <br/> customers</h1>
                            <h2 className='text-lg  my-3 text-[#9aeaf4]'>Already a Customer? you can  renew or extend <br/>your license for less.</h2>
                        <div className='flex items-center text-gray-50 my-3'>
                            <h3>Learn about other ways to renew your license </h3>
                            <ChevronRightIcon className='w-3 h-3 mx-2'/>
                            </div>
                        </div>
                      
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

                  
                </nav>
                <header className=" w-full mx-auto h-1/2 ml-40  ">
                <div className=" sm:mx-auto sm:w-full sm:max-w-[400px]  ">
                    <div className=" pt-3 pb-6  px-3  shadow-md shadow-gray-400  bg-white rounded-md  border-gray-100 ">
                        <div className="">
                            <div>
                                <div className='flex items-center px-8'>
                                    <div>
                                        <a href="#" className="">
                                            <span className="sr-only">Your Company</span>
                                            <img className="h-12 w-auto" src="\Images\42.png" alt="" />
                                        </a>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='text-lg font-semibold text-gray-700'>Renew your license</h1>

                                    </div>

                                </div>
                                <div className='text-gray-600 my-2 px-7'>
                                    You currently have <span className='font-semibold text-gray-900'> 2 </span>seats with your license
                                </div>
                            </div>

                        </div>
                        <div className=' bg-gray-100  shadow-inner shadow-gray-300 '>
                            <div className=' w-5/6 mx-auto  py-4 flex justify-between border-b items-center'>
                                <h1 className='text-base font-medium text-gray-700 '>LICENSE VOLUME</h1>
                                <div className='w-20 h-8 bg-gray-50 flex justify-center items-center rounded-md shadow-inner shadow-slate-200'>
                                    <span>4</span>
                                </div>
                            </div>
                            <div className=' py-8 flex  border-b-2'>
                                <div className="w-5/6 mx-auto  h-1.5 flex items-center justify-center   ">
                                    <input
                                        type="range"
                                        id="priceRange"
                                        name="priceRange"
                                        min={500000}
                                        max={1500000}
                                        value={value}
                                        onChange={(e) => setValue(Number(e.target.value))}
                                        className="slider  appearance-none  h-2 rounded-full w-full bg-gray-300"
                                    />
                                </div>
                            </div>

                            <div className=' w-5/6 mx-auto  py-4 flex justify-between border-b items-center'>
                                <h1 className='text-4xl font-medium text-gray-700 '>$196</h1>
                                <div className=' mx-3 flex justify-center items-center text-sm text-gray-500  '>
                                    <span></span>This price only available to existing customers
                                </div>
                            </div>

                        </div>
                        <div className='w-full flex justify-center items-center mt-4'>
                            <button
                                type="button"
                                className="rounded-md bg-[#46b4e1] px-8 mx-auto py-3 w-full text-sm  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                REVIEW LICENSE
                            </button>
                        </div>


                    </div>


                </div>
            </header>


            
               
            </header>








        </div>

    )
}
