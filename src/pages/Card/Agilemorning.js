import { EnvelopeIcon, PhoneIcon, ArrowRightIcon,CalendarIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChevronRight,ShoppingCart,Check } from 'react-hero-icon/outline'

const people = [
    { id: 1, name: 'bg-green-500' },
    { id: 2, name: 'bg-yellow-500' },

    { id: 3, name: 'bg-blue-500' },
    { id: 4, name: 'bg-pink-500' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Example() {
    const [selected, setSelected] = useState(people[3])
    return (
        <div className="w-screen h-screen ">
            <div role="list" className="w-1/5  h-[36%]">
                <div
                    className=" w-full h-full rounded-lg bg-white text-center shadow-xl"
                >
                    <div className="flex items-center justify-between border-b-2">

                        <div className=' py-4 px-5'>
                            <div className='text-start'>
                                <h1 className='text-xl font-bold text-gray-800'>
                                    Agile Mornings
                                </h1>
                                <h2 className='text-base mt-1 text-gray-600 '>
                                    Workplace One
                                </h2>
                            </div>
                        </div>







                        <div className=''>
                            <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                    <>

                                        <div className="relative mb-4 px-3 ">
                                            <Listbox.Button className="relative  cursor-default  rounded-3xl bg-white py-2 pl-3 pr-8 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <span className={`block w-5 h-5  rounded-full ${selected.name}`}></span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', `block truncate ${person.name} w-5 h-5 rounded-full`)}>

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


                    <div className='flex items-center border-b-2'>

                        <div className='flex justify-center items-center mx-2 px-2 py-4 '>
<CalendarIcon className="w-5 h-5 mb-5 text-gray-500"/>
                        </div>

                        <div className=' px-2 py-4 text-left text-sm'>
                            <div className='flex items-center'>
                                <div>June 28,2018</div>
                                <div className='px-2'>8:30AM to 9:30AM</div>
                            </div>
                            <div className="text-gray-600">Repeats every 3 weeks</div>
                        </div>
                    </div>



                    <div className='border-b-2'>
                        <div className='text-left px-3 py-4'>
                            <h1 className="text-gray-500"><span className='font-medium px-2 text-gray-800'>28</span>People are going to this events</h1>
                        </div>
                    </div>
                    <div className="flex items-center px-3 py-4">
                                    <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600"/></div>
                                    <h1 className="font-semibold text-base text-gray-700 px-2 ">Accepted</h1>
                                </div>























                    {/* <div>
                        <div>
                            <h1 className='text-lg text-gray-800'>The page is Password Protected</h1>
                            <h1 className='text-sm font-normal text-gray-600 py-1'>Please enter the valid password to <br />
                                access this page.</h1>
                        </div>

                        <div className='flex justify-center'>
                            <div className="relative mt-2 flex items-center">
                                <input
                                    type="password"
                                    name="search"
                                    id="search"
                                    className="block w-4/5 rounded-l-md  border-0 py-2.5 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button type="button" className="text-white rounded-r-md bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-3 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <ArrowRightIcon className="w-5 h-5" />

                                </button>

                            </div>

                        </div>


                    </div> */}
                </div>

            </div>
        </div>
    )
}
