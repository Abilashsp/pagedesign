import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { CiHeart } from "react-icons/ci";

const highlights = ["Non-smoking luxury hotel",
    "Newly renovated suite",
    "Nearby amenities",
    "Heated indoor pool",
    "Complimentary wifi internet service",
    "Electric car charging station on-site"
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);

    const activelink = (id) => {
        setactive(id)
    }
    console.log(active)

    return (
        <div className="min-h-screen bg-white ">
            <div className='w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12  flex items-center h-4/5'>
                <div className="w-4/5 bg-white px-6 py-6 mt-4">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-2xl tracking-widest">UNBANFAIR</h1>
                        </div>
                        <div className="flex items-center space-x-3">
                            <select
                                className="max-w-full rounded-md px-2 py-1.5 text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none sm:text-sm"
                            >
                                <option value={1}>Shop</option>
                                <option value={2}>Sell</option>
                            </select>

                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="text-xs font-semibold text-gray-500 my-2">3 items</div>
                        <div className="flex justify-between border-b-2 border-t-2">
                            <div className="flex items-center">
                                <div className='px-2 py-2'>
                                    <img
                                        className="h-16 w-16 rounded-lg border shadow-md"
                                        src="\Images\18.png"
                                        alt=""
                                    />
                                </div>
                                <div className="mx-2 px-2 py-2">
                                    <h1 className="text-sm text-gray-800 font-bold">Elonchair</h1>
                                    <h2 className="text-xs text-gray-500 py-1">Arm Chair</h2>
                                    <h3 className="text-xs text-gray-500"> Yellow</h3>
                                </div>
                            </div>
                            <div className="mx-2 px-2 py-2">
                                <div className="text-base font-bold text-gray-800">$450.00</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full">
                        <div className="w-full sm:w-5/6 mb-2 sm:mb-0">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="block w-full ml-2 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Discount Code"
                            />
                        </div>
                        <div className="w-full sm:w-1/6 mx-3">
                            <button
                                type="button"
                                className="rounded-md bg-gray-300 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 w-full sm:w-auto"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="border-b-2 border-t-2 my-6">
                        <div className="flex justify-between px-2 py-2">
                            <h1 className="text-xs text-gray-500 font-semibold">Subtotal</h1>
                            <div className="text-base font-bold text-gray-800">$429.00</div>
                        </div>
                        <div className="flex justify-between px-2 py-2">
                            <h1 className="text-xs text-gray-500 font-semibold">Taxes</h1>
                            <div className="text-base font-bold text-gray-800">$55.77</div>
                        </div>
                    </div>

                    <div className='my-6'>
                        <div className="flex justify-between px-2 py-2">
                            <h1 className="text-base text-gray-500 font-semibold">Total</h1>
                            <div className="flex items-center">
                                <div className="text-xs mt-2 px-1 text-gray-500">CAD</div>
                                <div className="text-lg font-bold text-gray-800">$484.77</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
