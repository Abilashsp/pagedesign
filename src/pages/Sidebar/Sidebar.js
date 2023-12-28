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
import Flightbookui from '../Flightbookui/Flightbookui';
import Steps from './Steps';
import Navbar from './Navbar';


const steps = [
  { name: 'Your itinerary', description: '', href: '#', status: 'current' },
  {
    name: 'Cabin Selection',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: '',
  },
  { name: 'Passenger Details', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
  { name: 'Order Confirmation', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Completion', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Flight', href: '#' },
  { name: 'Hotels', href: '#' },
  { name: 'Vechiles', href: '#' },
  { name: 'Deals', href: '#' },
  { name: 'More', href: '#' },
]

export default function Sidebar() {
  return (
    <div className="bg-slate-300 w-3/5   h-screen ">
       <Navbar navigation={navigation}/>
      <div className='flex justify-evenly'>
        <div className="mt-10  ml-5">
       <Steps steps={steps}/>
        </div>
        <div className='mt-14'>
          <Flightbookui/>
        </div>
      </div>
    </div>
  )
}
