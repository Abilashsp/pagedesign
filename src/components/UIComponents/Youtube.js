import youtubedata from "@/components/Seed/Youtubedata"
export default function Tweet() {
    return (
        <div className="w-full h-screen">
            <div className=" w-4/5  h-full">

                <div className="bg-white px-2 py- w-full  h-auto sm:px-6 relative ">
                    <div>
                        <ul role="list" className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 ">
                            {youtubedata.map((person) => (
                                <li key={person.email} className="col-span-1  bg-white ">
                                    <div className="w-full items-center px-1 py-2">
                             <div className="flex-shrink-0 relative">
                                <img
                                    className="h-44 w-full rounded-md"
                                    src={person.image}
                                    alt=""
                                />
                                <div className="absolute right-3 bottom-3 bg-[#49453f] bg-opacity-70 px-1 py-1  flex items-start"> <span className="px-1 text-white font-semibold text-xs ">{person.duration}</span></div>
                                </div>
                                        
                                    </div>
                                    <div>
                                        <div className="w-full items-center px-1 py-1 ">
                                         <div className="text-gray-900 font-semibold text-base ">
                                            {person.tittle}
                                         </div>
                                        </div>
                                        <div className="w-full items-center px-1 py-1">
                                         <div className="text-gray-800 font-semibold text-base ">
                                            {person.channelname}
                                         </div>
                                         {/* <div className="text-gray-500 font-semibold text-sm hover:underline cursor-pointer ">
                                            {person.channelname}
                                         </div> */}
                                         <div className="flex items-center  ">
                                         <div className="text-gray-500 font-semibold text-sm ">
                                            {`${person.views}K views`}
                                         </div>
                                         <div className="w-1 h-1 rounded-full bg-gray-400 mx-1 mt-1"></div>
                                         <div className="text-gray-500 font-semibold text-sm py-1 ">{`${person.time} ago`}</div>
                                         </div>
                                        </div>
                                    </div>
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>


            </div>
        </div>
    )
}
