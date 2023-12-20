import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Label() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className="bg-white px-4 py-5 sm:px-6 h-44 w-2/6 rounded-lg shadow-2xl ">
      <div className="flex space-x-3 justify-normal">
        <div className=" ml-2">
          <img
            className="h-32 w-32 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="">
          <div>
            <h1 className="text-2xl text-gray-800 py-1">Eren Lindford</h1>
            <h2 className="text-lg text-indigo-700 py-1">Customer Support</h2>
            <p className="text-base text-gray-500 py-1">erenlindforn@example.com</p>
            <p className="text-base  text-gray-500 py-1">{`(555)-765-4321`}</p>
          </div>
        </div>
      
        
      </div>
    </div>
    </div>
  )
}
