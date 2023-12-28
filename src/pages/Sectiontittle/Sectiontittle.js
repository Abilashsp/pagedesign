import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { BellIcon } from '@heroicons/react/24/outline'
import Sectiontittlenav from './Sectiontittlenav'
import Sectiontittlebar from './Sectiontittlebar'
import Sectiontittletabs from './Sectiontittletabs'
import Sectiontittlebody from './Sectiontittlebody'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const SectionNavigation = [
    { name: 'Account', href: '#' },
    { name: 'Application', href: '#' },
    { name: 'Biling', href: '#' },
    { name: 'Password', href: '#' },
    { name: 'Notifications', href: '#' },
]


const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Discounts', href: '#' },
]

const people = [
    { id: 1, name: 'Leslie Alexander', url: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activetab, setactivetab] = useState("Account");


    const activatedtab = (value) => {
        setactivetab(value)
    }
   



    return (
        <div className='h-screen'>
            <div className='w-3/5 '>
                <Sectiontittlenav />
                <div className=" mx-auto w-full h-20">
                   <Sectiontittlebar/>
                    <div>
                       <Sectiontittletabs SectionNavigation={SectionNavigation} activatedtab={activatedtab}/>
                    </div>

                    <div className="mx-auto w-full h-96  bg-gray-100 flex justify-center items-center" >

                       <Sectiontittlebody activetab={activetab} />
                    </div>

                </div>
            </div>
        </div>

    )
}
