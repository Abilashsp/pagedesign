import React from 'react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Disclosure, Menu, Transition } from '@headlessui/react'





const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'For Sale' },
    { id: 4, name: 'Residential' },
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
export default function Lightsourcesidenav() {
    const [selected, setSelected] = useState(people[2])
    const [selected1, setSelected1] = useState(people[3])
    const [value, setValue] = useState(500000);

  return (
    <div className="hidden  lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-full">
                            <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-[#323c4b]  ">
                                <div className="  px-4  py-4 ">
                                    <div className=" h-16 shrink-0 w-full   py-4 ">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="block text-base font-medium leading-6 text-gray-400">Transaction Type</Listbox.Label>
                                                    <div className="relative mt-2 ">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-[#555a69] py-2 pl-3 pr-10 text-left text-gray-900 shadow-md shadow-gray-800   sm:text-sm sm:leading-6">
                                                            <span className="block truncate text-gray-50 text-base ">{selected.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-6 w-6 text-gray-50" aria-hidden="true" />
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
                                    <div className=" h-16 shrink-0 w-full mt-10 mb-4  py-4 ">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="block text-base font-medium leading-6 text-gray-400">Property Type</Listbox.Label>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-[#555a69] py-2 pl-3 pr-10 text-left text-gray-900 shadow-md shadow-gray-800  sm:text-sm sm:leading-6">
                                                            <span className="block truncate text-gray-50 text-base">{selected1.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDownIcon className="h-6 w-6 text-gray-50 " aria-hidden="true" />
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

                                <div className='h-[0.5px] mt-2'>
                                    <div className=' w-full shadow-sm h-0.5  shadow-[#404558] '>
                                        <div className='bg-[#222736] shadow-inner w-full h-full border-b border-gray-600 shadow-[#0f121a] '></div>

                                    </div>
                                </div>
                                <div className=" w-full px-3">
                                    <h1 className="block text-lg font-medium leading-6 text-gray-400 py-4 ml-2 mb-2">Price Range</h1>

                                    <div className=" w-full  h-1.5 flex items-center shadow-md  shadow-[#404558]  ">
                                        <input
                                            type="range"
                                            id="priceRange"
                                            name="priceRange"
                                            min={500000}
                                            max={1500000}
                                            value={value}
                                            onChange={(e) => setValue(Number(e.target.value))}
                                            className="slider bg-[#222736] appearance-none shadow-inner border-b-2 border-gray-600  shadow-[#0f121a]   h-2 rounded-full w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-around items-center text-gray-200 py-3 text-lg font-medium">
                                    <div>$5,00,000</div>
                                    <div>$15,00,000</div>
                                </div>




                                <div className='h-1 mt-2'>
                                    <div className=' w-full shadow-sm h-0.5  shadow-[#404558] '>
                                        <div className='bg-[#222736] shadow-inner w-full h-full border-b border-gray-600 shadow-[#0f121a] '></div>

                                    </div>
                                </div>


                                <div className='px-4 py-4'>
                                    <h1 className="block text-lg font-medium leading-6 text-gray-400">Features</h1>

                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-7 items-center shadow-md shadow-gray-600 rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#222736]  shadow-inner   shadow-[#0f121a] text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="block text-lg font-medium leading-6 text-gray-200">
                                                    Balcony
                                                </label>

                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-7 items-center shadow-md  shadow-[#404558] rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#222736]  shadow-inner  shadow-[#0f121a]  text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="candidates" className="block text-lg font-medium leading-6 text-gray-200">

                                                    Central Air
                                                </label>

                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3 ">
                                            <div className="flex h-7 items-center shadow-md shadow-gray-600 rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#222736]  shadow-inner  shadow-[#0f121a]  text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="offers" className="block text-lg font-medium leading-6 text-gray-200">
                                                    Pool
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
  )
}
