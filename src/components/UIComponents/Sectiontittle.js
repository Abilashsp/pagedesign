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
                       <Sectiontittletabs  activatedtab={activatedtab}/>
                    </div>
                    <div className="mx-auto w-full h-96  bg-gray-100 flex justify-center items-center" >
                       <Sectiontittlebody activetab={activetab} />
                    </div>

                </div>
            </div>
        </div>

    )
}
