import React from 'react'
import { CiHeart } from "react-icons/ci";
import { info } from '@/components/Seed/Lightsourcedata';

export default function Lightsourcebody() {
    
    return (
        <div className='  w-full items-center  p-3 '>
            {info.map((e) => (
                <div className="mt-2 bg-white border rounded-lg shadow-lg shadow-gray-500">
                    <div className="relative  ">
                        <CiHeart className={`absolute right-1 top-1 w-8 h-8  text-white`} />
                        <img
                            className="h-60 w-full rounded-t-lg  "
                            src={e.imageurl}
                            alt=""
                        />
                    </div>

                    <div class="">
                        <div className="px-4 py-4">
                            <h1 className="text-lg  font-semibold text-gray-500 py-1">
                                {`${e.name}-${e.old}y old`}
                            </h1>
                            <h3 className='text-3xl font-semibold text-gray-700 py-1'>
                                {e.price}
                            </h3>
                            <h1 className="text-base text-gray-500 py-1">
                                {e.Address}
                            </h1>
                        </div>



                    </div>
                </div>

            ))}
        </div>
    )
}
