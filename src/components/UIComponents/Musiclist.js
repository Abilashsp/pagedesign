import React from 'react'
import { musicsdata } from '@/components/Seed/MusicPlayerdata'

export default function Musiclist({musics=musicsdata}) {
  return (
    <div className=''>
    <div className="px-2 py-1">
        <h1 className="text-gray-400 text-sm font-bold mx-2">
            PAST EPISODES
        </h1>
    </div>
    <div className="px-2 py-2">
        {musics.map((e) => (
            <div className="border-b border-t border-gray-300 flex justify-between items-center">
                <div className="px-4 py-3  " >
                    <div className="text-xs text-gray-400">{e.date}</div>
                    <div className="text-sm text-gray-700 font-semibold my-1">{e.eps}</div>
                    <div className="text-xs text-gray-400">{e.Duration}</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>

                </div>
            </div>
        ))}
    </div>
</div>
  )
}
