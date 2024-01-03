import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Documentation', href: '#' },

]


export default function Deempathyzing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Features");
    const [showPassword, setShowPassword] = useState(false);



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const activelink = (id) => {
        setactive(id)
    }




    return (
        <div className="min-h-screen  w-screen ">
            <header className="bg-white w-full px-8 ">
                <nav className="mx-auto flex w-full items-center  justify-between p-3 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 items-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-8" src="\Images\71.png" alt="" />
                        </a>
                        <div>
                            <h1 className='mx-2 text-lg font-bold text-[#0087d2]'>
                                Roommate
                            </h1>
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



                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button
                            type="button"
                            className="rounded-md  px-4 py-2 text-sm font-semibold text-gray-800  hover:bg-gray-600"
                        >
                            Sign in
                        </button>

                        <button
                            type="button"
                            className="rounded-md border px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-600"
                        >
                            Schedule a Demo
                        </button>
                    </div>
                </nav>
            </header>
            <div className=" w-full relative flex  justify-center h-screen  ">
                <div className="absolute inset-0 -z-10  h-full w-full   " >
                    <a href="#" className="">
                        <span className="sr-only">Your Company</span>
                        <img className="h-screen w-full object-fill brightness-50  " src="\Images\72.png" alt=""  />
                    </a>

                </div>
                <div className=' text-center  w-2/5 mt-56'>
                    <h1 className='text-5xl my-4 text-gray-50 font-bold'>
                        Meeting room scheduling made easy
                    </h1>
                    <h2 className='text-2xl text-gray-50 my-2 font-normal'>
                        A hassel free solution to booking meeting rooms
                    </h2>
                    <div className='my-6'>
                    <button
                        type="button"
                        className="rounded-md tracking-wider bg-[#0087d2] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                       Book a Demo
                    </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
