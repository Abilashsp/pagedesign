import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Card2() {
  return (
    <div className='w-full h-screen relative '>
        <div className='h-3/4 '>
        <div className='bg-white h-3/5 w-2/6 items-center justify-center rounded-lg px-10 py-12'>
            <h1 className='text-2xl text-gray-500 flex'><ImQuotesLeft className="mx-1 text-customColor" />I don't care what anyone says,</h1><br/> 
            <h1 className='text-2xl text-gray-500'>the McDaubio is the best bond for your</h1> <br/> 
       <h1 className='text-2xl text-gray-500'> buck burgeron the morkei Nothing </h1><br/>
        <h1 className='text-2xl text-gray-500 flex ml-9 '> else even comes close <ImQuotesRight className="mx-1 text-customColor" /></h1>
         </div>
    <div className="bg-white h-2/5  w-2/6  " >
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center absolute">
          <img
            className="h-14 w-14 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          /> 
        </div>




        </div>
        <div className=" bg-customColor w-full h-full flex justify-center items-center  rounded-b-lg ">
            <div className=''>
          <p className="text-xl font-bold text-white">
          TINA VANSTONE <br/>
           <p className='text-lg opacity-30 ml-3'> 21 INDUSTRIES</p>
          </p>
          </div>
        </div>
      </div>
    
      </div>
    </div>
  )
}
