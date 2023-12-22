import { CgSandClock } from "react-icons/cg";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { LiaMoneyCheckSolid } from "react-icons/lia"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { GoDash } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  ChartBarSquareIcon,
  NewspaperIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const youtubedata = [
  { image: "/Images/28.jpeg", duration: "24:22", tittle: "How to start a youTube channel in 2023", channelname: "PewDiePie", views: 7, time: "4 Months" },
  { image: "/Images/29.jpeg", duration: "5:45", tittle: "Artisan glass blowing artist makes incredible creations", channelname: "Musieum of Glass", views: 143, time: "2 year" },
  { image: "/Images/30.jpeg", duration: "9:04", tittle: "How to make a perfect loaf of bread from scratch", channelname: "Bread Master", views: 237, time: "8 months" },
  { image: "/Images/31.jpeg", duration: "45:00", tittle: "Los Angeles Lakers vs Dallas Mavericks Full Game Highlights", channelname: "FreeDawkins", views: 4, time: "1 year" },
  { image: "/Images/28.jpeg", duration: "24:22", tittle: "How to start a youTube channel in 2023", channelname: "PewDiePie", views: 7, time: "4 Months" },
  { image: "/Images/29.jpeg", duration: "5:45", tittle: "Artisan glass blowing artist makes incredible creations", channelname: "Musieum of Glass", views: 143, time: "2 year" },
  { image: "/Images/30.jpeg", duration: "9:04", tittle: "How to make a perfect loaf of bread from scratch", channelname: "Bread Master", views: 237, time: "8 months" },
  { image: "/Images/31.jpeg", duration: "45:00", tittle: "Los Angeles Lakers vs Dallas Mavericks Full Game Highlights", channelname: "FreeDawkins", views: 4, time: "1 year" },


]





















export default function Tweet() {
  return (
    <div className="w-full h-screen ">
      <div className=" w-3/6 mx-auto flex h-full">

        <div className="bg-[#284178]  w-full  mt-28 h-2/6  relative flex rounded-xl  ">
          <div className="flex-shrink-0 relative ">
            <img
              className="h-full w-72 object-fill rounded-l-xl "
              src='/Images/34.jpg'
              alt=""
            />
            <svg
              className="absolute inset-y-0 right-12 bottom-8 hidden h-full w-60  translate-x-12 transform fill-[#284178] lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="100,100 100,0 70,100" />
            </svg>



          </div>



          <div className="w-14 h-14 bg-gray-50 rounded-full flex justify-center items-center absolute left-56 top-28">
            <div className="h-12 w-12 border-2 border-gray-200 rounded-full flex justify-center items-center">
            <ImQuotesLeft className="text-2xl text-[#4e6db1]" />
              
            </div>
          </div>

          <div className="px-10 py-10 ">

            <div className=" py-5 ">
            <div className="text-lg text-gray-100 tracking-wide italic font-light">
  <div className="my-1 mx-1 ">I don't care what anyone says, the McDouble is </div>
  <div className="my-1 mx-1  " >the best bang-for-your-buck burger on the</div>
  <div className="my-1 mx-1 "> market. Nothing else even comes close</div>
</div>

<div className="flex items-center mt-5   font-semibold ">
<GoDash className=" text-3xl text-sky-300 " /> 
<h2 className=" text-base text-sky-200 font-sansserif mx-2 "> TINA LANNIN,121 CAPTIONS</h2>
</div>
          
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
