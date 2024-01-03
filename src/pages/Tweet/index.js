import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import activityItems from '@/components/Seed/ActivityItems';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tweet({activities=activityItems}) {
    return (
        <div className="w-full h-screen">
         
                {activities.map((item) => (
                    <div className="bg-white px-4 py-5 sm:px-6 border-2 relative">
                        <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={item.imageUrl}
                                    alt=""
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div>
                                    <p className="text-sm font-bold text-gray-900 py-1">
                                        <a href="#" className="hover:underline">
                                            {item.name}
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-700 font-semibold ">
                                        <a href="#" className="hover:underline">
                                           {item.role}
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <p className="py-1 text-gray-600">
                                      {item.description}
                                    </p>
                                </div>

                                <div className="flex ">
                                    <div className="flex  py-2 justify-center items-center">
                                        <div className=' py-2 text-xl'><BiLike className=" text-gray-500" /></div>
                                        <div className='px-3 py-2'>{item.like}</div>
                                    </div>
                                    <div className="flex px-4 py-2 justify-center items-center">
                                        <div className='py-2 text-xl'><MdOutlineModeComment className=" text-gray-500"  /></div>
                                        <div className='px-3 py-2'>{item.comment}</div>
                                    </div>
                                    <div className="flex px-4 py-2 justify-center items-center">
                                        <div className=' py-2 text-xl'><FiShare className=" text-gray-500" /></div>
                                        <div className='px-3 py-2'>share</div>
                                    </div>
                                </div>


                            </div>


                        </div>
                        <div className='absolute top-4 right-2 text-sm text-gray-500 font-semibold '>{item.date}</div>
                    </div>

                ))}
            </div>
    
    )
}
