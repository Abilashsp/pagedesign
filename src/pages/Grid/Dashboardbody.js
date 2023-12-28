import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon,ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {
   
    ChevronRightIcon,CheckIcon
} from '@heroicons/react/24/outline'
import { Dialog, Menu, Transition } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Dashboardbody({...props}) {
    const {selected,setSelected,dashview,people}=props
  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center">

        <h1 className="text-lg font-medium">Dashboard</h1>
        <div>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative mt-2">


                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-8 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <div className="absolute left-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 text-sm">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <span className="block truncate text-gray-400 text-sm">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                        {person.name}
                                                    </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>

        </div>
    </div>


    <div>
        <ul role="list" className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4 mt-3">
            {dashview.map((person) => (
                <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="w-full items-center px-4 py-4">
                        <div className="flex-1 truncate">
                            <div className="flex items-center justify-between space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-700">{person.Name}</h3>
                                <span className={`inline-flex items-center rounded-md ${person.status === "Overdue" ? "bg-red-200 ring-red-400 text-red-950" : (person.status === "Paid" ? "bg-green-200 ring-green-500 text-green-950" : "bg-yellow-200 ring-yellow-400 text-yellow-950")} px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20`}>
                                    {person.status}
                                </span>
                            </div>
                        </div>
                        <div className=" ">
                            <h1 className="text-lg text-indigo-600 font-semibold"> {person.Amt}</h1>
                        </div>
                        <div className=" ">
                            <h3 className="text-xs font-semibold text-gray-400"> {person.days}</h3>
                        </div>

                    </div>
                    <div>
                        <div className="-mt-px flex divide-gray-200">
                            <div className="flex w-0 flex-1 items-center">
                                <a
                                    href={`mailto:${person.email}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-3 text-sm font-semibold text-gray-700"
                                >
                                    View Invoice
                                    <ChevronRightIcon className="h-4 w-4 mt-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </li>

            ))}
        </ul>

    </div>
</div>
  )
}
