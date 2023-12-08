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
export default function Flightbookui() {
    const notificationMethods = [
        { id: 'Round Trip', title: 'Round Trip' },
        { id: 'One Way', title: 'One Way' },
    ]
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-t-lg sm:px-12">
                        <div>
                            <fieldset className="mb-4">
                                <div className=" sm:flex sm:items-center sm:space-x-10 ">
                                    {notificationMethods.map((notificationMethod) => (
                                        <div key={notificationMethod.id} className="flex items-center">
                                            <input
                                                id={notificationMethod.id}
                                                name="notification-method"
                                                type="radio"
                                                defaultChecked={notificationMethod.id === 'email'}
                                                className="h-5 w-5 border-gray-300 text-blue-950 focus:bg-buttonbg"
                                            />
                                            <label htmlFor={notificationMethod.id} className="ml-2 block text-sm font-medium leading-6 text-gray-900">
                                                {notificationMethod.title}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <div>
                                    <div className="relative mt-2">
                                        <CiLocationOn className=" text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Leaving from..."
                                            required
                                            className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=" relative mt-2">
                                    <CiLocationOn className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="Going to..."
                                        required
                                        className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <div>
                                        <div className="relative mt-2 mr-2">
                                            <CiCalendar className=" text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="Depart"
                                                required
                                                className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className=" relative mt-2 ml-2">
                                        <CiCalendar className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="Return"
                                            required
                                            className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                <div>
                                    <div className="mt-2 relative w-full ">
                                     <CiUser  className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="pl-8 pr-16 py-2  w-full bg-customcolor1 appearance-none rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option>2 Passengers</option>
                                            <option>3 Passengers</option>
                                            <option>4 Passengers</option>
                                        </select>
                                        <div className="absolute right-2 top-1/4 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                                        <ChevronUpIcon className=" " />
                                        <ChevronDownIcon className=" " />
        
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div>
                                    <div className="mt-2 relative w-full ">
                                     <CiStar  className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="pl-8 pr-16 py-2  w-full bg-customcolor1 appearance-none rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option>Econmy class</option>
                                            <option>Class 1</option>
                                            <option>Class 2</option>
                                        </select>
                                        <div className="absolute right-2 top-1/4 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                                        <ChevronUpIcon className="" />
                                        <ChevronDownIcon className=" " />
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                        </form>
                        

                    </div>

                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-[480px] sm:rounded-b-lg bg-buttonbg ">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center   px-3 py-5 text-sm font-bold sm:rounded-b-lg  font-sans leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Search Flight
                                </button>
                            </div>
            </div>
        </>
    )
}
