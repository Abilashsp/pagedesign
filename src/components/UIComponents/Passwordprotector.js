import { EnvelopeIcon, PhoneIcon ,ArrowRightIcon} from '@heroicons/react/20/solid'
import { IoIosLock } from "react-icons/io";



export default function Example() {
    return (
        <div className="w-screen h-screen ">
            <div role="list" className="w-1/5 mx-auto mt-16 h-2/6">
                <div
                    className=" w-full h-full rounded-lg bg-white text-center shadow-xl"
                >
                    <div className="flex flex-1  p-8 justify-center mr-2">
                        <div className='w-14 h-14 bg-blue-100 rounded-full flex justify-center items-center'>
                            <IoIosLock className='w-7 h-7 text-blue-400' />

                        </div>

                    </div>
                    <div>
                        <div>
                            <h1 className='text-lg text-gray-800'>The page is Password Protected</h1>
                            <h1 className='text-sm font-normal text-gray-600 py-1'>Please enter the valid password to <br />
                                access this page.</h1>
                        </div>

                        <div className='flex justify-center'>
                            <div className="relative mt-2 flex items-center">
                                <input
                                    type="password"
                                    name="search"
                                    id="search"
                                    className="block w-4/5 rounded-l-md  border-0 py-2.5 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button type="button" className="text-white rounded-r-md bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-3 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  <ArrowRightIcon className="w-5 h-5"/>
                                   
                                </button>

                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
