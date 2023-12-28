import { React, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'


export default function Sectiontittlenav() {
    const [query, setQuery] = useState('')
    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })
    return (
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
    )
}
