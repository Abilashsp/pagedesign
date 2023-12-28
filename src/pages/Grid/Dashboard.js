import { CgSandClock } from "react-icons/cg";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { LiaMoneyCheckSolid } from "react-icons/lia"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
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
import Dashbordnav from "./Dashbordnav";
import Dashboardheader from "./Dashboardheader";
import Dashboardbody from "./Dashboardbody";

const navigation = [
    { name: 'Dashboard', href: '#', icon: ChartBarSquareIcon, current: true },
    { name: 'Invoice', href: '#', icon: NewspaperIcon, current: false },
    { name: 'Expanses', href: '#', icon: LiaMoneyCheckSolid, current: false },
    { name: 'Time Tracking', href: '#', icon: CgSandClock, current: false },
]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]


const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Last 30 days' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]



const dashview = [
    { Name: "Carl Phillips", status: "Pending", Amt: "US$249.00", days: "2 days ago" },
    { Name: "Addams Harries", status: "Overdue", Amt: "US$560.00", days: "8 days ago" },
    { Name: "Marry Butler", status: "Paid", Amt: "US$329.00", days: "9 days ago" },
    { Name: "Kelly Soto", status: "Paid", Amt: "US$649.00", days: "9 days ago" },

]





function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selected, setSelected] = useState(people[3])
 const props={
    selected:selected,
    people:people,
    dashview:dashview,
    setSelected:setSelected
 }




    return (
        <>
            <div>
                <Dashbordnav navigation={navigation} />
                <div>
                    <div className="lg:pl-72 w-full h-screen">
                        <Dashboardheader />
                        <main className="py-10">
                            <Dashboardbody {...props}/>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
