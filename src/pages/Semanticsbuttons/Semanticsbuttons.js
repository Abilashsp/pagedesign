import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function abel() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="bg-white h-2/6  w-2/5 rounded-lg shadow-2xl ">
                <div className="flex justify-start h-full">
                    <div className="h-full">
                        <img
                            className="h-full w-64 rounded-l-lg "
                            src="/Images/15.png"
                            alt=""
                        />
                    </div>


                    <div className=" px-4 py-6 w-full">
                        <div className="flex justify-between w-full">
                            <h1 className="text-2xl text-sky-800 font-semibold ">Beige Wooden Bar Stool</h1>
                            <h1 className="mt-1 text-2xl font-bold">$40</h1>
                        </div>
                        <div>
                            <h2 className="text-base text-gray-600">Greater Toronto Area</h2>
                        </div>
                        <div>
                            <div className="mt-3 text-lg text-gray-500 "><div className="">Rustic, hand cralted bar stool.Easy to move</div><div className="">thanks to the hole in the seat.</div></div>
                        </div>
                        <div className="flex justify-between h-2/6 items-end">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-base font-semibold text-sky-700 shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >

                                   Delete Listing
                                </button>
                            </div>

                            <div className="flex justify-evenly">
                                <div >
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-x-2 rounded-md bg-gray-300 mx-4 px-4 py-2.5 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >

                                        Edit
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-x-2 rounded-md bg-sky-700 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >

                                    Publish
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
