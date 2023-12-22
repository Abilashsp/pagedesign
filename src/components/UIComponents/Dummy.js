import { CgSandClock } from "react-icons/cg";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { LiaMoneyCheckSolid } from "react-icons/lia"
import { EnvelopeIcon, PhoneIcon, StarIcon } from '@heroicons/react/20/solid'
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

const youtubedata = [
    { image: "/Images/51.jpeg", duration: "3", tittle: `Hank's Juiciest Beef Burger`, Desc: "Here's your for a crowd pleasing backyard barbecue...", Name: "Hank Douglas", time: "4 Months" },
    { image: "/Images/52.jpeg", duration: "5", tittle: "All-Americans Cheese Burger", Desc: "the All-American Cheeseburger has certain..", Name: "Kevin Francis", time: "2 year" },
    { image: "/Images/53.jpeg", duration: "4", tittle: "Southern Fried Chicken Burger", Desc: "Try our quick and easy buttermilk chicken..", Name: "Nicholas Denver", time: "8 months" },
    { image: "/Images/54.jpeg", duration: "4", tittle: "Vegan Mushroo Fried Burger", Desc: "Mushrooms are surprisely similae taste and texture..", Name: "Lily Hart", time: "1 year" },
    { image: "/Images/55.jpeg", duration: "4", tittle: "Helen's Healthy Beef Burger", Desc: "Mushrooms are surprisely similae taste and texture..", Name: "Walter White", time: "4 Months" },
    { image: "/Images/56.jpeg", duration: "5", tittle: "Ultimate Double-Decker Burger", Desc: "Here's your for a crowd pleasing backyard barbecue", Name: "Jessy pinkman", time: "2 year" },
    { image: "/Images/57.jpeg", duration: "1", tittle: "Homemade Cheese Burger", Desc: "Here's your for a crowd pleasing backyard barbecue", Name: "Skyler", time: "8 months" },
    { image: "/Images/58.jpeg", duration: "2", tittle: "Green Tomoto Fried Burger", Desc: "Here's your for a crowd pleasing backyard barbecue", Name: "Hank Douglas", time: "1 year" },


]





















export default function Tweet() {




    const stars = (noOfStar) => {
        const starComponents = [];
        for (let i = 0; i < 5; i++) {
            const starColor = i < noOfStar ? "text-[#f5a440]" : "text-gray-300";
            starComponents.push(<StarIcon key={i} className={`text-xs w-3.5 h-3.5  ${starColor}`} />);
        }
        return <div className="flex ">{starComponents}</div>;
    };













    return (
        <div className="w-full h-screen">
            <div className=" w-3/5 mx-auto mt-2 h-full">

                <div className="bg-slate-300 px-4 py-5 w-full  h-auto sm:px-6 relative ">
                    <div>
                        <ul role="list" className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 ">
                            {youtubedata.map((person, index) => (
                                <li key={person.email} className="col-span-1  bg-white mx-2 my-2 ">
                                    <div className="w-full items-center  ">
                                        <div className="flex-shrink-0 relative">
                                            <img
                                                className="h-40 w-full"
                                                src={person.image}
                                                alt=""
                                            />

                                        </div>

                                    </div>
                                    <div className="px-4 py-1">
                                        <div className="w-full items-center  ">
                                            <div className="text-gray-800 font-semibold text-[15px] py-1 ">
                                                {person.tittle}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="text-xs text-gray-400 font-semibold flex items-center py-1 ">
                                                {stars(person.duration)}
                                            </div>
                                        </div>
                                        <div className="w-full items-center py-1 ">
                                            <div className="text-gray-400 font-medium text-xs leading-relaxed">
                                                {person.Desc}
                                            </div>
                                        </div>
                                        <div className="w-full items-center py-1">
                                            <div className="text-gray-400  text-xs leading-relaxed">
                                               By <span className="font-semibold text-gray-700">{person.Name}</span>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>


            </div>
        </div>
    )
}
