import { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import GamesummaryUInav from './GamesummaryUInav'
import GamesummaryUItabs from './GamesummaryUItabs'
import Gamesummarystats from './Gamesummarystats'
import Gamesummaryscore from './Gamesummaryscore'
import Gamesummarytable from './Gamesummarytable'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [activetab,  setactivetab] = useState("Canada");


const activatedtab=(value)=>{
    setactivetab(value)
}
   

    return (
        <div className="w-screen h-screen overflow-hidden ">
            <div className='w-3/5 h-full '>
                <div className=" mx-auto w-full h-20  ">
                  <GamesummaryUInav/>
                    <div>
                       <GamesummaryUItabs  activatedtab={activatedtab}/>
                    </div>
                    <div className="mx-auto w-full h-screen   " >
                        <div className=" mx-auto  shadow-xl h-4/6 bg-gray-100" >
                        {activetab=="Canada"&&
                        <div className=" flex">
                        <div className='w-2/6 mt-8 '>
                       <div className="w-full">
                         <Gamesummarystats/>
                       </div>
                       <div className=" w-full mt-2 shadow-lg ">
                           <Gamesummaryscore />
                       </div>
                       </div>
                       <div>
                          <Gamesummarytable/>
                       </div>
                      </div>}    

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
