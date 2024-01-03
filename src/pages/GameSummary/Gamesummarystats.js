import React from 'react'
import { statsdata } from '@/components/Seed/Gamesummarydata'

export default function Gamesummarystats({stats=statsdata}) {
  return (
    <div className="bg-white border-2  relative shadow-xl rounded-r-lg">
    <div className='w-full h-10 bg-gray-200 flex items-center'>
        <h1 className="px-4 font-semibold text-gray-600">TEAM STATS</h1>
    </div>
    <div className="flex space-x-3">
        <div className="grid grid-cols-3 gap-x-10">
            {stats.map((e) => (
                <div key={e.tittle} className="col-span-1">
                    <p className="text-base ml-2  text-gray-700 py-1 px-1 ">
                        <a href="#" className="hover:underline">
                            {e.tittle}
                        </a>
                    </p>
                    <p className="text-xl  ml-2 text-gray-700 font-bold">
                        <a href="#" className="hover:underline py-1 px-1">
                            {e.value}
                        </a>
                    </p>
                </div>
            ))}
        </div>



    </div>

</div>
  )
}
