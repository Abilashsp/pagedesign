import { PencilSquareIcon,TrashIcon } from '@heroicons/react/24/outline'
import PolicyTabledata from "../../components/Seed/PolicyTabledata"

import { useState } from 'react'


export default function Example({tabledata=PolicyTabledata}) {
    const [people,setpeople] =useState(tabledata) 
    
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
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-6">
                                                No
                                            </th>
                                            
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-6">
                                                NAME
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-700">
                                               STATUS
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-700">
                                                POLICY
                                            </th>
                                        
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person,index) => (
                                            <tr key={index}>
                                                 <td className="whitespace-nowrap px-6 py-4 text-lg text-gray-700">{index+1}</td>
                                                <div className="flex items-center px-4 py-4">

                                                    <div className="h-11 w-11 flex-shrink-0">
                                                        <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{person.name}</div>
                                                        <div className="mt-1 text-gray-500">{person.department}</div>
                                                    </div>
                                                </div>
                                                <td className="whitespace-nowrap  py-2 text-sm text-gray-500"> <span className={`inline-flex items-center rounded-xl    ${person.Status === "Approved" ? "bg-green-100 text-green-900  " : `${person.Status === "Waiting Approval" ? "bg-yellow-100 text-yellow-900" : "bg-red-100 text-red-900"}`}  px-3 py-1 text-sm font-medium  ring-1 ring-inset ring-green-500/20 `}>
                                                    {person.Status}
                                                </span></td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div>
                                                        <div className="text-lg text-gray-900 font-medium">{person.policy}</div>
                                                        <div className="text-sm text-gray-500">{person.desc}</div>
                                                    </div></td>
                                    
                                                <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href="#" className="text-gray-600 hover:text-indigo-900">
                                                    <PencilSquareIcon className='w-5 h-5'/><span className="sr-only"></span>
                                                    </a>
                                                </td>
                                                <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href="#" className="text-gray-600 hover:text-red-900">
                                                    <TrashIcon className='w-5 h-5' onClick={()=>remove(index)} /><span className="sr-only"></span>
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
