import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CheckIcon } from '@heroicons/react/20/solid'
import Flightbookui from '../Flightbookui';
import Steps from './Steps';
import Navbar from './StepsUInav'; 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
    <div className="bg-slate-300 w-3/5   h-screen ">
       <Navbar/>
      <div className='flex justify-evenly'>
        <div className="mt-10  ml-5">
        <Steps/>
        </div>
        <div className='mt-14'>
        <Flightbookui/>
        </div>
      </div>
    </div>
  )
}
