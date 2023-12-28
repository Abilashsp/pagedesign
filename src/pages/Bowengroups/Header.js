import React from 'react'
import {
    ArrowLeftIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Header() {
  return (
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
  )
}
