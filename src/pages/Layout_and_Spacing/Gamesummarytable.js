import React from 'react'

export default function Gamesummarytable({people}) {
    return (
        <div className="mt-8 flow-root max-w-7xl  ml-4">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2  align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg ">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-200 ">
                                <tr>
                                    <th scope="col" className="px-4 text-left text-sm font-bold text-gray-600 ">
                                        #
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-600">
                                        Forwards
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-600">
                                        G
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-600">
                                        A
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-600">
                                        P
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-600">
                                        +/-
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-600">
                                        PIM
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y bg-white ">
                                {people.map((person) => (
                                    <tr key={person.No}>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.No}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.fr}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.G}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.A}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.P}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.pam}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.pim}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
