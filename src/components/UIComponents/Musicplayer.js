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
const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Documentation', href: '#' },

]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const musics = [

    { date: "November 7,2018", eps: "Ep.100:Alan Rogers", Duration: "24:15" },
    { date: "October 31,2018", eps: "Ep.99:Kenneth Brown", Duration: "23:04" },
    { date: "October 24,2018", eps: "Ep.98:Sandra Robinson", Duration: "19:20" },
    { date: "October 17,2018", eps: "Ep.97:Hannah Elizabeth", Duration: "23:09" },
    { date: "October 10,2018", eps: "Ep.96:ANtony Jordan", Duration: "22:16" },
    { date: "October 3,2018", eps: "Ep.95:Whitebey Barns", Duration: "22:16" },
    { date: "October 1,2018", eps: "Ep.94:Alan Rogers", Duration: "24:15" },
]



export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);

    const activelink = (id) => {
        setactive(id)
    }
    console.log(active)

    return (
        <div className=" w-screen bg-gray-200  ">
            <div className='w-full bg-white'>
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
            </div>


            <div className='w-full mx-auto h-full '>


                <div className='w-screen h-56 relative isolate overflow-hidden '>
                    <div className="">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            alt=""
                            className="absolute inset-0 -z-10 blur-lg h-full w-full object-cover"
                        />
                    </div>
                    <div className='w-full h-full '>

                        <div className=" mx-auto w-1/5 h-full flex items-center  ">

                            <div className="h-16 w-16 bg-white flex justify-center items-center rounded-md ">
                                <img
                                    className="h-14 w-14 "
                                    src="\Images\20.png"
                                    alt=""
                                />
                            </div>
                            <div className='mx-5 items-center '>
                                <h1 className='text-2xl text-white font-bold'>Weekend Hakers</h1>
                                <h2 className="text-base text-gray-200 my-1">Frederick Libeskind</h2>
                                <div className="  flex  ">
                                    <div className="flex border rounded-xl  justify-center px-2 ">
                                        <div className='text-sm text-gray-50 font-semibold '>Subscribed</div>
                                        <div className=" rounded-full items-center flex justify-center px-1 mx-1 bg-gray-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-3 text-gray-50 text-xl ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="w-[400px] bg-gray-200  h-full  mx-auto mt-4 ">
                    <div className="relative">
                        <div className="w-full h-16 rounded-lg  px-6 py-4 flex justify-between items-center absolute bottom-0   bg-white ">
                            <div className="flex  items-center">
                                <div>
                                    <img
                                        className="h-10 w-10 "
                                        src="\Images\19.png"
                                        alt=""
                                    />
                                </div>
                                <div className="mx-2">
                                    <div className="text-red-500 text-sm font-bold">
                                        Play
                                    </div>
                                    <div className="text-gray-600 text-sm font-bold">
                                        Ep101 :Donald Long
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="px-2 py-1">
                            <h1 className="text-gray-400 text-sm font-bold mx-2">
                                PAST EPISODES
                            </h1>
                        </div>
                        <div className="px-2 py-2">
                            {musics.map((e) => (
                                <div className="border-b border-t border-gray-300 flex justify-between items-center">
                                    <div className="px-4 py-3  " >
                                        <div className="text-xs text-gray-400">{e.date}</div>
                                        <div className="text-sm text-gray-700 font-semibold my-1">{e.eps}</div>
                                        <div className="text-xs text-gray-400">{e.Duration}</div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
