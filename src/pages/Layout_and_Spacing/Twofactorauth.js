import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function abel() {
    const [selectedCountry, setSelectedCountry] = useState('Canada');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };


      const getFlagSrc = () => {
        if (selectedCountry === 'United States') {
          return 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg';
        } else if (selectedCountry === 'Mexico') {
          return 'http://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg';
        } else {
          return 'http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg';
        }
      };








    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="bg-white h-3/6  w-2/5 rounded-lg shadow-2xl ">
                <div className="flex justify-start h-full">
                    <div className=" w-full ">
                        <div className=" w-full border-b-2">
                            <div className='flex justify-between w-full px-6 py-4 mt-2'>
                                <h1 className="text-xl text-gray-800 font-extrabold ">Setup Two Factor Authentication</h1>
                                <h1 className="mt-1  font-bold text-base text-gray-500">STEP 1 of 3</h1>
                            </div>
                            <div className="px-6 pb-5">
                                <h2 className="text-base text-gray-600">Every time you sign in to your Account,you will</h2>
                                <h2 className="text-base text-gray-600">Need your password and verification code</h2>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="mt-3   "><div className="text-lg text-gray-800 font-bold">Setup your phone</div>
                                <div className="text-gray-400 font-semibold">Enter the phone number you would like to use</div></div>
                        </div>
                        <div className="flex justify-around items-center">
                            <div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-500">
                                        Country
                                    </label>
                                    <div className="relative">  
                                        <div className="absolute top-5 left-2">
                                            <img
                                                className="h-4 w-8 rounded-md"
                                                src={getFlagSrc()}
                                                alt=""
                                            />
                                        </div>
                                        <select
                                            id="location"
                                            name="location"
                                            className="mt-2 block w-full rounded-md border-0 px-4 py-4 pl-10  text-gray-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue="Canada"
                                            onChange={handleCountryChange}
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-500">
                                    Phone Number
                                </label>
                                <div className=" mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        className="block w-full rounded-md border-0 px-4 py-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2  rounded-md bg-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >

                              Next Step
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
