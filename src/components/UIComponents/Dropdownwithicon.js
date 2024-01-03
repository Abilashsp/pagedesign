import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { RxDashboard } from "react-icons/rx";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdownwithicon() {
  return (
    <div>
    <div className='text-sm mb-1 text-gray-500'>View</div>
    <div className='flex '> 
        <div className='w-9 h-9 bg-[#f8f8f8] flex items-center justify-center rounded-l-md border'>
            <Bars3Icon className='w-5 h-5' />
        </div>
        <div className='w-9 h-9 bg-[#e6e6e6] flex items-center justify-center  rounded-r-md border'>
            <RxDashboard  className='w-5 h-5' />
        </div>
    </div>
</div>
  )
}
