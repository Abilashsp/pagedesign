import React from "react";
import instructiondetails from "../../components/Seed/InstructionwithBluedata";

export default function index({ data = instructiondetails }) {
  return (
    <div className="h-screen w-screen">
        <div className="w-4/5 bg-[#2d5f9b]">
      <div  className=" px-5 py-4 ">
        <div className=" px-4 text-gray-50 text-3xl font-bold">Detail we're sweating</div>
      </div>

      <div className="  grid lg:grid-cols-2 sm:grid-cols-2 py-3 px-4  ">
        {data
          ? data?.map((d, index) => (
              <div className="px-4 py-4 w-9/12 ">
                <div>
                  <div className="flex ">
                    <div className="px-1">
                      <d.icon className="w-10 h-20 text-gray-200" />
                    </div>
                    <div className="px-4">
                      <div className="flex items-center">
                        <h1 className="text-xl font-semibold text-gray-50 ">
                          {d.Tittle}
                        </h1>
                      </div>
                      <h2 className="text-lg text-[#a5cde5] font-normal  py-1">
                        {d.desc}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      </div>
    </div>
  );
}
