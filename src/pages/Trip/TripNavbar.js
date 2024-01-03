import React,{useState} from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {navigation} from "../../components/Seed/Tripdata"



export default function TripNavbar() {
    const [active, setactive] = useState("Features");
  return (
    <div>
         <nav
          className="mx-auto flex w-full items-center h-20  p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              alt=""
              className="absolute inset-0 -z-10  h-1/2 w-full object-cover"
            />
          </div>
          <div className="flex lg:flex-1 items-center mx-6 ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src="\Images\41.png" alt="" />
            </a>
            <div className="hidden lg:flex lg:gap-x-12 mx-7 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => activelink(item.name)}
                  className={` font-bold ${
                    active === item.name
                      ? "text-blue-700 text-lg font-semibold leading-6"
                      : "text-lg font-semibold leading-6 text-gray-50 "
                  } `}
                >
                  {item.name}
                </a>
              ))}
            </div>
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <div className="mx-4">
              <div className="text-lg font-semibold text-gray-50">Trips</div>
            </div>
            <div className="mx-4">
              <div className="text-lg font-semibold text-gray-50">Sign Up</div>
            </div>
          </div>
        </nav>
    </div>
  )
}
