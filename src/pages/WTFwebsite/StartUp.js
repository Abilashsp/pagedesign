import React from "react";

export default function StartUp() {
  return (
    <div className=" bg-white">
      <div className="flex flex-col items-center justify-center font-WTfont">
        <div>
          <img className="h-56 w-56" src="\Images\Group_13.svg" alt="" />
        </div>
        <div>
          <h1 className="text-7xl font-bold text-[#2E3F7F] text-center py-3 font-Startup">
            Startups & MVP
          </h1>
          <h2 className="text-2xl text-[#757780] text-center py-3">
            We turn your amazing idea into a ready-made application
          </h2>
        </div>
        <div className="flex items-center py-8 "> 
          <div className=" w-auto mx-3">
            <button
              type="button"
              className="rounded-3xl bg-[#136ff1] text-white  px-12 py-4 text-sm font-medium   shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              ALL SERVICES
            </button>
          </div>
          <div className=" w-auto mx-3 ">
            <button
              type="button"
              className="rounded-3xl  px-12 py-4 text-sm  text-[#136ff1] font-medium  border border-gray-800 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              GET A QUOTES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
