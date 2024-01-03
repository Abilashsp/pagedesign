import { CgSandClock } from "react-icons/cg";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { LiaMoneyCheckSolid } from "react-icons/lia"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { GoDash } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";
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
import { ArrowLeft, ArrowRight } from "react-hero-icon/outline";

const youtubedata = [
    { image: "/Images/28.jpeg", duration: "24:22", tittle: "How to start a youTube channel in 2023", channelname: "PewDiePie", views: 7, time: "4 Months" },
    { image: "/Images/29.jpeg", duration: "5:45", tittle: "Artisan glass blowing artist makes incredible creations", channelname: "Musieum of Glass", views: 143, time: "2 year" },
    { image: "/Images/30.jpeg", duration: "9:04", tittle: "How to make a perfect loaf of bread from scratch", channelname: "Bread Master", views: 237, time: "8 months" },
    { image: "/Images/31.jpeg", duration: "45:00", tittle: "Los Angeles Lakers vs Dallas Mavericks Full Game Highlights", channelname: "FreeDawkins", views: 4, time: "1 year" },
    { image: "/Images/28.jpeg", duration: "24:22", tittle: "How to start a youTube channel in 2023", channelname: "PewDiePie", views: 7, time: "4 Months" },
    { image: "/Images/29.jpeg", duration: "5:45", tittle: "Artisan glass blowing artist makes incredible creations", channelname: "Musieum of Glass", views: 143, time: "2 year" },
    { image: "/Images/30.jpeg", duration: "9:04", tittle: "How to make a perfect loaf of bread from scratch", channelname: "Bread Master", views: 237, time: "8 months" },
    { image: "/Images/31.jpeg", duration: "45:00", tittle: "Los Angeles Lakers vs Dallas Mavericks Full Game Highlights", channelname: "FreeDawkins", views: 4, time: "1 year" },


]





















export default function Tweet() {
    return (
        <div className="w-full h-screen  ">
            <div>
            <div className=" w-3/5 mx-auto flex h-full">
                <div className="absolute inset-0 -z-10  h-1/2 w-full object-cover mx-auto ">
                    <div className="">
                        <img
                            src="/Images/43.jpeg"
                            alt=""
                            className="absolute inset-0 -z-10  h-full w-full object-cover "
                        />
                    </div>

                </div>

                <div className="bg-white  w-full  mt-10 h-60  relative flex rounded-xl  ">
                    <div className="flex-shrink-0 relative ">
                        <img
                            className="w-80 h-60  rounded-l-xl object-cover shadow-inner blur-0 shadow-gray-50 "
                            src='/Images/47.jpeg'
                            alt=""
                        />




                    </div>





                    <div className=" py-5 absolute right-24 ">
                        <ImQuotesLeft className=" w-6 h-6 text-gray-500" />
                        <div className=" py-5 ">
                            <div className="text-lg text-gray-600 tracking-wide italic font-normal">
                                <div className="my-1 mx-1 ">I can't believe the difference this tool has made to our worktlow</div>
                                <div className="my-1 mx-1  " >Now I can see exactly what needs to he done.We were</div>
                                <div className="my-1 mx-1 ">overvhelmed and missing cruciol deadtines before</div>
                            </div>

                            <div className="flex items-center mt-5   font-semibold ">
                                <GoDash className=" text-3xl text-indigo-400 " />
                                <h2 className=" text-base text-indigo-400 font-sansserif mx-2 i "> WHITNEY KENDALL,SERVERKIT</h2>
                            </div>

                        </div>
                      

                    </div>
                   

                </div>
                
            </div>
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center absolute top-40 left-72  ">
                        <ArrowLeft className="w-6 h-6 text-gray-100"/>
                    </div>
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center absolute top-40   right-72 ">
                        <ArrowRight className="w-6 h-6 text-gray-100"/>
                    </div>
            </div>
            <div className="mx-auto w-1/6 mt-6 flex  items-center px-10 ">
                    <div className="w-3 h-3 border-2 border-indigo-500  rounded-full ml-7  "></div>
                    <div className="w-2.5 h-2.5 border-2 bg-indigo-500 rounded-full  mx-1  "></div>
                    <div className="w-2.5 h-2.5 border-2 bg-indigo-500 rounded-full  mx-1 "></div>
                    <div className="w-2.5 h-2.5 border-2 bg-indigo-500  rounded-full  mx-1 "></div>
                    <div className="w-2.5 h-2.5 border-2 bg-indigo-500  rounded-full  mx-1 "></div>
                </div>
        </div>
    )
}
