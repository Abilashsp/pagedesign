import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Menubuttons from "@/components/Seed/NavigationMenuitems";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import {
  navigationDropDownDetails,
  additionaldetails,
} from "../../components/Seed/NavigationDropdowndata";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  data = navigationDropDownDetails,
  additionaldata = additionaldetails,
  menu = Menubuttons,
}) {
  const [itemid, setitemid] = useState(null);

  const activenav = (id) => {
    setitemid(id);
  };

  console.log(itemid);

  return (
    <div className="w-screen h-screen">
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="w-full bg-gray-200  ">
              <div className="flex h-16   ">
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {menu.map((m, index) => (
                  <div className="hidden lg:ml-4 lg:flex lg:items-center ">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0 mr-2">
                      <div className="">
                        <Menu.Button
                          className={`relative flex  rounded-full  text-lg  focus:outline-none ${
                            itemid === index
                              ? "text-blue-500 font-bold "
                              : " text-blue-900 font-semibold"
                          }  `}
                          onClick={() => activenav(index)}
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <div
                            className="px-6"
                           
                          >
                            {m.Name}
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute  z-10 mt-6 w-[900px] origin-top-right rounded-lg bg-white  shadow-lg  shadow-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="  grid lg:grid-cols-2 sm:grid-cols-2 py-3">
                            {data
                              ? data?.map((d, index) => (
                                  <div className="px-4 py-3">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <div
                                          className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-1 text-sm text-gray-800 font-semibold"
                                          )}
                                        >
                                          <div className="flex">
                                            <div className="px-1">
                                              <d.Icons className="w-6 h-6 text-[#0f87c8]" />
                                            </div>
                                            <div className="px-2">
                                              <div className="flex items-center">
                                                <h1 className="text-lg font-semibold text-[#2d5f91] ">
                                                  {d.Name}
                                                </h1>
                                                {index == 0 && (
                                                  <div className="px-3 py-0.5 bg-[#ffc364] rounded-full mx-3 flex items-start justify-center">
                                                    <span className="text-xs font-medium text-[#846027]">
                                                      NEW
                                                    </span>
                                                  </div>
                                                )}
                                              </div>
                                              <h2 className="text-base text-gray-500 font-normal ">
                                                {d.Desc}
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </Menu.Item>
                                  </div>
                                ))
                              : null}
                          </div>
                          <div className="px-5 py-8 bg-[#f5f5fa] rounded-b-md ">
                            {additionaldata
                              ? additionaldata.map((details) => (
                                  <div className="flex items-center px-4 py-3">
                                    <div className="">
                                      <details.Icons className="w-6 h-6 text-[#0f87c8]" />
                                    </div>
                                    <div className="px-2">
                                      <h1 className="text-lg font-semibold text-[#2d5f91] ">
                                        {details.Name}
                                      </h1>
                                    </div>
                                    <div className="px-2">
                                      <h2 className="text-base text-gray-500 font-normal">
                                        {details.Desc}
                                      </h2>
                                    </div>
                                  </div>
                                ))
                              : null}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ))}
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className=" h-full w-full ">
        <div className="px-4 py-4 bg-[#e7e8ef] h-full"></div>
      </div>
    </div>
  );
}
