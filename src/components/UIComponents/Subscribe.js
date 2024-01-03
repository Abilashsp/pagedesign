import React from 'react'

export default function Subscribe() {
  return (
    <div className=" mx-auto w-1/5 h-full flex items-center  ">

    <div className="h-16 w-16 bg-white flex justify-center items-center rounded-md ">
        <img
            className="h-14 w-14 "
            src="\Images\20.png"
            alt=""
        />
    </div>
    <div className='mx-5 items-center '>
        <h1 className='text-2xl text-white font-bold'>Weekend Hakers</h1>
        <h2 className="text-base text-gray-200 my-1">Frederick Libeskind</h2>
        <div className="  flex  ">
            <div className="flex border rounded-xl  justify-center px-2 ">
                <div className='text-sm text-gray-50 font-semibold '>Subscribed</div>
                <div className=" rounded-full items-center flex justify-center px-1 mx-1 bg-gray-950 opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-3 text-gray-50 text-xl ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
            </div>

        </div>
    </div>


</div>
  )
}
