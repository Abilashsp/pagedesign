import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const SectionNavigation = [
    { name: 'Canada', imgsrc: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg" },
    { name: 'United States', imgsrc: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" },

]
const people = [
    {
        No:"71",
        fr:"W.Tran",
        G:0,
        A:0,
        P:0,
        pam:0,
        pim:0
    },
    {
        No:"15",
        fr:"M.Hoffman",
        G:0,
        A:0,
        P:0,
        pam:0,
        pim:0
    },
    {
        No:"67",
        fr:"T.Valdez",
        G:0,
        A:0,
        P:0,
        pam:0,
        pim:0
    },
    {
        No:"38",
        fr:"H.Austin",
        G:0,
        A:1,
        P:0,
        pam:0,
        pim:0
    },
    {
        No:"45",
        fr:"D.Berry",
        G:2,
        A:1,
        P:2,
        pam:0+1,
        pim:2
    },
    {
        No:"12",
        fr:"J.Butler",
        G:0,
        A:0,
        P:0,
        pam:0,
        pim:0
    },
    {
        No:"19",
        fr:"j.Chapman",
        G:0,
        A:1,
        P:0,
        pam:-1,
        pim:0
    },

];


const stats = [
    { tittle: "SOG", value: "30" },
    { tittle: "FO%", value: "50%" },
    { tittle: "pp", value: "0/1" },
    { tittle: "PIM", value: "6" },
    { tittle: "HITS", value: "36" },
    { tittle: "BLKS", value: "12" },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Canada");


    const activelink = (id) => {
        setactive(id)
    }
    console.log(active)

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="w-screen h-screen">
            <div className='w-3/5 mx-auto  '>
                <div className=" mx-auto w-full h-20 mt-5 ">


                    <div className=" h-full shadow-xl bg-white lg:px-8 w-full flex items-center ">
                        <div className="flex ml-6 ">
                            <p className='text-2xl font-semibold text-slate-600'>Game Summary</p>
                        </div>

                    </div>
                    <div>

                        <Disclosure as="nav" className="border-gray-200 bg-gray-100">
                            {({ open }) => (
                                <>
                                    <div className="mx-auto max-w-7xl  border-b-2 border-gray-300 px-4 sm:px-6 lg:px-8">
                                        <div className="flex h-16 justify-between">
                                            <div className="flex  ">

                                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8  border-gray-300  ">
                                                    {SectionNavigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                active == item.name
                                                                    ? 'border-gray-600 text-gray-900'
                                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                                `inline-flex items-center border-b-2 px-1 pt-1  font-medium border-gray-300 `
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                            onClick={() => activelink(item.name)}
                                                        >
                                                            <div className="flex justify-center items-center">
                                                                <div> <div className=" mx-1">
                                                                    <img
                                                                        className="h-5 w-10 rounded-lg"
                                                                        src={item.imgsrc}
                                                                        alt=""
                                                                    />
                                                                </div></div>
                                                                <div className="text-lg">{item.name}</div>

                                                            </div>

                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )}
                        </Disclosure>

                    </div>

                    <div className="mx-auto w-full  h-auto bg-gray-100  " >
                        <div className=" mx-auto  shadow-xl h-auto" >
                            <div className=" flex">

                                 <div className='w-2/6 mt-8 '>
                                <div className="w-full">
                                    <div className="bg-white border-2  relative shadow-xl rounded-r-lg">
                                        <div className='w-full h-10 bg-gray-200 flex items-center'>
                                            <h1 className="px-4 font-semibold text-gray-600">TEAM STATS</h1>
                                        </div>
                                        <div className="flex space-x-3">
                                            <div className="grid grid-cols-3 gap-x-10">
                                                {stats.map((e) => (
                                                    <div key={e.tittle} className="col-span-1">
                                                        <p className="text-base ml-2  text-gray-700 py-1 px-1 ">
                                                            <a href="#" className="hover:underline">
                                                                {e.tittle}
                                                            </a>
                                                        </p>
                                                        <p className="text-xl  ml-2 text-gray-700 font-bold">
                                                            <a href="#" className="hover:underline py-1 px-1">
                                                                {e.value}
                                                            </a>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>



                                        </div>

                                    </div>


                                </div>
                                <div className=" w-full mt-2 shadow-lg ">
                                    <div className="bg-white  border-2  shadow-xl  relative rounded-r-lg">
                                        <div className='w-full h-10  bg-gray-200 flex items-center' >
                                            <h1 className="px-4 font-semibold text-gray-600">SCORING</h1>
                                        </div>
                                        <div className="flex space-x-3">
                                            <div className="flex-shrink-0 px-2 py-2">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1 px-2 py-2">
                                                <div>
                                                    <p className="text-base font-bold text-gray-800 ">
                                                        <a href="#" className="hover:underline">
                                                            Danial
                                                        </a>
                                                    </p>
                                                    <p className="text-sm text-gray-600 font-semibold ">
                                                        <a href="#" className="hover:underline">
                                                            Json chapmam,jake sulivan
                                                        </a>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="py-1 text-gray-600">
                                                        11:20/1st
                                                    </p>
                                                </div>



                                            </div>


                                        </div>

                                    </div>

                                </div>
                                </div>
                                <div>
                                    <div className="mt-8 flow-root max-w-7xl  ml-4">
                                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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



                                </div>






                            </div>

                        </div>


                    </div>

                </div>







            </div>
        </div>

    )
}
