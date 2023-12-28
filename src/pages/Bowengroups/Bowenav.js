import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'


import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    ChartBarSquareIcon,
    NewspaperIcon,
    ChevronRightIcon,
    StarIcon,
    InboxIcon,
    PlusIcon,
    ArchiveBoxIcon,
    ChevronLeftIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ExclamationCircleIcon,
    AtSymbolIcon,
    FaceSmileIcon


} from '@heroicons/react/24/outline'
const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Bowenav({...props}) {
const{ selected,setSelected,navigation,Channels}=props.properties
     


  return (
    <div className="hidden  lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-full">
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#2364a0] px-6 pb-4">
        <div className="flex items-center justify-between ">
            <div className="flex h-16 shrink-0 items-center">
                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                            <div className="relative mt-2">
                                <Listbox.Button className="relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left text-gray-900   focus:outline-none  0 sm:text-xl sm:leading-6">
                                    <span className="block truncate font-bold text-gray-50">Bowen Group</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>
                                <div className="flex items-center ">
                                    <div className="w-2 h-2 bg-green-500 rounded-full ml-5 "></div>
                                    <div className=" mx-2 text-gray-200 text-sm">{selected.name}</div>
                                </div>
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
                                                        'relative cursor-default select-none py-2 pl-8 pr-4'
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
                                                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
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
            <div className="relative">
                <BellIcon className="w-6 h-6 text-gray-200" />
                <span className="w-3 h-3 bg-gray-100 rounded-full absolute top-0 right-0 flex items-center justify-center">
                    <span className="w-3/5 h-3/5 bg-red-500 rounded-full "></span>
                </span>
            </div>
        </div>
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-100 hover:text-white hover:bg-gray-800',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >
                                    <item.icon className="h-6 w-6 shrink-0 text-gray-300" aria-hidden="true" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <div className="text-gray-50 font-medium my-2 ">
                        <h1 className="tracking-wide">CHANNELS</h1>
                    </div>
                    <ul role="list" className="-mx-1 space-y-1">
                        {Channels.map((item) => (
                            <li key={item.name} className='relative'>
                                <a
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-[#19466e] text-gray-300'
                                            : 'text-gray-300 hover:text-white hover:bg-[#19466e]',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >

                                    {item.name}
                                </a>
                                {item.name==="Design"&& <div className="w-7 h-5 rounded-2xl bg-[#6ed7d2] flex items-center text-sm font-medium justify-center text-[#19645a] absolute right-2 top-2">4</div>}
                               
                            </li>
                        ))}
                    </ul>
                </li>
                <div className="flex items-center">
                    <div>
                        <PlusIcon className="w-5 h-5 text-gray-50" />
                    </div>
                    <div className="text-gray-50 mx-2 text-base">
                        New Channel
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        < ArchiveBoxIcon className="w-5 h-5 text-gray-50" />
                    </div>
                    <div className="text-gray-50 mx-2 font-semibold text-base">
                        Archive Channel
                    </div>
                </div>


            </ul>


        </nav>
    </div>
</div>
  )
}
