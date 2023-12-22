import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Flightbookui() {
    const notificationMethods = [
        { id: 'Round Trip', title: '5 star', pencentage: "56" },
        { id: 'Round Trip', title: '4 star', pencentage: "20" },
        { id: 'Round Trip', title: '3 star', pencentage: "14" },
        { id: 'Round Trip', title: '2 star', pencentage: "2" },
        { id: 'Round Trip', title: '1 star', pencentage: "8" },
    ]

    
    return (
        <div className="w-screen h-screen">
            <div className="flex min-h-full flex-1 flex-col justify-center   h-3/5 ">
                <div className=" sm:w-full sm:max-w-[400px] h-full ">
                    <div className="bg-white px-6  py-10 shadow sm:rounded-lg sm:px-6  h-3/5 ">
                        <div className="px-4 ">
                            <h1 className="text-2xl font-extrabold text-gray-900">50 customer reviews</h1>
                        </div>
                        <div className="px-4 py-4">
                            {notificationMethods.map((e) => (
                                <div key={e.title} className="flex items-center">
                                    <div className=" py-1 text-blue-600 font-bold">{e.title}</div>

                                    <div className="h-3 w-3/5 mx-4">
                                    <div className="relative h-full w-full bg-gray-300 rounded-md ">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-yellow-500 rounded-md"
                                            style={{ width: `${e.pencentage}%` }}
                                        ></div>
                                    </div>
                                    </div>
                                    <div> <div className="text-gray-400 font-semibold">
                                    {e.pencentage}%
                                    </div>
                                      </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-4 py-4">
                            <h1 className="text-lg text-gray-700 font-bold ">
                                Review this product
                            </h1>
                            <h2 className="">
                                Share your thoughts with customers
                            </h2>
                            <div>
                            <div className="mt-8">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2  rounded-md bg-gray-200 px-8 py-2  text-base font-semibold text-gray-700 shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >

                                Write a review
                                </button>
                            </div>
                                
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}
