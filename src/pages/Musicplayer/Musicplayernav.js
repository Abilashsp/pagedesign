import React from 'react'
import { Fragment, useState } from 'react'
export default function Musicplayernav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <nav className="mx-auto w-[500px] flex items-center justify-between lg:px-8" aria-label="Global">
    <div className="lg:hidden">
        <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 focus:outline-none"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </div>
    <div className="mx-4">
        <img className="h-14 w-14" src="\Images\21.png" alt="" />
    </div>
    <div className="hidden lg:flex items-center  mx-auto">
        <h1 className="mx-2 text-gray-500">Browse</h1>
        <h1 className="mx-2 text-gray-500">Library</h1>

    </div>
    <div className="hidden lg:flex items-center">

        <button className="text-gray-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </button>
    </div>
    {mobileMenuOpen && (
        <div className="lg:hidden absolute top-0 right-0 left-0 bg-white mt-16 z-50 p-4">
            <h1 className="mx-2 text-gray-500">Browse</h1>
            <h1 className="mx-2 text-gray-500">Library</h1>
        </div>
    )}
</nav>
  )
}
