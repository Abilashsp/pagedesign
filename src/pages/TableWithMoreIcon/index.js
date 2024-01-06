import { PencilSquareIcon,TrashIcon } from '@heroicons/react/24/outline'
import Tabledata from "../../components/Seed/TablewithMoreData"

import { useState } from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { FaEllipsisH } from 'react-icons/fa';


export default function Example({data=Tabledata}) {
    const [people,setpeople] =useState(data) 
    
    const remove = (index) => {
        const updatedPeople = people.filter((person, i) => i !== index);
        console.log(updatedPeople)
        setpeople(updatedPeople);
    };

    return (
        <div className="w-screen h-screen">
            <div className="px-4 sm:px-6 lg:px-8 w-4/5 mx-auto mt-20">
                <div className="sm:flex sm:items-center">


                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow-md shadow-gray-300 ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y-2 divide-gray-200 ">
                                    <thead className="bg-[#f0f5f5]">
                                        <tr>   
                                            <th scope="col" className="py-3.5 pr-3 text-left tracking-wider text-sm font-semibold  text-[#5d6a7b] sm:pl-4">
                                                NAME
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 tracking-wider text-left text-sm font-semibold text-[#5d6a7b] ">
                                            POLICY
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left tracking-wider text-sm font-semibold text-[#5d6a7b] ">
                                           LOCATION
                                            </th>
                                        
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm tracking-wider font-semibold text-[#5d6a7b] ">
                                               STATUS
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm tracking-wider font-semibold text-[#5d6a7b] ">
                                 
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person,index) => (
                                            <tr key={index}>
                                                   <div className="flex items-center px-4 py-4">
                                                    <div className="">
                                                        <div className="font-medium text-gray-700 text-base">{person.name}</div>
                                                        <div className="mt-1 text-gray-500">{person.department}</div>
                                                    </div>
                                                </div>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div>
                                                        <div className="text-base text-gray-700 font-medium">{person.policy}</div>
                                                        <div className="text-sm text-gray-500">{person.desc}</div>
                                                    </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div>
                                                        <div className="text-base text-gray-700 font-medium">{person.Loc}</div>
                                                    </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div>
                                                        <div className="text-base text-gray-700 font-medium">{person.Status}</div>
                                                    </div>
                                                    </td>
                                    
                                                <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href="#" className="text-gray-600 hover:text-indigo-900">
                                                    <FaEllipsisH className='w-5 h-5 text-gray-400'/><span className="sr-only"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
