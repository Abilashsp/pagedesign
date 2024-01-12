import React from "react";

export default function () {
  return (
    <div className="w-full h-auto flex justify-center  bg-white ">
      <div className="w-[1127px] h-[440px]  rounded-3xl relative flex items-center justify-center ">
        <div className="absolute inset-0 z-10  h-full w-full    ">
          <a href="#" className="">
            <span className="sr-only">Your Company</span>
            <img
              className="h-full w-full object-fill  rounded-3xl "
              src="\Images\Contract\divwrapper.svg"
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center text-center z-20 ">
          <h1 className="w-[471px] h-[69px] text-white  text-[42px] font-bold">
            Have more questions?
          </h1>
          <h2 className="w-[763px] h-[56px] text-white text-[20px] py-4 ">
            If you have any additional questions or would like to discuss our
            Startups & MVP service in further detail, just contact us or
            schedule a free consultation.
          </h2>
          <div className="flex items-center py-12 ">
            <div className=" w-auto mx-3">
              <button
                type="button"
                className="rounded-3xl bg-[#136ff1] text-white  px-12 py-4 text-sm font-medium   shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                CONTACT US
              </button>
            </div>
            <div className=" w-auto mx-3 ">
              <button
                type="button"
                className="rounded-3xl bg-white px-8 py-4 text-sm  text-[#136ff1] font-medium  border border-gray-800 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
