import React from 'react'

export default function Gamesummaryscore() {
    return (
        <div className="bg-white  border-2  shadow-xl  relative rounded-r-lg">
            <div className='w-full h-10  bg-gray-200 flex items-center' >
                <h1 className="px-4 font-semibold text-gray-600">SCORING</h1>
            </div>
            <div className="flex space-x-3">
                <div className="flex-shrink-0 px-2 py-2">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <div className="min-w-0 flex-1 px-2 py-2">
                    <div>
                        <p className="text-base font-bold text-gray-800 ">
                            <a href="#" className="hover:underline">
                                Danial
                            </a>
                        </p>
                        <p className="text-sm text-gray-600 font-semibold ">
                            <a href="#" className="hover:underline">
                                Json chapmam,jake sulivan
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="py-1 text-gray-600">
                            11:20/1st
                        </p>
                    </div>



                </div>


            </div>

        </div>
    )
}
