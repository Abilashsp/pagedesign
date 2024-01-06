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

export default function Example() {
  return (
    <div className="w-screen h-screen ">
      <div role="list" className="w-2/5 h-[270px] relative  mx-3 mt-3 rounded-md ">
        <div className=" w-full h-full   shadow-xl rounded-md">
        <div className="absolute inset-0 -z-10  h-full w-full   " >
                    <a href="#" className="">
                        <span className="sr-only">Your Company</span>
                        <img className="h-full w-full object-fill rounded-md " src="\Images\75.png" alt=""  />
                    </a>

                </div>
          <div className="py-8">
          <div >
                <h1 className="block text-3xl text-center font-semibold  text-gray-800 py-1">Join our newletter</h1>
                <h1 className="block text-xl text-center font-normal text-gray-500 py-2">Sign Up for newsletter to get new reviews each week.</h1>
              </div>
            <div className="flex  py-4 items-center w-full h-full ml-28">
              <div className=" w-2/5 ">
                <div className=" ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-l-md  border-2  py-2.5 px-4 text-gray-900  ring-inset  placeholder:text-gray-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className=" ">
                <button
                  type="button"
                  className=" bg-[#3c91e6] px-6 rounded-r-md tracking-wide py-2.5 text-base font-normal text-white  border-b-gray-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
