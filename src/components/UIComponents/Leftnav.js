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
    { id: 1, name: 'San Serif' },
    { id: 2, name: 'All Language' },
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
    { name: 'Classification', href: '#', icon: InboxIcon, current: false },
    { name: 'Languages', href: '#', icon: StarIcon, current: false },

]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [Channels,setChannels] = useState([
        { name: 'Number of styles', href: '#', current: false,value:"10+" },
        { name: 'Thinkness', href: '#', current: false,value:" " },
        { name: 'Slant', href: '#', current: false,value:" " },
        { name: 'Width', href: '#', current: false,value:" " },
    ])
    const [selected, setSelected] = useState(people[0])
    const [selected1, setSelected1] = useState(people[1])
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);
    const notificationMethods = [
        { id: 'email', title: 'Email' },
        { id: 'sms', title: 'Phone (SMS)' },
        { id: 'push', title: 'Push notification' },
    ]

    const handleCheckboxChange = (index) => {
        const updatedChannels = [...Channels];
        updatedChannels[index].current = !updatedChannels[index].current;
        setChannels(updatedChannels);
        console.log(Channels)
    };

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (

            <div className='w-4/6  h-full flex '>
                <div className="h-full ">
                    <div className="hidden  lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-full">
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto  bg-[#fafafa] ">
                            <div className=" w-full border-l-2 h-full ">
                                <div className="w-full px-5  py-2  bg-[#ffffff]  shadow-md shadow-gray-200 ">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative  ">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full   px-4  bg-[#ffffff] py-4 pl-10 text-gray-900  placeholder:text-gray-700  placeholder:font-medium focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </div>
                                <div className='px-6  '> 
                                <div className='w-full'>
                                    {navigation.map((drop,index) => (
                                        <div className=" w-full my-6">
                                            <Listbox value={selected} onChange={setSelected}  >
                                                {({ open }) => (
                                                    <>
                                                        <Listbox.Label className="block text-sm font-medium text-gray-600">{drop.name}</Listbox.Label>
                                                        <div className="relative mt-2 w-full">
                                                            <Listbox.Button className="relative w-full cursor-default rounded-md py-2 pl-3 pr-10 text-left text-gray-900 shadow-inner  bg-[#f7f7f7] shadow-gray-200 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                                <span className="block truncate font-medium text-gray-500">{index==0?(<span>{selected.name}</span>):(<span>{selected1.name}</span>)}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronDownIcon className="h-5 w-5 text-gray-800" aria-hidden="true" />
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


                                    ))}
                                </div>
                                <div >
                                    {Channels.map((cr,index)=>(
                                         <div className="space-y-2 py-3">
                                         <div className='text-sm font-medium text-gray-600'>{cr.name}</div>
                                         <legend className="sr-only">Notifications</legend>
                                         <div className="relative flex items-center">
                                             <div className="flex h-6 items-center">
                                                 <input
                                                     id="comments"
                                                     aria-describedby="comments-description"
                                                     name="comments"
                                                     type="checkbox"
                                                     onChange={()=>handleCheckboxChange(index)}
                                                 checked={cr.current}
                                                     className="h-5 w-5 mt-1  appearance-none border-2 rounded focus:ring-indigo-600"
                                                 />
                                             </div>
                                             <div className="ml-3 text-sm leading-6 w-4/6">
                                                {cr.current===true?  (  <input id="disabled-range" type="range" value="50" className={`w-full h-1 bg-gray-200 rounded-lg   cursor-pointer dark:bg-gray-700   `}  />):
                                                  (<input id="disabled-range" type="range" value="50" className={`w-full h-1 bg-gray-200 rounded-lg  cursor-pointer dark:bg-gray-700  appearance-none  `} disabled />)
                                    }
                                             </div>
                                             <div className='px-2 text-sm font text-gray-600 mt-1 '>{cr.value}</div>
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




    )
}
