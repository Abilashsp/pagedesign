import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Gridwithtoggle from "../Gridwithtoggle/Gridwithtoggle"
import Leftnav from "../Leftnav/Leftnav"
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdDashboard } from 'react-icons/md'
import { RxDashboard } from "react-icons/rx";
const navigation = [
    { name: 'Directory', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Articles', href: '#' },
    { name: 'About', href: '#' },
]


const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'The quick brown fox jumps over the lazy dog' },
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


















export default function Deempathyzing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);
    const [selected, setSelected] = useState(people[3])


    const activelink = (id) => {
        setactive(id)
    }


    return (
        <div className='h-screen flex  '>
            <div className='w-full  '>
                <header className="bg-white w-full shadow-md shadow-gray-400 pu " >
                    <nav className=" flex w-full items-center justify-between p-3 lg:px-8" aria-label="Global">
                        <div className="flex  items-center">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-12 w-auto" src="/Images/09.png" alt="" />
                            </a>
                            <div className='px-3 text-xl tracking-wide font-bold text-gray-700'>
                                UI
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
                        <div className="hidden lg:flex lg:gap-x-12 ">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} onClick={() => activelink(item.name)} className={` font-bold ${active === item.name ? "text-blue-700 text-base font-semibold leading-6" : "text-base font-semibold leading-6 text-gray-500 "} `}>
                                    {item.name}
                                </a>
                            ))}
                        </div>

                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-10" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src=""
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>

                <div className='bg-[#f5f5f5] shadow-inner shadow-gray-200' >
                    <div className='flex justify-end items-center px-8 py-4 border-b-2 border-gray-200'>
                        <div className='w-3/6 px-4'>
                            <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium  text-gray-600 px-1 tracking-wide">Sample text</Listbox.Label>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default  bg-white py-1.5  pl-3 pr-10 text-left  text-gray-900 shadow-sm  rounded-md  sm:text-sm sm:leading-6">
                                                <span className="block truncate text-gray-600 tracking-wider ">{selected.name}</span>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 px-3  bg-[#f8f8f8] border rounded-r-md">
                                                    <ChevronDownIcon className="h-5 w-5 text-gray-700" aria-hidden="true" />
                                                </div>
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
                        <div>
                            <div className='text-sm mb-1 text-gray-500'>View</div>
                            <div className='flex '> 
                                <div className='w-9 h-9 bg-[#f8f8f8] flex items-center justify-center rounded-l-md border'>
                                    <Bars3Icon className='w-5 h-5' />
                                </div>
                                <div className='w-9 h-9 bg-[#e6e6e6] flex items-center justify-center  rounded-r-md border'>
                                    <RxDashboard  className='w-5 h-5' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <Gridwithtoggle />
                </div>
            </div>
            <div className=''>
                <Leftnav />
            </div>
        </div>
    )
}
