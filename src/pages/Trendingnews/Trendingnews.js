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







const info = [
    { Name: "Amber Matthews", userid: "@ambermatthews", imageurl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "6" },
    { Name: "Russell Robertson", userid: "@russellrobertson", imageurl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" },
    { Name: "Kathleen Ellis", userid: "@kathleenellis", imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" }
]
const trending = [
    { title: "#FirstSnow", tweets: "13.7K" },
    { title: "Thanksgiving Weekend", tweets: "17.8K" },
    { title: "#OscarBuzz", tweets: "10.3K" },
    { title: "Black Friday", tweets: "10.3K" },
]


const activityItems = [
    {

        name: 'Amanda Wagner',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: '  Join us on November 27th tor our 1st Dribbble meetup in Waterloo! Cauing al designers, UV/UXers, iUstaiors and other creatives from the KW and sunouneing area together to talk shop, ingle, and walk away with some great swegl',
        role: 'Human Resources',
        like: 45,
        comment: 17,
        date: '8h ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Kimberly Kennedy',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: "Had an inspiring bwo cays ar leteTal ho learaho from the best design thinkers in the biz. Can't wait te start plaving with some oreat new ideas",
        role: 'Sr. Front-End Developer',
        like: 11,
        comment: 2,
        date: '45 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Adam Henderson',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: "Had an inspiring bwo cays ar leteTal ho learaho from the best design thinkers in the biz. Can't wait te start plaving with some oreat new ideas",
        role: 'Product designer',
        like: 34,
        comment: 8,
        date: '17 minutes ago',
        dateTime: '2023-01-23T11:00',
    },

]






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

    // const userid=()=>{
    //     const user=info.map((e)=>e.Name.toLocaleLowerCase())
    //     return user
    // }







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
                        <Whotofollow info={info} />
                        <div>
                            <Trending trending={trending} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
