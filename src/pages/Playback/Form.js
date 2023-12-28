import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
export default function Form() {
  return (
    <form className="mx-auto px-8 py-8">
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Basics</h2>
                                <h2 className="mt-1 text-sm leading-6 text-gray-600">
                                    Having an up-to-date email address attached to
                                </h2>
                                <h2 className="mt-1 text-sm leading-6 text-gray-600">
                                    your account is a great step toward improved
                                </h2>
                                <h2 className="mt-1 text-sm leading-6 text-gray-600">
                                    account security
                                </h2>
                            </div>

                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-500">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>



                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-500">
                                        Password
                                    </label>
                                    <div className="mt-2  items-center gap-x-3">
                                        <button
                                            type="button"
                                            className="rounded-md  px-16 py-3 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Choose your Password
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-full relative">
                                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-500">
                                        Langauge
                                    </label>
                                    
                                    <select
                                        id="location"
                                        name="location"
                                        defaultValue=""
                                        className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                                    >
                                        
                                        <option value="" disabled hidden>
                                            <div className="text-gray-300">Choose...</div>
                                        </option>
                                        <option value="United States">Tamil</option>
                                        <option value="Canada">English</option>
                                        <option value="Mexico">Malayalam</option>
                                       
                                    </select>
                                    <div className="absolute top-9 right-4"><ChevronDownIcon className="w-6 h-6"/></div>
                                </div>



                                <div className="col-span-full relative">
                                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-500">
                                        Country
                                    </label>
                                    <select
                                        id="location"
                                        name="location"
                                        defaultValue=""
                                        className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                                    >
                                        <option value="" disabled hidden>
                                            <div className="text-gray-300">Choose...</div>
                                        </option>
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Mexico">Mexico</option>
                                    </select>
                                    <div className="absolute top-9 right-4"><ChevronDownIcon className="w-6 h-6"/></div>
                                </div>



                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm leading-6  text-gray-500">This information shown publicily</p>
                                <p className="mt-1 text-sm leading-6  text-gray-500">Carefull what information you provide</p>
                            </div>

                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6  text-gray-500">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6  text-gray-500">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-500">
                                      Picture
                                    </label>
                                    <div className="mt-2  items-center gap-x-3">
                                        <button
                                            type="button"
                                            className="rounded-md  px-16 py-3 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                           Change picture
                                        </button>
                                    </div>
                                </div>



                              
                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-500">
                                     Username
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                 
                </form>
  )
}
