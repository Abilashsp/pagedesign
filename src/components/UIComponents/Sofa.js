import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { CiHeart } from "react-icons/ci";
import { ChevronRight,ShoppingCart,Check } from 'react-hero-icon/outline'





function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);
    const notificationMethods = [
        { id: 'email', title: 'Email' },
        { id: 'sms', title: 'Phone (SMS)' },
        { id: 'push', title: 'Push notification' },
    ]

    const activelink = (id) => {
        setactive(id)
    }
    console.log(active)

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className='w-4/6  h-full  '>
                <div className=" mx-auto w-full bg-white h-4/5 mt- flex  ">
                    <div className="h-full w-3/6  ">
                        <div className="flex-shrink-0  h-full w-full">
                            <img
                                className="h-4/5 w-full "
                                src="\Images\26.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className=" px-4 ">
                        <div>
                            <div>
                                <div className="px-4 py-4 mt-2">
                                    <h2 className="  font-bold text-gray-800 text-lg"> {`Brooklyn Lether Sofa (82") `}</h2>
                                    <div className="flex items-center ">
                                        <h2 className="text-base text-gray-600"> View  full Product details</h2>
                                        <div><ChevronRight className="w-4 h-4 mx-2" /></div>
                                    </div>

                                </div>
                                <div className="flex items-center justify-between px-4 py-4 ">
                                    <div>
                                        <h4 className="text-gray-500">Select color :</h4>
                                    </div>
                                    <div>

                                        <fieldset className="">
                                            <div className="space-y-4 sm:flex sm:items-center sm:space-x-5 sm:space-y-0">
                                                {notificationMethods.map((notificationMethod) => (
                                                    <div key={notificationMethod.id} className="flex items-center">
                                                        <input
                                                            id={notificationMethod.id}
                                                            name="notification-method"
                                                            type="radio"
                                                            className="h-6 w-6 border-gray-300 text-orange-800 focus:ring-orange-800"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>


                                <div className="px-4 py-4">
                                    <div className='py-2 text-3xl text-gray-800 font-bold'>
                                        $1500
                                    </div>
                                    <div className='text-gray-500'>
                                        10 years limited waranty.Read about the terms in the
                                    </div>
                                    <div className='text-gray-500'>
                                        limited waranty brochure
                                    </div>

                                </div>

<div className="px-4 py-2">                          <div className=" w-3/5 rounded-lg px-9 bg-[#373737] py-3 flex items-center  " >
                                    <div>
                                        <ShoppingCart className=" text-gray-200"/>
                                    </div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-x-2  rounded-md  font-semibold text-base px-2 text-gray-200  shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            </div> 

     

                            <div className=" mt-2 px-4 py-2">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 border-green-500 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-4 h-4  text-green-500"/></div>
                                    <h1 className="font-semibold text-gray-500 ">Available to ship</h1>
                                </div>
                                <div className=" mt-2">
                                <div className="border-b border-gray-200 px-4 py-4 sm:px-3 w-full h-40  bg-gray-200">
      <h3 className="text-base font-semibold leading-6 text-gray-700">Delivery Calculator</h3>
      <p className="mt-1 text-sm text-gray-500">
        
      </p>
    </div>
    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
