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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const activelink = (id) => {
        setactive(id)
    }
   
    const filteredPeople =
    query === ''
        ? []
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase())
        })



    return (
        <div className="min-h-screen  w-screen">
            <header className=" w-full mx-auto h-1/2 ">
                <nav className="mx-auto flex w-full items-center h-20  p-3 lg:px-8" aria-label="Global">
                    <div className="">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            alt=""
                            className="absolute inset-0 -z-10  h-1/2 w-full object-cover"
                        />
                    </div>
                    <div className="flex lg:flex-1 items-center mx-6 ">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-12 w-auto" src="\Images\41.png" alt="" />
                        </a>
                        <div className="hidden lg:flex lg:gap-x-12 mx-7 ">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} onClick={() => activelink(item.name)} className={` font-bold ${active === item.name ? "text-blue-700 text-lg font-semibold leading-6" : "text-lg font-semibold leading-6 text-gray-50 "} `}>
                                    {item.name}
                                </a>
                            ))}
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

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                        <div className="mx-4">
                            <div className='text-lg font-semibold text-gray-50'>Trips</div>
                        </div>
                        <div className="mx-4">
                            <div className='text-lg font-semibold text-gray-50'>Sign Up</div>
                        </div>

                    </div>
                </nav>

                <div className='items-center text-gray-50 flex justify-center mt-20'>
<h1 className='text-4xl font-semibold'> 
    Where do you want to go?
</h1>
                </div>
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-[650px]">
                    <div className=" pt-3 pb-6  px-3 shadow-md shadow-gray-400  bg-white rounded-md border-4 border-gray-100 ">

                       
                            <div className="">
                                <div className="flex">
                                    <div className="flex  shrink-0 items-center mx-1">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left  text-gray-900   focus:outline-none  0 sm:text-sm sm:leading-6">
                                                            <span className="block truncate font-medium text-gray-600">{selected.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {people.map((person) => (
                                                                    <Listbox.Option
                                                                        key={person.id}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                                'relative cursor-default select-none py-2 pl-8 pr-4'
                                                                            )
                                                                        }
                                                                        value={person}
                                                                    >
                                                                        {({ selected, active }) => (
                                                                            <>
                                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                    {person.name}
                                                                                </span>

                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active ? 'text-white' : 'text-indigo-600',
                                                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>

                                    </div>
                                    <div className="flex  shrink-0 items-center mx-1">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left  text-gray-900   focus:outline-none  0 sm:text-sm sm:leading-6">
                                                            <span className="block truncate font-medium text-gray-600">{selected1.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {people.map((person) => (
                                                                    <Listbox.Option
                                                                        key={person.id}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                                'relative cursor-default select-none py-2 pl-8 pr-4'
                                                                            )
                                                                        }
                                                                        value={person}
                                                                    >
                                                                        {({ selected, active }) => (
                                                                            <>
                                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                    {person.name}
                                                                                </span>

                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active ? 'text-white' : 'text-indigo-600',
                                                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>

                                    </div>
                                    <div className="flex  shrink-0 items-center mx-1">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left  text-gray-900   focus:outline-none  0 sm:text-sm sm:leading-6">
                                                            <span className="block truncate font-medium text-gray-600">{selected2.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {people.map((person) => (
                                                                    <Listbox.Option
                                                                        key={person.id}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                                'relative cursor-default select-none py-2 pl-8 pr-4'
                                                                            )
                                                                        }
                                                                        value={person}
                                                                    >
                                                                        {({ selected, active }) => (
                                                                            <>
                                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                    {person.name}
                                                                                </span>

                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active ? 'text-white' : 'text-indigo-600',
                                                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>

                                    </div>
                                </div>
                                <div className="flex items-center relative">
                                    <div className="flex  items-center ">
                                        <div className=" mx-4">
                                            <div className=" relative mt-2 ">
                                                <HiMapPin className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="text"
                                                    autoComplete="current-password"
                                                    value="Toronto"
                                                    required
                                                    className="pl-9 pr-6 py-3 w-full bg-gray-200  border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className=" relative mt-2">
                                         
                                            <HiMapPin className="text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                    id="password"
                                                    name="password"
                                                    type="text"
                                                    autoComplete="current-password"
                                                    value="Rome"
                                                    required
                                                    className="pl-9 pr-6 py-3   w-full bg-customcolor1  border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <button
                                            type="button"
                                            className="rounded-md bg-yellow-400 px-10 py-4 mt-2 text-sm font-semibold text-yellow-900 shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Search
                                        </button>
                                    </div>
                                    <div className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center absolute top-4 left-56   ">
                                            < ArrowsRightLeftIcon className="w-6 h-6 text-gray-400  " />
                                        </div>
                                </div>



                                <div>

                                </div>
                            </div>

                 


                    </div>
               

                </div>
            </header>








        </div>

    )
}
