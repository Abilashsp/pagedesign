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
      <div className="bg-white mx-3 mt-3 h-auto w-[340px] rounded-lg shadow-2xl  ">
        <div className=" h-full">
          <div className="py-6  px-8">
            <h1 className="text-center text-xl px-6 font-semibold">
              Powering the businesses all over the globe
            </h1>
          </div>

          <div className="flex-shrink-0 relative">
            <img className="h-40 w-full object-cover" src="/Images/77.jpeg" alt="" />
          </div>

          <div>
            <h2 className="text-center py-6  px-5 text-gray-500  ">
              With offices in 6 different countries,<br/>
               we're able to provide
              support 24 hours a day,7 days a week.
            </h2>
          </div>
          <div className="w-full ">
            <button
              type="button"
              className=" w-full bg-[#f0f5fa] rounded-b-md px-3.5 py-5 text-sm tracking-widest font-bold leading-none  text-[#3c6eaa] shadow-sm  ring-inset ring-gray-300 hover:bg-gray-50"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
