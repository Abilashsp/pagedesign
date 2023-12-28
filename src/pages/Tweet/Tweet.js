import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const activityItems = [
    {

        name: 'Amanda Wagner',
        imageUrl:  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: '  Join us on November 27th tor our 1st Dribbble meetup in Waterloo! Cauing al designers, UV/UXers, iUstaiors and other creatives from the KW and sunouneing area together to talk shop, ingle, and walk away with some great swegl',
        role: 'Human Resources',
        like: 45,
        comment: 17,
        date: '8h ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Kimberly Kennedy',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: "Had an inspiring bwo cays ar leteTal ho learaho from the best design thinkers in the biz. Can't wait te start plaving with some oreat new ideas",
        role: 'Sr. Front-End Developer',
        like: 11,
        comment: 2,
        date: '45 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    {

        name: 'Adam Henderson',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        description: "Had an inspiring bwo cays ar leteTal ho learaho from the best design thinkers in the biz. Can't wait te start plaving with some oreat new ideas",
        role: 'Product designer',
        like: 34,
        comment: 8,
        date: '17 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    
]



































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
                        <div className='absolute top-4 right-2 text-sm text-gray-500 font-semibold'>{item.date}</div>
                    </div>

                ))}
            </div>
    
    )
}
