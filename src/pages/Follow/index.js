
import { followersinfo } from "@/components/Seed/Followersdata"




export default function Follow({info=followersinfo}) {
    
    const lastIndex=info.length-1
    return (
        <>
            <div className="flex h-screen flex-1 flex-col  bg-slate-100  ">

                <div className=" sm:w-full sm:max-w-[480px] rounded-xl">
                    <div className="  shadow sm:rounded-xl ">
                        <div className="bg-white w-full px-5 py-5 rounded-t-xl ">
                            <div className="flex items-baseline justify-between">
                                < h1 className="text-2xl text-gray-800 font-bold">Who to Follow</h1>
                                <div className="flex items-center">
                                    <div className="text-lg text-sky-500 font-semibold px-2">Refresh</div>
                                    <div className="w-1 h-1 rounded-full mt-2 bg-gray-500"></div>
                                    <div className="text-lg text-sky-500 font-semibold px-2">See all</div>
                                </div>

                            </div>
                        </div>

                        <div className="bg-gray-50 w-full px-4 py-8  rounded-xl ">
                            <div className="">
                                {info.map((information,index) => (
                                    <div className={`flex items-center px-2 py-3 ${index!==lastIndex?" border-b border-gray-300":" "} `}>
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-16 w-16 rounded-full"
                                                src={information.imageurl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-grow mx-6">
                                            <div className="text-lg text-gray-700 font-bold">{information.Name}</div>
                                            <div className="text-gray-500">{`${information.mutual} Mutual friends`}</div>
                                        </div>
                                        <div className="flex-shrink-0 mx-6">
                                            <button
                                                type="button"
                                                className="rounded-2xl bg-gray-100 text-base font-bold border-gray-500 px-6 py-1 border text-gray-600 shadow-sm hover:bg-white/20"
                                            >
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>






                    </div>

                </div>


            </div>
        </>
    )
}
