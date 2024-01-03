import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { BiLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import Restaurantdata from "../Seed/Restaurantdatas"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const stars = (noOfStar) => {
    const starComponents = [];
    for (let i = 0; i < 5; i++) {
      const starColor = i < noOfStar? "text-[#f5a440]" : "text-gray-400"; 
      starComponents.push(<StarIcon key={i} className={`text-xs w-5 h-5 ${starColor}`} />);
    }
    return <div className="flex">{starComponents}</div>;
  };


export default function Tweet({activityItems=Restaurantdata}) {
    return (
        <div className="w-full h-screen">
            <div className=" w-2/5 mx-auto mt-2">
                {activityItems.map((item,index) => (
                    <div className="bg-white px-4 py-5 sm:px-6 border relative">
                        <div className="flex space-x-3">
                          
                            <div className="min-w-0 flex-1">
                                <div>
                                    <p className="text-xl font-bold text-gray-700 py-1">
                                        <a href="#" className="hover:underline">
                                            {`${index+1}.${item.name}`}
                                        </a>
                                    </p>
                                    <p className="text-xs text-gray-700 font-semibold  flex items-center py-2">
                                        <a href="#" className="hover:underline">
                                        {index === 0 ? stars(5) : stars(4)}
                                        
                                        </a>
                                        <h3 className=" mx-2 text-base text-gray-500">{`${item.like} Reviews`}</h3>
                                    </p>
                                </div>
                                <div className="py-1">
                                   {item.description.map((e)=>(
                                    <div>
                                        <p className=" text-gray-600 text-base">
                                     {e}
                                   </p>
                                   
                                    </div>    
                                   ))} <div></div>
                                   
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <img
                                    className="h-40 w-40 rounded-md"
                                    src={item.imageUrl}
                                    alt=""
                                />
                            </div>


                        </div>
                        
                    </div>

                ))}
            </div>
        </div>
    )
}
