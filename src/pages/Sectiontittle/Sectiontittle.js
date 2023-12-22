import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const SectionNavigation = [
    { name: 'Account', href: '#' },
    { name: 'Application', href: '#' },
    { name: 'Biling', href: '#' },
    { name: 'Password', href: '#' },
    { name: 'Notifications', href: '#' },
]


const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Discounts', href: '#' },
]

const people = [
    { id: 1, name: 'Leslie Alexander', url: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Account");


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
        <div className='h-screen'>
        <div className='w-3/5 '>
            <header className="bg-blue-950 w-full mx-auto  rounded-t-xl">
                <nav className="mx-auto flex max-w-4xl items-center justify-between p-3 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-12 w-auto" src="/Images/14.png" alt="" />
                        </a>
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


                    <div className="relative w-3/5 ">
                        <MagnifyingGlassIcon
                            className="absolute left-4 top-3.5 h-5 w-5 text-white"
                            aria-hidden="true"
                        />
                        <Combobox onChange={(person) => (window.location = person.url)}>
                            <Combobox.Input
                                className="h-12 w-4/5  rounded-3xl border-2 bg-transparent pl-11 pr-4 text-gray-900 bg-slate-400  placeholder:text-white focus:ring-0 sm:text-sm"
                                placeholder="Search..."
                                onChange={(event) => setQuery(event.target.value)}
                            />

                            {filteredPeople.length > 0 && (
                                <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                                    {filteredPeople.map((person) => (
                                        <Combobox.Option
                                            key={person.id}
                                            value={person}
                                            className={({ active }) =>
                                                classNames('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white')
                                            }
                                        >
                                            {person.name}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            )}

                            {query !== '' && filteredPeople.length === 0 && (
                                <p className="p-4 text-sm text-gray-500">No people found.</p>
                            )}
                        </Combobox>
                    </div>

                </nav>

            </header>

            <div className=" mx-auto w-full h-20">


                <div className=" h-full shadow-xl bg-white lg:px-8 w-full flex items-center ">
                    <div className="flex ml-6 ">
                        <p className='text-lg text-slate-600'>Managment Account</p>
                    </div>

                </div>
                <div>

                        <Disclosure as="nav" className="border-gray-200 bg-gray-100">
                            {({ open }) => (
                                <>
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="flex h-16 justify-between">
                                            <div className="flex">

                                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8  border-b-2 border-gray-300  ">
                                                    {SectionNavigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                active == item.name
                                                                    ? 'border-gray-600 text-gray-900'
                                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                                `inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium border-gray-300 `
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                            onClick={() => activelink(item.name)}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )}
                        </Disclosure>

                    </div>
          
                <div className="mx-auto w-full h-96  bg-gray-100 flex justify-center items-center" >

                <div className=" w-4/5 h-80  bg-white mx-auto rounded-xl shadow-xl" >

                </div>
            </div>

            </div>



           



        </div>
        </div>

    )
}
