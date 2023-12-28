import React from 'react'
import { ChevronDownIcon, ChevronUpIcon,ChevronRightIcon,Bars3Icon } from '@heroicons/react/20/solid'

export default function Licensecard() {
  return (
    <nav className=" px-8 py-8 mx-auto flex w-full items-center h-20  p-3 lg:px-8" aria-label="Global">
    <div className="absolute inset-0 -z-10  h-1/2 w-full object-cover my-32 ">
        <div className=' bg-[#1e3c5f] px-12 py-12'>
            <h1 className='text-3xl my-3 text-gray-50 font-medium'>Special offer for existing <br/> customers</h1>
            <h2 className='text-lg  my-3 text-[#9aeaf4]'>Already a Customer? you can  renew or extend <br/>your license for less.</h2>
        <div className='flex items-center text-gray-50 my-3'>
            <h3>Learn about other ways to renew your license </h3>
            <ChevronRightIcon className='w-3 h-3 mx-2'/>
            </div>
        </div>
      
    </div>

    <div className="flex lg:hidden">
        <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
        >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
    </div>

  
</nav>
  )
}
