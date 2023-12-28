import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Playbacknav from './Playbacknav';
import Form from './Form';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Discover', href: '#' },
    { name: 'Connect', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Jobs', href: '#' },

]


export default function Deempathyzing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Features");
    const [showPassword, setShowPassword] = useState(false);



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const activelink = (id) => {
        setactive(id)
    }




    return (
        <div className="min-h-screen  w-screen">
            <Playbacknav navigation={navigation} />
            <div className="px-8 py-8 ">
                <h1 className=" py-4 text-xl text-gray-800 ">Account Settings</h1>
                <h2 className='border-b-2 border-gray-300 mt-2'></h2>
            </div>
            <Form />
        </div>

    )
}
