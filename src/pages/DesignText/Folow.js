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




const info = [
    { Name: "Amber Matthews", imageurl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "6" },
    { Name: "Russell Robertson", imageurl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" },
    { Name: "Kathleen Ellis", imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" }
]
















export default function Flightbookui() {
    const notificationMethods = [
        { id: 'Round Trip', title: 'Round Trip' },
        { id: 'One Way', title: 'One Way' },
    ]

    const lastIndex=info.length-1
    return (
        <>
            <div className="flex h-screen flex-1 flex-col  bg-slate-100  ">

                <div className=" sm:w-full sm:max-w-[480px] rounded-xl">
                    <div className="  shadow sm:rounded-xl ">
                        <div className="bg-white w-full px-5 py-5 rounded-t-xl ">
                            <div className="flex items-baseline justify-between">
                                < h1 className="text-2xl text-gray-800 font-bold">Who to Follow</h1>
                                <div className="flex items-center">
                                    <div className="text-lg text-sky-500 font-semibold px-2">Refresh</div>
                                    <div className="w-1 h-1 rounded-full mt-2 bg-gray-500"></div>
                                    <div className="text-lg text-sky-500 font-semibold px-2">See all</div>
                                </div>

                            </div>
                        </div>

                        <div className="bg-gray-50 w-full px-4 py-8  rounded-xl ">
                            <div className="">
                                {info.map((information,index) => (
                                    <div className={`flex items-center px-2 py-3 ${index!==lastIndex?" border-b border-gray-300":" "} `}>
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-16 w-16 rounded-full"
                                                src={information.imageurl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow mx-6">
                                            <div className="text-lg text-gray-700 font-bold">{information.Name}</div>
                                            <div className="text-gray-500">{`${information.mutual} Mutual friends`}</div>
                                        </div>
                                        <div className="flex-shrink-0 mx-6">
                                            <button
                                                type="button"
                                                className="rounded-2xl bg-gray-100 text-base font-bold border-gray-500 px-6 py-1 border text-gray-600 shadow-sm hover:bg-white/20"
                                            >
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>






                    </div>

                </div>


            </div>
        </>
    )
}
