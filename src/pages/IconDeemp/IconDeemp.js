
import { Fragment, useState } from 'react'
import { FaChartLine } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiRefreshFill } from "react-icons/ri";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Dialog, Menu, Transition } from '@headlessui/react'


const navigation = [
    { name: 'Chart', href: '#', icon: FaChartLine, current: false },
    { name: 'Genres', href: '#', icon: PiSquaresFourFill, current: false },
    { name: 'New Release', href: '#', icon: RiRefreshFill, current: false },
    { name: 'Recommended', href: '#', icon: IoMdThumbsUp, current: false },
]
const teams = [
    { name: 'Recently Played', href: '#', icon: IoMdTime, current: false },
]
const list = [
    { Name: "Love Me", Song: "yuki Ame" },
    { Name: "Burried", Song: "Ted Jasper" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function IocnDeemp() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <div>

                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <div className="text-xl font-bold leading-6 text-gray-500 py-4">Browse</div>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-indigo-600' : 'text-gray-400  group-hover:text-indigo-600',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    <p className="text-lg">{item.name}</p>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xl font-bold leading-6 text-gray-500 py-4">Your Library</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >

                                                    <team.icon
                                                        className={classNames(
                                                            team.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />

                                                    <span className="text-lg">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">

                            <div className="">
                                <h1 className="text-lg text-slate-700 py-2">Playlist</h1>
                                <h2 className="text-4xl py-2">Vibes</h2>
                                <div className="flex py-2"> <p className="text-base  py-2 px-1 text-slate-500">Curated by</p><p className="text-base py-2  px-1 font-bold text-blue-500 ">Eric Dorsey.</p><p className="text-base py-2  px-1 text-slate-500">60 songs,5hr 50 mins</p></div>
                            </div>
                            <div className="py-2">
                                <button
                                    type="button"
                                    className="rounded-full bg-blue-500 px-12 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Play
                                </button>
                            </div>


                            <div className="py-6">
                                <table>
                                    {list.map((i) => (
                                        <tr className="border-t-2 border-b-2 border-gray-400">
                                            <td className="px-4 py-4">
                                            <FaPlus className="text-2xl text-gray-400" />
                                            </td>
                                            <td className="px-4 py-4">
                                                {i.Name}
                                            </td>
                                            <td className="px-10 py-4">
                                                {i.Song}
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </table>


                            </div>


                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
