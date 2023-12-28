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
import Bowenav from './Bowenav'
import Header from "./Header"
import Oops from './Oops'
import Chats from './Chats'
import Chatbox from './Chatbox'

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

    const properties = { selected: selected, navigation: navigation, Channels: Channels, setSelected: setSelected }

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="w-screen h-screen overflow-hidde">
            <div className='w-4/6  h-full flex '>
                <div className=" mx-auto w-full bg-white h-4/5 flex">
                    <div className="h-full ">
                        <Bowenav properties={properties} />
                    </div>
                    <div className='w-full'>
                        <Header />
                        <Oops />
                        <div className='px-20 py-1'>
                            <h2 className="text-gray-600">the notes you made?</h2>
                        </div>
                        <div>
                           <Chats messages={messages}/>

                        </div>
                        <div className='px-4 py-4'>
                            <Chatbox/>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}
