import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";

export default function Example() {
    return (
        <div className="w-screen h-screen ">
            <div role="list" className="w-2/5 h-[270px]  ">
                <div className=" w-full h-full  bg-[#464b5a] shadow-xl relative rounded-md" >
                    <div className='py-8'>
                    <div className='flex  py-4 items-center w-full h-full ml-20'>
                        <div className=' w-3/5 '>
                            <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-50">
                                Join our newletter
                            </label>
                            <div className="mt-2 rounded-md border-b-2 border-b-gray-500">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md bg-[#3c4150]  shadow-inner shadow-gray-800  py-3 px-4 text-gray-900  ring-inset  placeholder:text-gray-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className='mt-8 mx-2'>
                            <button
                                type="button"
                                className="rounded-md bg-[#5a69fa] px-6 tracking-wide py-3.5 text-base font-semibold text-white shadow-md shadow-gray-700 border-b-2 border-b-gray-700 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative flex gap-x-3 px-20  my-2">
                                            <div className="flex h-7 items-center shadow-md shadow-gray-600 rounded-sm">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="  appearance-none h-8 w-8  rounded  bg-[#3c4150]  shadow-inner   shadow-gray-800  text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="block text-lg  leading-6 text-gray-200">
                                                    Send me the Occasional promotional emails
                                                </label>

                                            </div>
                                        </div>

                
                    </div>

                </div>

            </div>
        </div>
    )
}
