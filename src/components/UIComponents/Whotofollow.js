
import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import infodata from '@/components/Seed/infodata';

export default function Whotofollow({info=infodata }) {

    return (

        <div className="flex min-h-full flex-1 flex-col  py-6 sm:px-6 lg:px-8">

            <div className="  sm:w-full sm:max-w-[350px] ">
                <div className="  shadow sm:rounded-b-lg ">
                    <div className="bg-white w-full px-5 py-5  ">
                        <div className="flex items-baseline justify-between">
                            < h1 className="text-base text-gray-700 font-medium">Who to Follow</h1>
                            <div className="flex items-center">
                                <div className="text-base text-[#419bbe] font-semibold px-2">View all</div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-gray-50 w-full px-4 py-2  ">
                        <div className="">
                            {info.map((information) => (
                                <div className="flex items-center px-2 py-3  border-gray-300">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={information.imageurl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex-grow mx-6">
                                        <div className="text-base text-gray-700 font-bold">{information.Name}</div>
                                        <div className="text-gray-500 text-sm">{`${information.userid}`}</div>
                                    </div>
                                    <div className="flex-shrink-0 mx-6 font-bold">
                                        <CiCirclePlus className='w-6 h-6  text-gray-600 ' />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>






                </div>

            </div>


        </div>
    )
}







