import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import Loginnav from './Loginnav';
import LoginScreen from './LoginScreen';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Documentation', href: '#' },

]


export default function Deempathyzing() {

    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const activelink = (id) => {
        setactive(id)
    }




    return (
        <div className="min-h-screen  w-screen">
            <Loginnav navigation={navigation} />
            <div className="bg-gray-200 w-4/5 ">
                <div>
                    <LoginScreen togglePasswordVisibility={togglePasswordVisibility} ShowPassword={showPassword}/>
                </div>
            </div>
        </div>
    )
}
