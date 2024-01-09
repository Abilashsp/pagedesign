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
      <div role="list" className="w-3/5 h-3/4 relative  mx-3 mt-3 rounded-md ">
        <div className=" w-full h-full   shadow-xl rounded-md">
          <div className="absolute inset-0 -z-10  h-full w-full  bg-[#dcf5f5]  ">
            <a href="#" className="">
              <span className="sr-only">Your Company</span>
              <img
                className="h-full w-3/5 object-cover  rounded-md opacity-35 "
                src="\Images\83.png"
                alt=""
              />
            </a>
          </div>

          <div className="w-full h-full flex justify-end items-center ">
            <div className="w-2 h-[365px] bg-[#c9e1e1] mt-24">
             </div>
            <div className=" w-3/5  h-3/6 ">
              <div className=" relative  h-24 flex items-end   ">
                <div className="absolute inset-0 -z-10  h-full w-full bg-[#1eb9f0]    ">
                  <img
                    className="h-full w-full object-cover opacity-10 text-gray-200"
                    src="\Images\80.png"
                    alt=""
                  />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-50 px-6 py-4">
                  About me
                </h1>
              </div>

              <div className="bg-white h-full px-6 py-6">
                <h1>
                Welcome to the world of software engineering! As a software engineer, you'll craft innovative solutions to real-world problems through code. Embrace the thrill of turning ideas into functional applications and enjoy the continuous learning journey in this ever-evolving field. Collaboration, problem-solving, and a passion for technology are your driving forces. Get ready to contribute to the digital landscape, where your coding skills transform possibilities into reality. Welcome to a dynamic and rewarding career in software engineering!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
