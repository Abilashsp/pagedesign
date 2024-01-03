import React from 'react'
import {
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline'

export default function Oops() {
  return (
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
  )
}
