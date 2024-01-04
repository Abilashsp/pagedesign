import React from 'react'
import Trendings from "../../components/Seed/Trendingdata"

export default function Trending({trending=Trendings}) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8">
            <div className=" sm:mx-auto sm:w-full sm:max-w-[350px] ">
                <div className="  shadow sm:rounded-b-lg ">
                    <div className="bg-white w-full px-5 py-5  ">
                        <div className="flex items-baseline justify-between">
                            < h1 className="text-base text-gray-700 font-medium">Trending News</h1>
                            <div className="flex items-center">
                                <div className="text-base text-[#419bbe] font-semibold px-2">View all</div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-gray-50 w-full px-4 py-2  ">
                        <div className="">
                            {trending.map((information) => (
                                <div className="flex items-center px-2 py-3  border-gray-300">

                                    <div className="flex-grow ">
                                        <div className="text-base text-[#5f9cb6] font-bold">{information.title}</div>
                                        <div className="text-gray-500 text-sm">{`${information.tweets} posts`}</div>
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





















