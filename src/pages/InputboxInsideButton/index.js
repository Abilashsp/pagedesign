import {
  EnvelopeIcon,
  PhoneIcon,
  ArrowRightIcon,
  MapIcon,
  MapPinIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Mail } from "react-hero-icon/outline";

export default function Example() {
  return (
    <div className="w-screen h-screen ">
      <div
        role="list"
        className="w-2/5 h-[200px] relative flex justify-center items-center  mx-3 mt-3 rounded-md bg-[#415069] "
      >
        <div className=" w-full h-full shadow-xl rounded-md ">
          <div className="py-8  w-full   ">
            <div className="flex  py-2 items-center w-full h-full">
              <div className=" w-4/6 mx-auto ">
                <div className=" ">
                  <h1 className="block  text-base text-left font-semibold py-2 text-gray-200 tracking-wider ">
                    Join our newletter
                  </h1>
                </div>
                <div className="relative">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md  border-2 pl-14 py-3.5 px-4 text-gray-900  ring-inset  placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your email address "
                    />
                    <div className=" absolute top-3 left-3">
                      <Mail className="w-7 h-8 text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-3">
                    <button
                      type="button"
                      className=" bg-[#3c91e6] px-8 rounded-md tracking-wide py-2 text-base font-medium text-white  border-b-gray-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
