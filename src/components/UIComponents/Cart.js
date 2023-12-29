import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import CartItems from '../Seed/CartItems';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tweet(activityItems=CartItems) {
    return (
        <div className="w-full h-screen"> 
            <div className=" w-2/5  h-full ">
                <div className=''>
                {activityItems.map((item, index) => (
                    <div className="bg-white px-4 py-3 sm:px-6 border relative w-full mt-2 shadow-md shadow-gray-400">
                        <div className="flex space-x-3 items-center   w-full">
                    <div className=' w-1/3 flex  items-center'>
                            <div className="flex-shrink-0">
                                <img
                                    className="h-12 w-12 object-cover border "
                                    src={item.imageUrl}
                                    alt=""
                                />
                            </div>


                            <div className=" mx-3 ">
                                <div>

                                    <p className="text-xs font-medium text-gray-800  whitespace-nowrap">
                                        <a href="#" className="hover:underline">
                                            {item.name}
                                        </a>
                                    </p>

                                </div>

                                <div className="">

                                    <div>
                                        <p className=" text-gray-600 text-xs whitespace-nowrap">
                                            {item.description}
                                        </p>

                                    </div>
                                    <div></div>

                                </div>
                            </div>
                            </div>

                            <div className='flex items-center w-1/4 '>
                                <div className='flex items-center ml-8'>
                                <div><MinusIcon className='w-4 h-4 mx-1 text-gray-500' /></div>
                                <div>
                                    <div className='h-7 w-12 border-2'></div>
                                </div>
                                <div> <PlusIcon className='w-4 h-4 mx-1 text-gray-500' /></div>
                                </div>
                           

                            </div>
                            <div className='flex items-center w-1/4 '>

                                <div>
                                    <div className='px-8 text-gray-600'>
                                        {item.like}
                                    </div>
                                </div>


                            </div>
                            <div className='flex items-center w-auto'>

                                <div className='px-10'>
                                    <XMarkIcon className='w-4 h-4 text-gray-500' />
                                </div>


                            </div>


                        </div>

                    </div>

                ))}
                </div>
            </div>
        </div>
    )
}
