import React from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function navbar({navigation}) {
    const [active, setactive] = useState(null);


    const activelink = (id) => {
      setactive(id)
    }
  
  return (
    <header className="bg-white w-full mx-auto  rounded-t-lg">
    <nav className="mx-auto flex max-w-4xl items-center justify-between p-3 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-12 w-auto" src="/Images/09.png" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} onClick={() => activelink(item.name)} className={` font-bold ${active === item.name ? "text-blue-700 text-lg font-semibold leading-6" : "text-lg font-semibold leading-6 text-gray-500 "} `}>
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">

      </div>
    </nav>
  </header>
  )
}
