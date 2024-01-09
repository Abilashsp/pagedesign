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
    <div className="w-screen h-screen  bg-white">
      <div
        role="list"
        className="w-3/5 h-3/5 relative  mx-3  rounded-md bg-[#f0f0f5] "
      >
        <div>
          <div className=" px-12 py-4 ">
            <div className="flex items-center border-b-2 py-4">
              <div>
                <img
                  className="h-8 w-8 object-cover "
                  src="\Images\84.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="px-3 text-lg font-bold">ChitChat</h1>
              </div>
            </div>
          </div>

          <div className="  px-12 py-12">
            <div>
              <h1 className="text-4xl">A better way to speak</h1>
              <h1 className="text-4xl text-[#2985b0]">with your customers</h1>
              <h2 className="textt-lg text-gray-500 w-2/5 py-4">
                An easy to use chat button on your website that allows you to
                answer questions from
                An easy to use chat button on your website that allows you to
                answer questions from
                An easy to use chat button on your website that allows you to
                answer questions from
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
