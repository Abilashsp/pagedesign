import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'


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
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
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
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);
    const notificationMethods = [
        { id: 'email', title: 'Email' },
        { id: 'sms', title: 'Phone (SMS)' },
        { id: 'push', title: 'Push notification' },
    ]

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
            <div className='w-4/6  h-full flex '>
                <div className=" mx-auto w-full bg-white h-4/5 flex">
                    <div className="h-full ">
                        <div className="hidden  lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-full">
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#2364a0] px-6 pb-4">
                                <div className="flex items-center justify-between ">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left text-gray-900   focus:outline-none  0 sm:text-xl sm:leading-6">
                                                            <span className="block truncate font-bold text-gray-50">Bowen Group</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>
                                                        <div className="flex items-center ">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full ml-5 "></div>
                                                            <div className=" mx-2 text-gray-200 text-sm">{selected.name}</div>
                                                        </div>
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
                                    <div className="relative">
                                        <BellIcon className="w-6 h-6 text-gray-200" />
                                        <span className="w-3 h-3 bg-gray-100 rounded-full absolute top-0 right-0 flex items-center justify-center">
                                            <span className="w-3/5 h-3/5 bg-red-500 rounded-full "></span>
                                        </span>
                                    </div>
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-100 hover:text-white hover:bg-gray-800',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                            )}
                                                        >
                                                            <item.icon className="h-6 w-6 shrink-0 text-gray-300" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="text-gray-50 font-medium my-2 ">
                                                <h1 className="tracking-wide">CHANNELS</h1>
                                            </div>
                                            <ul role="list" className="-mx-1 space-y-1">
                                                {Channels.map((item) => (
                                                    <li key={item.name} className='relative'>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-[#19466e] text-gray-300'
                                                                    : 'text-gray-300 hover:text-white hover:bg-[#19466e]',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                            )}
                                                        >

                                                            {item.name}
                                                        </a>
                                                        {item.name==="Design"&& <div className="w-7 h-5 rounded-2xl bg-[#6ed7d2] flex items-center text-sm font-medium justify-center text-[#19645a] absolute right-2 top-2">4</div>}
                                                       
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <div className="flex items-center">
                                            <div>
                                                <PlusIcon className="w-5 h-5 text-gray-50" />
                                            </div>
                                            <div className="text-gray-50 mx-2 text-base">
                                                New Channel
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                                < ArchiveBoxIcon className="w-5 h-5 text-gray-50" />
                                            </div>
                                            <div className="text-gray-50 mx-2 font-semibold text-base">
                                                Archive Channel
                                            </div>
                                        </div>


                                    </ul>


                                </nav>
                            </div>
                        </div>


                    </div>



                    {/* Main */}
                    <div className='w-full'>
                        <div className="flex items-center justify-between  w-full ">

                            <div className='px-4 py-4'>
                                <h1 className="text-lg font-bold text-gray-800">Design</h1>

                            </div>
                            <div className='flex px-4 py-4'>
                                <div className="text-gray-400 w-6 h-6 mx-2 ">
                                    <MagnifyingGlassIcon />
                                </div>
                                <div className="text-gray-400  mx-2 w-6 h-6">
                                    < ArrowLeftIcon />
                                </div>
                                <div className="text-gray-400  mx-2  w-6 h-6">
                                    <ArrowRightIcon />
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center w-full  px-6 py-3 bg-yellow-50">

                            <div classame="">
                                <div className="w-10 h-10 rounded-full bg-yellow-200 items-center flex justify-center ">
                                    <ExclamationCircleIcon className="w-7 h-7 text-yellow-800 bg-white rounded-full" />
                                </div>

                            </div>

                            <div className='mx-4'>
                                <h1 className="text-yellow-900 font-bold text-base">Oops!</h1>
                                <h3 className="text-yellow-600 text-sm">Sorry, there seems to be a problem with your connection</h3>
                            </div>
                        </div>
                        <div className='px-20 py-1'>
                            <h2 className="text-gray-600">the notes you made?</h2>
                        </div>


                        <div>
                            <div className="bg-white px-4 py-5 sm:px-6">
                                {messages.map((e) => (
                                    <div className="flex space-x-3 px-1 py-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={e.image}
                                                alt=""
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center">
                                                <div className="text-base font-semibold text-gray-900">
                                                    <a href="#" className="hover:underline">
                                                        {e.Name}
                                                    </a>
                                                </div>
                                                <div className="text-xs font-semibold text-gray-500 mx-2 mt-1">
                                                    <a href="#" className="hover:underline">
                                                        {`${e.time} PM`}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="text-base text-gray-500">
                                                {e.m ? <div className=""><span className="text-blue-600 font-semibold mr-1">{e.m}</span>
                                                <span>{e.Mesg}</span>
                                                </div> : <div>{e.Mesg}</div>}
                                            </div>


                                        </div>
                                    </div>

                                ))}
                            </div>

                        </div>
                        <div className='px-4 py-4'>
                            <div className='px-4 '>

                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="account-number"
                                        id="account-number"
                                        className="block w-full rounded-lg border-0  bg-gray-100 py-3 px-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Type your Message"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AtSymbolIcon className="h-6 w-6 text-gray-400 mx-1" aria-hidden="true" />
                                        < FaceSmileIcon className="h-6 w-6 text-gray-400 mx-1" aria-hidden="true" />

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
