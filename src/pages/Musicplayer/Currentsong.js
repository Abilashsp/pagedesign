import React from 'react'

export default function Currentsong() {
  return (
    <div className="relative">
                        <div className="w-full h-16 rounded-lg  px-6 py-4 flex justify-between items-center absolute bottom-0   bg-white ">
                            <div className="flex  items-center">
                                <div>
                                    <img
                                        className="h-10 w-10 "
                                        src="\Images\19.png"
                                        alt=""
                                    />
                                </div>
                                <div className="mx-2">
                                    <div className="text-red-500 text-sm font-bold">
                                        Play
                                    </div>
                                    <div className="text-gray-600 text-sm font-bold">
                                        Ep101 :Donald Long
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                            </div>
                        </div>
                    </div>
  )
}
