import {
  EnvelopeIcon,
  PhoneIcon,
  ArrowRightIcon,
  MapIcon,
  MapPinIcon,
  UserPlusIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Check } from "react-hero-icon/outline";

export default function Example() {
  const instruction = () => {
    return (
      <div className="w-full flex   mx-auto  justify-between">
        {[...Array(3)].map((_, index) => (
          <div key={index} className=" w-1/4  flex flex-col">
            <div className="w-8 h-8 bg-gray-300 rounded-full my-1"></div>
            <div className="w-6/12 h-2 bg-gray-300 mx-1 rounded-3xl my-1"></div>
            <div className="w-4/6 h-1 bg-gray-300 mx-1 rounded-3xl my-1"></div>
            <div className="w-4/5 h-1 bg-gray-300 mx-1 rounded-3xl my-1"></div>
            <div className="w-4/6 h-1 bg-gray-300 mx-1 rounded-3xl my-1"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-screen h-full bg-white flex  items-center justify-center ">
      <div role="list" className="w-3/5 mx-auto ">
        <div className=" w-full h-full  bg-white  relative  border  border-gray-300  ">
          <div className="bg-[#5a69dc] px-8 py-2">
            <header>
              <nav className="flex justify-between  py-6">
                <div className="flex items-center ">
                  <div className="w-8 h-8 bg-white rounded-full "></div>
                  <div className=" w-10 h-1 bg-gray-50 mx-2"></div>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className=" w-8 h-1 bg-gray-300 mx-2"></div>
                    <div className="w-16 h-4 bg-gray-300 flex items-center justify-center rounded-sm opacity-40">
                      <div className=" w-8 h-1 bg-white mx-2  "></div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>

            <div className="w-full   ">
              <div className=" w-4/5 mx-auto  py-10  ">
                <div className="flex flex-col items-center py-2">
                  <div className=" w-2/5 h-2 bg-gray-300 mx-2 rounded-3xl my-1"></div>
                  <div className=" w-3/5 h-2 bg-gray-300 mx-2 rounded-3xl my-1"></div>
                </div>
                <div className="flex flex-col items-center py-2 ">
                  <div className=" w-2/4 h-2 bg-[#96d8f5] mx-2 rounded-3xl my-1"></div>
                  <div className=" w-2/6 h-2 bg-[#96d8f5] mx-2 rounded-3xl my-1"></div>
                </div>
                <div className="flex flex-col items-center  py-2">
                  <div className=" w-44 h-10 bg-[#fadca0] mx-2 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center  bg-white py-8 px-8 ">
            <div className="w-3/5">
              <div className="flex flex-col  py-2 w-full  ">
                <div className=" w-3/5 h-2 bg-gray-900 rounded-3xl my-1"></div>
                <div className=" w-6/12 h-2 bg-gray-900 rounded-3xl my-1"></div>
                <div className=" w-7/12 h-2 bg-gray-300  rounded-3xl my-1"></div>
                <div className=" w-8/12 h-2 bg-gray-300  rounded-3xl my-1"></div>
                <div className=" w-7/12 h-2 bg-gray-300  rounded-3xl my-1"></div>
                <div className="flex items-center">
                  <div className=" w-3 h-3 bg-[#919be1]  rounded-full my-1"></div>
                  <div className=" w-2/6 h-2 bg-gray-300 mx-1  rounded-3xl my-1"></div>
                </div>
                <div className="flex items-center">
                  <div className=" w-3 h-3 bg-[#919be1]  rounded-full my-1"></div>
                  <div className=" w-2/5 h-2 bg-gray-300 mx-1 rounded-3xl my-1"></div>
                </div>
                <div className="flex items-center">
                  <div className=" w-3 h-3 bg-[#919be1]  rounded-full my-1"></div>
                  <div className=" w-2/6 h-2 bg-gray-300 mx-1 rounded-3xl my-1"></div>
                </div>
                <div className=" w-2/6 h-1 bg-[#5a69dc]  rounded-3xl my-1"></div>
              </div>
            </div>

            <div>
              <div className=" w-56 h-56 bg-gray-300  rounded-full my-1"></div>
            </div>
          </div>

          <div className="w-full bg-gray-800 py-8 px-8">
            <div className="w-full">
              <div className="flex flex-col items-center py-2">
                <div className=" w-2/6 h-2 bg-gray-300 mx-2 rounded-3xl my-1"></div>
                <div className=" w-3/6 h-2 bg-gray-300 mx-2 rounded-3xl my-1"></div>
              </div>
              <div className="w-full py-2">{instruction()}</div>
            </div>
          </div>

          <div className="  bg-[#e6ebf0] py-8 px-8">
            <div className="flex flex-col  py-2 w-full  ">
                <div className="pb-10">
              <div className=" w-5/12 h-2 bg-gray-700 rounded-3xl my-2"></div>
              <div className=" w-6/12 h-2 bg-gray-300 rounded-3xl my-1"></div>
              <div className=" w-6/12 h-2 bg-gray-300 rounded-3xl my-1"></div>
              </div>
              <div className="flex ">
                <div className="w-1/2">
                  <div>
                    <div className=" w-3/12 h-2 bg-gray-300  rounded-3xl my-2"></div>
                    <div className=" w-4/5 h-10 bg-white border-2 border-gray-400 rounded-md my-1"></div>
                  </div>
                  <div>
                    <div className=" w-3/12 h-2 bg-gray-300  rounded-3xl my-2"></div>
                    <div className=" w-4/5 h-10 bg-white border-2 border-gray-400  rounded-md my-1"></div>
                  </div>
                </div>

                <div className="w-1/2">
                  <div className=" w-3/12 h-2 bg-gray-300  rounded-3xl my-1 "></div>
                  <div className=" w-/12 h-56 bg-white border-2  border-gray-400 my-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
