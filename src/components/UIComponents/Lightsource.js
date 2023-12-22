import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { CiHeart } from "react-icons/ci";


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
    FaceSmileIcon


} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'For Sale' },
    { id: 4, name: 'For Sale' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]
const people1 = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'For Sale' },
    { id: 4, name: 'Residential' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]
const info = [
    {
        imageurl: "/Images/11.jpg", name: "Detached House", price: "$6,80,000", Address: "528 Dalgas Street", old: "5",

    },
    {
        imageurl: "/Images/38.jpg", name: "ModernHouse", price: "$8,00,000", Address: "78 John Street", old: "1",

    },
    {
        imageurl: "/Images/39.jpg", name: "Vintage House", price: "$12,89,000", Address: "67 Harry potter Street", old: "8",

    },
    {
        imageurl: "/Images/40.jpg", name: "Royal House", price: "$3,80,000", Address: "01 Hulk Street", old: "7",

    },

]


const messages = [
    {
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", Name: "Sara Porter", time: "12:48", Mesg: "No problem! They are a bit messy at the moment.I'm just going to tidy them up a bit.i'll upload them shortly", m: ""
    },
    {
        image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", Name: "Samantha Ramos", time: "12:52", Mesg: "Did anyone take a photo of the drawing we made on the whiteboard? I'd like made a high fidelity version of that concept", m: ""
    },
    {
        image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", Name: "Tiffany Myres", time: "12:51", Mesg: "yep!i put a few photoss in the shared folder. Let me know if you have any questions:)", m: "@samantharamos"
    }
]


const navigation = [
    { name: 'Inbox', href: '#', icon: InboxIcon, current: false },
    { name: 'Starred', href: '#', icon: StarIcon, current: false },

]
const Channels = [
    { name: 'Design', href: '#', current: true },
    { name: 'Engineering', href: '#', current: false },
    { name: 'Marketing', href: '#', current: false },
    { name: 'Support', href: '#', current: false },
    { name: 'Sales', href: '#', current: false },

]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selected, setSelected] = useState(people[3])
    const [selected1, setSelected1] = useState(people1[3])
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);
    const notificationMethods = [
        { id: 'email', title: 'Email' },
        { id: 'sms', title: 'Phone (SMS)' },
        { id: 'push', title: 'Push notification' },
    ]
    const [value, setValue] = useState(500000);
    const activelink = (id) => {
        setactive(id)
    }
    console.log(active)

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className='w-4/6 mx-auto h-full flex items-center'>
                <div className="  mx-auto w-full bg-white h-5/6 flex">
                    <div className="h-full  ">
                        <div className="hidden  lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-full">
                            <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-[#323c4b]  ">
                                <div className="  px-4  py-4 ">
                                    <div className=" h-16 shrink-0 w-full   py-4 ">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="block text-base font-medium leading-6 text-gray-400">Transaction Type</Listbox.Label>
                                                    <div className="relative mt-2 ">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-[#555a69] py-2 pl-3 pr-10 text-left text-gray-900 shadow-md shadow-gray-800   sm:text-sm sm:leading-6">
                                                            <span className="block truncate text-gray-50 text-base ">{selected.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-6 w-6 text-gray-50" aria-hidden="true" />
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
                                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
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
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
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
                                    <div className=" h-16 shrink-0 w-full mt-10 mb-4  py-4 ">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="block text-base font-medium leading-6 text-gray-400">Property Type</Listbox.Label>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-[#555a69] py-2 pl-3 pr-10 text-left text-gray-900 shadow-md shadow-gray-800  sm:text-sm sm:leading-6">
                                                            <span className="block truncate text-gray-50 text-base">{selected1.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-6 w-6 text-gray-50 " aria-hidden="true" />
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
                                                                {people1.map((person) => (
                                                                    <Listbox.Option
                                                                        key={person.id}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
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
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
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

                                <div className='h-1 mt-2'>
                                    <div className=' w-full shadow-sm h-1/2  shadow-[#404558] '>
                                        <div className='bg-[#222736] shadow-inner w-full h-full border-b border-gray-600 shadow-[#0f121a] '></div>

                                    </div>
                                </div>







                                <div className=" w-full px-3">
                                    <h1 className="block text-lg font-medium leading-6 text-gray-400 py-4 ml-2 mb-2">Price Range</h1>

                                    <div className=" w-full  h-1.5 flex items-center shadow-md  shadow-[#404558]  ">
                                        <input
                                            type="range"
                                            id="priceRange"
                                            name="priceRange"
                                            min={500000}
                                            max={1500000}
                                            value={value}
                                            onChange={(e) => setValue(Number(e.target.value))}
                                            className="slider bg-[#222736] appearance-none shadow-inner border-b-2 border-gray-600  shadow-[#0f121a]   h-2 rounded-full w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-around items-center text-gray-200 py-3 text-lg font-medium">
                                    <div>$5,00,000</div>
                                    <div>$15,00,000</div>
                                </div>




                                <div className='h-1'>
                                    <div className=' w-full shadow-sm h-1/2  shadow-[#404558] '>
                                        <div className='bg-[#222736] shadow-inner w-full h-full border-b border-gray-600 shadow-[#0f121a] '></div>

                                    </div>
                                </div>


                                <div className='px-4 py-4'>
                                    <h1 className="block text-lg font-medium leading-6 text-gray-400">Features</h1>

                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                        <div className="flex h-7 items-center shadow-md shadow-gray-600 rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#222736]  shadow-inner   shadow-[#0f121a] text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="block text-lg font-medium leading-6 text-gray-200">
                                                    Balcony
                                                </label>

                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                        <div className="flex h-7 items-center shadow-md  shadow-[#404558] rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#222736]  shadow-inner  shadow-[#0f121a]  text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="candidates" className="block text-lg font-medium leading-6 text-gray-200">

                                                    Central Air
                                                </label>

                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3 ">
                                        <div className="flex h-7 items-center shadow-md shadow-gray-600 rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#222736]  shadow-inner  shadow-[#0f121a]  text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="offers" className="block text-lg font-medium leading-6 text-gray-200">
                                                    Pool
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>



                    {/* Main */}
                    <div className='w-full overflow-y-auto bg-gray-300 '>
                        <div class="  w-4/5  mt-3 ">
                            <div className='  w-full items-center  p-3 '>
                                {info.map((e) => (
                                    <div className="mt-2 bg-white border rounded-lg shadow-lg shadow-gray-500">
                                        <div className="relative  ">
                                            <CiHeart className={`absolute right-1 top-1 w-8 h-8  text-white ${active ? "" : " "}`} />
                                            <img
                                                className="h-60 w-full rounded-t-lg  "
                                                src={e.imageurl}
                                                alt=""
                                            />
                                        </div>

                                        <div class="">
                                            <div className="px-4 py-4">
                                                <h1 className="text-lg  font-bold text-gray-500 py-1">
                                                    {`${e.name}-${e.old}y old`}
                                                </h1>
                                                <h3 className='text-3xl font-semibold text-gray-700 py-1'>
                                                    {e.price}
                                                </h3>
                                                <h1 className="text-base text-gray-500 py-1">
                                                    {e.Address}
                                                </h1>
                                            </div>



                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>






















                    </div>


                </div>
            </div>

        </div>


    )
}
