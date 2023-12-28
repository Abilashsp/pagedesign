import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import GamesummaryUInav from './GamesummaryUInav'
import GamesummaryUItabs from './GamesummaryUItabs'
import Gamesummarystats from './Gamesummarystats'
import Gamesummaryscore from './Gamesummaryscore'
import Gamesummarytable from './Gamesummarytable'

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
    const [activetab,  setactivetab] = useState("Canada");


const activatedtab=(value)=>{
    setactivetab(value)
}
   
    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="w-screen h-screen overflow-hidden ">
            <div className='w-3/5 h-full '>
                <div className=" mx-auto w-full h-20  ">
                  <GamesummaryUInav/>
                    <div>
                       <GamesummaryUItabs SectionNavigation={SectionNavigation} activatedtab={activatedtab}/>
                    </div>
                    <div className="mx-auto w-full h-screen   " >
                        <div className=" mx-auto  shadow-xl h-4/6 bg-gray-100" >
                        {activetab=="Canada"&&
                        <div className=" flex">
                        <div className='w-2/6 mt-8 '>
                       <div className="w-full">
                         <Gamesummarystats stats={stats}/>
                       </div>
                       <div className=" w-full mt-2 shadow-lg ">
                           <Gamesummaryscore />
                       </div>
                       </div>
                       <div>
                          <Gamesummarytable people={people}/>
                       </div>
                      </div>}    

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
