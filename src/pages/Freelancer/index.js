import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon, StarIcon, PlusIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Check } from 'react-hero-icon/outline';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import PREMIUM from '@/components/Seed/PremiumCarddata';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




const stars = () => {
    const star = [];
    for (let i = 0; i < 5; i++) {
        star.push(<StarIcon key={i} className="w-4 h-4 text-[#2da587] mx-0.5" />)
    }
    return star

}

export default function Example({people=PREMIUM}) {
    const [selected, setSelected] = useState(people[3])
    return (
        <div className="w-screen h-screen bg-gray-200 flex  items-center justify-center ">
            <div role="list" className="w-[230px] mx-auto h-[300px]">
                <div className=" w-full h-full  bg-[#505f96] shadow-xl relative  border-2  rounded-lg " >
                    <div className='px-5 py-5'>
                        <div>
                            <h1 className=' text-gray-50 font-semibold'>
                                PREMIUM
                            </h1>
                            <div >
                                <div className='flex items-center py-1'>
                                    <div className='flex items-center'>
                                        <span className='text-lg text-[#bef5f0] '>
                                            $
                                        </span>
                                        <span className='text-3xl text-gray-50 mx-1 font-thin'>
                                            9
                                        </span>
                                    </div>
                                    <span className='text-sm mt-2 mx-1 text-[#bef5f0] tracking-widest'>
                                        /mo
                                    </span>
                                </div>
                            </div>
                            <div className='py-1' >
                                <PlusIcon className='w-6 h-6 text-[#bef5f0]' />
                            </div>
                            <div className='py-1' >
                                <div>
                                    <span className='text-xl text-gray-50'>
                                        2.5 <span className='text-[#bef5f0]'>%</span>
                                    </span>
                                </div>
                                <div className='text-xs text-[#bef5f0]'>per successful card change</div>
                            </div>
                            <div className='py-3 ' >
                                <div className='flex items-center'>
                                    <div className='text-xl text-gray-50 tracking-wider'>
                                        $5000
                                    </div>
                                    <div className='px-2 mb-1'>
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <div className="relative ">
                                                        <Listbox.Button className="relative w-full cursor-default bg-[#505f96] rounded-sm  pl-2  text-left   border border-gray-400  ring-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 py-0.5">
                                                            <span className="block truncate text-[8px] mr-4 text-[#bef5f0]">{selected.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                                                                <ChevronDownIcon className="h-4 w-4 text-[#bef5f0]" aria-hidden="true" />
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
                                <div className='text-xs text-[#bef5f0] py-1'>Maximum Monthly Revenue</div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full'>
                        <button
                            type="button"
                            className=" w-full bg-white rounded-b-md px-3.5 py-4 text-sm tracking-wider leading-none font-semibold text-[#505f96] shadow-sm  ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                           START FREE TRIAL
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}
