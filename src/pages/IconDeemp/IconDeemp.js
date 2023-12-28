
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
 
 const property={navigation:navigation,teams:teams}

    return (
        <div>
            <div className='h-screen'>
            <IconDeempsidenav {...property}/>
                <div className="lg:pl-72 h-full">
                    <main className="py-10 h-full">
                      <IconDeempbody list={list}/>
                    </main>
                </div>
            </div>
        </div>
    )
}
