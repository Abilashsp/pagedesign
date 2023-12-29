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
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { CiCirclePlus } from "react-icons/ci";
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import {

    AtSymbolIcon,
    FaceSmileIcon,
    PhotoIcon,
    VideoCameraIcon

} from '@heroicons/react/24/outline'
import Tweet from '../Tweet/Tweet';
import Whotofollow from './Whotofollow';
import Trending from './Trending';
import Bar from "./Bar"
import Navbar from './Navbar';

import ActivityItems from "../../components/Seed/ActivityItems"
import Info from "../../components/Seed/Info"














function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Discover', href: '#' },
    { name: 'Connect', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Jobs', href: '#' },

]


export default function Deempathyzing( ) {
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
            <Navbar />
            <div>
                <div className='flex items-center justify-end'>
                    <div className='w-3/5  flex justify-end '>
                        <div className=" w-4/5  mb-2 mt-6">
                            <Bar />
                            <div className='w-full'>
                                <Tweet />
                            </div>
                        </div>
                    </div>
                    <div className='mb-44'>
                        <Whotofollow  />
                        <div>
                            <Trending  />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
