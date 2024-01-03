import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Heartrate() {
  return (
    <div className='w-full h-screen '>
    <div className="bg-white h-48 w-3/12 rounded-lg shadow-2xl ">
      <div className="flex justify-start">
        <div className="flex  ">
          <img
            className="h-16 ml-4 mt-5 w-full rounded-l-lg "
            src="/Images/13.svg"
            alt=""
          />
        </div>
        <div className="mt-5 ml-6 ">
         <div>
            <h1 className="text-base font-semibold text-gray-500">HEART RATE</h1>
            <h2 className=" flex "><p className="text-4xl font-bold text-gray-900">82 </p><p className='text-base font-bold ml-1 text-gray-900 mt-4'>BPM</p></h2>
         </div>
        </div>
      </div>
      <div className="flex mt-6 h-2/5 bg-gray-100 rounded-b-lg ">
          <img
            className="h-20 w-full rounded-b-lg "
            src="/Images/12.png"
            alt=""
          />
        </div>
    </div>
    </div>
  )
}
