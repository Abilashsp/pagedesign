import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { Dialog, Menu, Transition } from '@headlessui/react'

export default function IconDeempbody({list}) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 h-full">

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
    )
}
