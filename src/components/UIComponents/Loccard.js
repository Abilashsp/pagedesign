import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { ArrowRight } from 'react-hero-icon/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function abel() {
    return (
        <div className='w-full h-screen '>
            <div className="bg-white h-1/5 ml-3 w-[520px] rounded-lg shadow-2xl overflow-hidden ">
                <div className="flex   items-center h-full    ">
                    <div className=' relative '>
                    <div className="h-28 w-28 rounded-full flex items-center justify-center bg-[#d7f5fa] overflow-hidden ml-[-20%] ">
                        <img
                            className="h-20 w-16  "
                            src="/Images/73.png"
                            alt=" "/>
                    </div>
                    </div>
                    <div className=" px-5  w-4/6">

                        <div>
                            <h1 className='text-base font-bold text-gray-700 py-1 '>
                                CITYWIDE DELIVERY
                            </h1>
                            <h2 className='text-sm text-gray-500 font-normal py-1'>
                                Get parcels delivered to your home same day in the bay Area,LA and NYC
                            </h2>
                            <div className='flex items-center py-1 '>
                                <div className='text-[#3c5ab4] font-medium'>Learn more</div>
                                <div><ArrowRight className="w-4 h-4 mt-1 mx-2 text-[#3c5ab4]"/></div>
                            </div>
                        </div>
                      
                    </div>


                </div>
            </div>
        </div>
    )
}
