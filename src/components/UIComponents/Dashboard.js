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


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)


    return (
        <>
            <div>
                <Dashbordnav navigation />
                <div>
                    <div className="lg:pl-72 w-full h-screen">
                        <Dashboardheader />
                        <main className="py-10">
                            <Dashboardbody />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
