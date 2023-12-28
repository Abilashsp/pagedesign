import React from 'react'
import {
    AtSymbolIcon,
    FaceSmileIcon
} from '@heroicons/react/24/outline'

export default function Chatbox() {
  return (
    <div className='px-4 '>

    <div className="relative mt-2 rounded-md shadow-sm">
        <input
            type="text"
            name="account-number"
            id="account-number"
            className="block w-full rounded-lg border-0  bg-gray-100 py-3 px-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Type your Message"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <AtSymbolIcon className="h-6 w-6 text-gray-400 mx-1" aria-hidden="true" />
            < FaceSmileIcon className="h-6 w-6 text-gray-400 mx-1" aria-hidden="true" />

        </div>
    </div>
</div>
  )
}
