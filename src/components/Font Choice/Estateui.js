import React ,{useState}from 'react'
import { MdOutlineKingBed } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { CiHeart } from "react-icons/ci";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Estateui() {
    const [active, setActive] = useState(false);


const like=()=>{
    setActive(!active)
}


    return (
        <div className="w-full h-screen">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mx-auto ">
                <div className="relative">
                     <CiHeart  className={`absolute right-1 top-1 w-8 h-8  text-white ${active?"":" "}`} onClick={like}/>
                    <img
                        className="h-60 w-full rounded-t-lg  "
                        src="Images\11.jpg"
                        alt=""
                    />
                </div>

                <div class="">
                    <div className="px-4 py-4">
                        <h1 className="text-base font-bold text-gray-600 py-1">
                           DETACHED HOUSE-3,426 SQFT
                        </h1>
                        <h3 className='text-2xl font-semibold text-gray-900 py-1'>
                            $1,250,000
                        </h3>
                        <h1 className="text-base text-gray-500 py-1">
                            742 Evergreen terrace
                        </h1>
                    </div>

                    <div className="border-t-2 w-full flex justify-around px-4 py-4 ">
                        <div className="flex">
                            <div><MdOutlineKingBed className="w-6 h-6 mx-1 text-slate-400" /></div>
                            <div className='flex'><p className='mx-1 font-bold'>2</p><p className='text-gray-500'>Bedrooms</p></div>
                        </div>
                        <div className="flex">
                            <div><LiaBathSolid className="w-6 h-6 mx-1 text-slate-400" /></div>
                            <div className='flex'><p className='mx-1 font-bold'>3</p><p className='text-gray-500'>Bedrooms</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='w-full flex justify-start bg-gray-200 '>
                            <div className="mt-2 ml-4 ">
                                <div className="flex space-x-3 justify-normal">
                                    <div className=" ">
                                        <img
                                            className="h-10 w-10 mt-2 rounded-full"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="">
                                        <div>
                                            <h1 className="text-base text-gray-800 py-1">Eren Lindford</h1>
                                            <p className="text-base  text-gray-500 py-1">{`(555)-765-4321`}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="sm:mx-auto sm:w-full sm:max-w-[480px] sm:rounded-b-lg bg-indigo-700 ">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center   px-3 py-5 text-sm font-bold sm:rounded-b-lg  font-sans leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    SCHEDULE SHOWING
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
