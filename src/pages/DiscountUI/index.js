import { Fragment, useState } from "react";
import Bowenav from "./DiscountNavBar";
import { TbTag } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-screen h-screen overflow-hidde">
      <div className="w-7/12 h-4/5 flex  mt-2 mx-2">
        <div className=" mx-auto w-full bg-white h-4/5 flex rounded-md shadow-lg shadow-gray-400">
          <div className="h-full ">
            <Bowenav />
          </div>
          <div className="w-full h-full relative">
            <div className=" h-full  absolute right-0  overflow-hidden">
              <TbTag className="w-96 h-4/5 ml-[30%] mt-10 text-gray-300  " />
            </div>

            <div className="px-4 py-4 h-full flex items-center">
                <div className="px-6 ">
              <div className=" w-4/5">
                <h1 className="text-3xl py-2  tracking-wide  text-gray-700">Create a discount code</h1>
                <h2 className="text-lg  tracking-wide text-gray-500 font-normal leading-6">Increase sales by offering discounts to your customers</h2>
              </div>
              <div className="py-8 mt-2">
                <button
                  type="button"
                  className="rounded-md bg-[#376e87] px-7  py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                Create discount
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
