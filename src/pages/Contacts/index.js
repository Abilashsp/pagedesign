import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Contactdata from "../../components/Seed/Contactdetails";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function abel({ data = Contactdata }) {
  return (
    <div className="w-full h-screen ">
      <div className="bg-white mx-3 mt-3 h-auto w-2/6 rounded-lg shadow-2xl  ">
        <div className=" h-full">
          <div>
            <h1 className="text-2xl px-6 py-3">Contacts</h1>
          </div>
          <div className="w-full px-3">
            <form
              className="relative flex w-full py-2 h-16 "
              action="#"
              method="GET"
            >
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-3 top-0 h-full w-6 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block  w-full  h-full  bg-[#ebf0f0]  rounded-md   border pl-10  text-gray-900 placeholder:text-gray-500 placeholder:text-base sm:text-sm"
                type="search"
                name="search"
                placeholder="Search teams or members"
              />
            </form>
          </div>
          {data.map((d, index) => (
            <div
              className={`flex items-center justify-between px-6 py-2 mb-2 border-gray-300 ${
                index == 1 ? "bg-[#ebf5fa]" : ""
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full ${
                    d.active == true ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`px-4 text-lg  font-medium  ${
                    index == 1 ? "text-[#2866ad]" : "text-gray-700"
                  }`}
                >
                  {d.Name}
                </div>
              </div>
              <div className="text-base text-gray-600">{d.Role}</div>
            </div>
          ))}
          <div className="py-4 rounded-b-md bg-[#ebf0f0] h-auto flex justify-end px-4 ">
            <button
              type="button"
              className="rounded-md  px-3.5 py-2.5 text-lg font-semibold text-gray-500 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Cancel
            </button>{" "}
            <button
              type="button"
              className="rounded-md bg-[#286ec3] px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
