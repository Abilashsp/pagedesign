import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { Exclamation } from 'react-hero-icon/solid';
import { ExclamationCircle } from 'react-hero-icon/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}






export default function Tweet() {
    return (
        <div className="w-full h-screen"> 
            <div className=" w-2/5 mx-auto h-full  py-32">
                <div className=' border-l-4 border-[#67a1e5]'>
         
                    <div className="bg-[#f0f5ff] px-5 py-3 sm:px-5 border relative w-full mt-2 shadow-md shadow-gray-400 ">
                        <div className='flex items-center'>

                        <div>
                            <div>
                                <ExclamationCircle className="w-5 h-5 text-[#67a1e5]"/>
                            </div>

                        </div>

                        <div>
                            <h1 className='mx-2 text-sm font-medium  text-gray-800 '>
                                Pro user feature

                            </h1>
                    
                        </div>
                       
                

                    </div>
                    <div className='px-5 py-1'>
                    <h2  className=' text-xs leading-6  font-medium text-gray-500  px-2'>
                              This is feature available to the pro user at an additional cost.Check out our <span className='text-[#468ce1] underline'>pricing information</span>   to learn more and activate free trial.
                            </h2>
                    </div>
                    </div>

            
                </div>
            </div>
        </div>
    )
}
