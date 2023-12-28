import { useState } from 'react'
import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'



function classNames(...clas){
    return clas.filter(Boolean).join(' ')
}


export default function GamesummaryUItabs({SectionNavigation,activatedtab}) {
    const [active, setactive] = useState("Canada");

    const activelink = (id) => {
        setactive(id)
        activatedtab(id)
    }



  return (
    <div> <Disclosure as="nav" className="border-gray-200 bg-gray-100">
    {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl  border-b-2 border-gray-300 px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex  ">

                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8  border-gray-300  ">
                            {SectionNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        active == item.name
                                            ? 'border-gray-600 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        `inline-flex items-center border-b-2 px-1 pt-1  font-medium border-gray-300 `
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    onClick={() => activelink(item.name)}
                                >
                                    <div className="flex justify-center items-center">
                                        <div> <div className=" mx-1">
                                            <img
                                                className="h-5 w-10 rounded-lg"
                                                src={item.imgsrc}
                                                alt=""
                                            />
                                        </div></div>
                                        <div className="text-lg">{item.name}</div>

                                    </div>

                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )}
</Disclosure></div>
  )
}
