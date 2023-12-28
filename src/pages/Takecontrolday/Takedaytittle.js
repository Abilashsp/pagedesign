import React from 'react'
import { ChevronRight, ShoppingCart, Check } from 'react-hero-icon/outline'
export default function Takedaytittle() {
  return (
    <div className='  h-full w-2/5 pl-14 mt-4 '>
    <div className='py-2'>
        <h1 className='text-3xl my-3 text-gray-800 font-medium px-2'>Take a control of a day</h1>
    </div>
    <div className='h-1 w-10 border-t-2 mx-3 border-[#5078a0]'>

    </div>
    <h2 className='text-lg  my-3 text-gray-800 px-2 py-4'>Get a Overview of what your day look like and <br /> conquer your to-dos one at the time</h2>
    <div className='flex items-center my-3'>
        <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600" /></div>
        <div>Add and Priarized new task as they come to you</div>
    </div>
    <div className='flex items-center  my-3 py-4'>
        <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600" /></div>
        <div>Never forgotten important a headline</div>
    </div>
    <div className='flex items-center  my-3 '>
        <div className="w-5 h-5 border-green-600 border-2 rounded-full flex items-center justify-center mx-2 "><Check className="w-3 h-3  text-green-600" /></div>
        <div>See your daily/month/week at aquick glance</div>
    </div>

</div>  
  )
}
