import { CgSandClock } from "react-icons/cg";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { LiaMoneyCheckSolid } from "react-icons/lia"
import { EnvelopeIcon, HeartIcon, PhoneIcon, StarIcon } from '@heroicons/react/20/solid'
import { CiHeart } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    ChartBarSquareIcon,
    NewspaperIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import toggleboxdata from "@/components/Seed/Gridwithtoggledata";








export default function Tweet() {



    const [enabled, setEnabled] = useState(false)












    return (
            <div className=" w-full   h-full overflow-y-auto">

                <div className="bg-[#f5f5f5] px-4 py-5 w-full  h-auto sm:px-6 relative ">
                    <div>
                        <ul role="list" className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-5 ">
                            {toggleboxdata.map((person, index) => (
                                <li key={person.email} className="col-span-1  bg-white mx-2 my-2 ">
                                    <div className="w-full items-center border  ">
                                        <div className="flex-shrink-0 relative w-full h-32 bg-white px-3 py-4">
                                            <h1 className="text-2xl text-gray-600">
                                                The quick brown fox jumps over the lazy dog
                                            </h1>
                                        </div>

                                    </div>
                                    <div className=" px-4 py-3 bg-[#fafafa] border">
                                        <div className="w-full items-center  ">
                                            <div className="text-gray-00 font-semibold text-sm  ">
                                                {person.tittle}
                                            </div>
                                        </div>
                                        <div className="w-full items-center ">
                                            <div className="text-gray-400 font-medium text-[11px] leading-relaxed">
                                                {person.Desc}
                                            </div>
                                        </div>
                                        <div className="w-full items-center flex justify-between">
                                            <div className="text-gray-400  text-xs leading-relaxed flex items-center justify-start  w-1/2  py-1">
                         
                                                <div className=""><CiHeart className="w-5 h-5 " /></div>
                                                <div className=" px-4"><IoCodeSlashOutline className="w-5 h-5 " /></div>
                                            
                                            </div>
                                            <div className="flex items-center w-1/2 justify-end py-1">
                                                <h1 className="px-2 text-gray-500 font-semibold text-[11px]">Activate</h1>
                                                <div className="mt-1">
                                                    <Switch
                                                        checked={enabled}
                                                        onChange={setEnabled}
                                                        className={classNames(
                                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                                            'relative inline-flex h-5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                                        )}
                                                    >
                                                        <span className="sr-only">Use setting</span>
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                enabled ? 'translate-x-3' : 'translate-x-0',
                                                                'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                            )}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>


            </div>
      
    )
}
