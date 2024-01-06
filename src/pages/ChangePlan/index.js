import React, { useState } from "react";
import data from "../../components/Seed/ChangePlansdata";
import { FaCheck } from "react-icons/fa6";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Dashboardbody({ dashview = data }) {
  const [activedash, setactivedash] = useState(null);

  const handleactivedash = (id) => {
    setactivedash(id);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 h-screen w-screen bg-[#f5f5fa]">
      <div className="flex justify-between items-center  w-3/6  py-4 border-b-2 border-gray-300">
        <h1 className="text-lg  text-[#284668]">Change Plan</h1>
        <h1 className="text-sm  text-[#4b6e91]">Cancel your Plan</h1>
      </div>
      <div className="w-full ">
        <ul
          role="list"
          className=" w-3/6 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4 mt-6 "
        >
          {dashview.map((person, index) => (
            <li
              key={person.email}
              className={`col-span-1   divide-y divide-gray-200 rounded-lg bg-white shadow-md ${
                index == activedash ? "border-2 border-[#4bc3a0]" : " "
              } `}
              onClick={() => handleactivedash(index)}
            >
              <div className="w-full items-center px-4 py-4">
                <div className="flex-1 truncate">
                  <div className="flex items-center justify-between space-x-3 px-2 py-1">
                    <h3 className="truncate text-[13px] font-bold text-gray-600 tracking-wider">
                      {person.name}
                    </h3>
                    {index == activedash && (
                      <div>
                        <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center">
                          <FaCheck className="w-3 h-3 text-green-900 " />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" px-2 py-1">
                  <h1 className="text-3xl text-gray-600 font-bold">
                    {`${person.Storage}`} <span className="text-xl">GB</span>
                  </h1>
                </div>
                <div className="px-2 ">
                  <h3 className="text-base font-semibold text-gray-500">
                    <span className="text-gray-500 font-bold">$</span>
                    <span className="text-gray-800 font-bold text-lg">
                      {person.cost}
                    </span>{" "}
                    / mo
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
