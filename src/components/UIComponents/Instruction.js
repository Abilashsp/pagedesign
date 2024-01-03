import { EnvelopeIcon, PhoneIcon, ArrowRightIcon, MapIcon, MapPinIcon, UserPlusIcon, StarIcon } from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { Check } from 'react-hero-icon/outline';
import { LockClosedIcon,ShoppingCartIcon } from '@heroicons/react/24/solid';
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import data from '@/components/Seed/Instructiondetails';







export default function Example() {
    return (
        <div className="w-screen h-screen bg-white">
        <div role="list" className="w-full  h-[200px]">
          <div className="w-3/5 h-full bg-white relative border-2 border-gray-200">
            <div className='flex items-center justify-around h-full w-full'>
              {data.map((e) => (
                <div key={e.tittle} className='flex flex-col items-center  w-56 '>
                  <div className={`  w-10 h-10  ${e.className} rounded-full flex items-center  justify-center px-2 `}>
                    <e.icon className={`w-5 h-5 text-gray-50 ${e.iconscolor}`} />
                  </div>
                  <div className='text-center py-1 text-sm text-gray-700 font-medium pt-3 '>
                    {e.tittle}
                  </div>
                  <div className='text-center text-gray-500 text-xs leading-6 '>
                    {e.dec}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
