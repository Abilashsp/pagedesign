
import { Fragment, useState } from 'react'
import { FaChartLine } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiRefreshFill } from "react-icons/ri";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Dialog, Menu, Transition } from '@headlessui/react'
import IconDeempsidenav from './IconDeempsidenav';
import IconDeempbody from './IconDeempbody';




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function IocnDeemp() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
 
 

    return (
        <div>
            <div className='h-screen'>
            <IconDeempsidenav/>
                <div className="lg:pl-72 h-full">
                    <main className="py-10 h-full">
                      <IconDeempbody />
                    </main>
                </div>
            </div>
        </div>
    )
}
