import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/20/solid'

export default function Navbar() {
  return (
    <header className="bg-white w-full mx-auto h-20 ">
    <nav className="mx-auto flex w-full items-center justify-between  lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">


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
        <div className="hidden lg:flex lg:gap-x-12 ">

        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end  justify-between items-center">

            <form className="relative flex w-2/6 py-4 h-20 " action="#" method="GET">

                <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-4 top-1 h-full w-5 text-gray-400"
                    aria-hidden="true"
                />
                <input
                    id="search-field"
                    className="block  w-full border-2 h-5/6 mt-2 rounded-3xl    bg-gray-50 pl-10  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder='Search'
                    type="search"
                    name="search"
                />
            </form>
            <div className="mx-4 mt-2">
                <img className="h-10 w-10 rounded-full " src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className='relative mt-2'>
                <div className='absolute inset-y-0 left-3 top-2'>
                    <PencilSquareIcon className='w-5 h-5 text-white  ' />
                </div>
                <button
                    type="button"
                    className="rounded-3xl bg-[#419bbe] px-4 pl-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    New Post
                </button>
            </div>
        </div>
    </nav>
</header>
  )
}
