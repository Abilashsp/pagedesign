import React from 'react'
import {
    PhotoIcon,
    VideoCameraIcon
} from '@heroicons/react/24/outline'

export default function Bar() {
  return (
    <div className='w-full h-20 bg-gray-100 px-4  sm:px-6 flex items-center  border-l-2 border-r-2 '>
    <div className='px-4 py-4 w-full '>
        <div className='px-4 w-full'>
            <div className="relative mt-2 rounded-md shadow-sm w-full">
                <input
                    type="text"
                    name="account-number"
                    id="account-number"
                    className="block w-full rounded-lg border-0  bg-gray-50 py-2 px-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Type your Message"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <VideoCameraIcon className="h-6 w-6 text-gray-600 mx-1" aria-hidden="true" />
                    <PhotoIcon className="h-6 w-6 text-gray-600 mx-1" aria-hidden="true" />

                </div>
            </div>
        </div>
    </div>

</div >
  )
}
