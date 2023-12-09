import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { CiHeart } from "react-icons/ci";


const highlights=["Non-smoking luxury hotel",
"Newly renovated suite",
"Nearby amenities",
"Heated indoor pool",
"Complimentary wifi internet service",
"Electric car charging station on-site"
]






function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);


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
        <div className="w-screen h-screen overflow-hidden">
            <div className='w-3/6 mx-auto h-full flex items-center  '>
                <div className=" mx-auto w-full bg-white h-3/5 mt- flex  ">
                    <div className="h-full w-3/6  ">
                        <div className="flex-shrink-0  h-full w-full">
                            <img
                                className="h-full w-full "
                                src="\Images\17.jpeg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="px-8 ">
                        <div>
                            <div>
                                <div className="px-4 py-4 mt-2">
                                    <h2 className="text-sky-400 font-bold text-lg"> PREMIER SUITE</h2>
                                </div>
                                <div className="px-4 ">
                                    <div className="flex items-center"><h1 className=" font-semibold text-2xl">AVG $450 </h1><div className=" font-semibold  text-gray-500 text-base mt-2 mx-2">USD/NIGHT</div></div>
                                </div>
                                <div className="px-4 py-4 flex items-center justify-between" >
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-x-2  rounded-md bg-yellow-300 px-16 py-4 text-base font-semibold text-red-900 shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        View Rates
                                    </button>
                                    <div className="px-2">
                                        <div className="w-14 h-14 border-2 border-gray-400 flex items-center justify-center rounded-md"><CiHeart className="text-2xl text-gray-400" /></div>
                                    
                                    </div>
                                </div>
                            </div>


                            <div className="px-4 py-4 mt-7"> 
                                <div>
                                    <h1 className="font-semibold text-gray-500 mb-2">HIGHLIGHTS</h1>
                                </div>
                                <div>
                                    <div>
                                        {highlights.map((e)=>(
                                            <div className="flex items-center my-1">
                                                <div className="w-1 h-1 rounded-full bg-green-500 "></div>
                                               <div className="mx-2 text-gray-800">{e}</div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
