import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Gridwithtoggle from "../Gridwithtoggle"
import Leftnav from "../Leftnav"
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdDashboard } from 'react-icons/md'
import { RxDashboard } from "react-icons/rx";
import Dropdownwithicon from './Dropdownwithicon'
import Navbar from './Navbar'
import MainLGsidenav from './MainLGsidenav'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


















export default function Deempathyzing() {
    

    return (
        <div className='h-screen flex  '>
            <div className='w-full  '>
                <header className="bg-white w-full shadow-md shadow-gray-400 pu " >
                <Navbar/>
                   
                </header>

                <div className='bg-[#f5f5f5] shadow-inner shadow-gray-200' >
                    <div className='flex justify-end items-center px-8 py-4 border-b-2 border-gray-200'>
                        <MainLGsidenav/>
                       <Dropdownwithicon/>

                    </div>
                    <Gridwithtoggle />
                </div>
            </div>
            <div className=''>
                <Leftnav />
            </div>
        </div>
    )
}
