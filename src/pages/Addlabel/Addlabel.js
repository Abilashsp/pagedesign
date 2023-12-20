import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function abel() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className="bg-white h-36 w-3/12 rounded-lg shadow-2xl ">
      <div className="flex justify-start">
        <div className="">
          <img
            className="h-36 w-32 rounded-l-lg "
            src="\Images\10.jpg"
            alt=""
          />
        </div>


        <div className=" px-4 py-6">
            <h1 className="text-2xl text-planttittlecolor">Maple Planter</h1>
            <h2 className="text-lg text-gray-400">USD $29</h2>
            <p className="mt-3 flex text-green-700 "><p className="font-bold text-green-700">12</p><p className="ml-1 font-semibold">left in stocks</p></p>
        </div>
      </div>
    </div>
    </div>
  )
}
