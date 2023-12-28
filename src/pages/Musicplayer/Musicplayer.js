import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { CiHeart } from "react-icons/ci";
import Musicplayernav from './Musicplayernav'
import Subscribe from './Subscribe'
import Currentsong from './Currentsong'
import Musiclist from './Musiclist'

const highlights = ["Non-smoking luxury hotel",
    "Newly renovated suite",
    "Nearby amenities",
    "Heated indoor pool",
    "Complimentary wifi internet service",
    "Electric car charging station on-site"
]
const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Documentation', href: '#' },

]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const musics = [

    { date: "November 7,2018", eps: "Ep.100:Alan Rogers", Duration: "24:15" },
    { date: "October 31,2018", eps: "Ep.99:Kenneth Brown", Duration: "23:04" },
    { date: "October 24,2018", eps: "Ep.98:Sandra Robinson", Duration: "19:20" },
    { date: "October 17,2018", eps: "Ep.97:Hannah Elizabeth", Duration: "23:09" },
    { date: "October 10,2018", eps: "Ep.96:ANtony Jordan", Duration: "22:16" },
    { date: "October 3,2018", eps: "Ep.95:Whitebey Barns", Duration: "22:16" },
    { date: "October 1,2018", eps: "Ep.94:Alan Rogers", Duration: "24:15" },
]



export default function Example() {
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState(null);

    const activelink = (id) => {
        setactive(id)
    }
    console.log(active)

    return (
        <div className=" w-screen bg-gray-200  ">
            <div className='w-full bg-white'>
              <Musicplayernav/>
            </div>
            <div className='w-full mx-auto h-full '>
                <div className='w-screen h-56 relative isolate overflow-hidden '>
                    <div className="">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            alt=""
                            className="absolute inset-0 -z-10 blur-lg h-full w-full object-cover"
                        />
                    </div>
                    <div className='w-full h-full '>
                        <Subscribe/>
                    </div>
                </div>

                <div className="w-[400px] bg-gray-200  h-full  mx-auto mt-4 ">
                   <Currentsong/>
                   <Musiclist musics={musics}/>
                </div>
            </div>
        </div>
    )
}
