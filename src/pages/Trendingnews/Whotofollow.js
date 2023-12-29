
import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


const Dummydata = [
    { Name: "Amber Matthews", userid: "@ambermatthews", imageurl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "6" },
    { Name: "Russell Robertson", userid: "@russellrobertson", imageurl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" },
    { Name: "Kathleen Ellis", userid: "@kathleenellis", imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", mutual: "2" }
]







export default function Whotofollow({info=Dummydata }) {

   
  

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







