import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { PlusIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";


import DiscountNavdata from "../../components/Seed/DiscountUIdetails";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Bowenav({ navigation = DiscountNavdata }) {
  return (
    <div className="hidden  lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col h-full">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#376e87] rounded-l-md ">
        <div className="flex bg-[#23556e] w-full px-2   items-center ">
          <img className="h-16 w-24" src="/Images/74.png" alt="" />
        </div>
        <nav className="flex flex-1 flex-col px-6 pb-4 ">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-800 text-white"
                          : "text-gray-100 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0 text-gray-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
