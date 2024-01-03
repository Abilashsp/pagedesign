import React ,{useState}from 'react'
import {peopledetails} from "../../components/Seed/MainLGdata"
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainLGsidenav({people=peopledetails}) {
 
    const [active, setactive] = useState(null);
    const [selected, setSelected] = useState(people[3])


    const activelink = (id) => {
        setactive(id)
    }

  return (
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
  )
}
