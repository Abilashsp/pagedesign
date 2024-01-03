import {React,useState} from 'react'

export default function Licencebox() {
    const [value, setValue] = useState(50); 
    const handleRangeChange = (e) => {
        setValue(e.target.value);
    };
   
  return (
    <header className=" w-full mx-auto h-1/2 ml-40  ">
    <div className=" sm:mx-auto sm:w-full sm:max-w-[400px]  ">
        <div className=" pt-3 pb-6  px-3  shadow-md shadow-gray-400  bg-white rounded-md  border-gray-100 ">
            <div className="">
                <div>
                    <div className='flex items-center px-8'>
                        <div>
                            <a href="#" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="h-12 w-auto" src="\Images\42.png" alt="" />
                            </a>
                        </div>
                        <div className='mx-4'>
                            <h1 className='text-lg font-semibold text-gray-700'>Renew your license</h1>

                        </div>

                    </div>
                    <div className='text-gray-600 my-2 px-7'>
                        You currently have <span className='font-semibold text-gray-900'> 2 </span>seats with your license
                    </div>
                </div>

            </div>
            <div className=' bg-gray-100  shadow-inner shadow-gray-300 '>
                <div className=' w-5/6 mx-auto  py-4 flex justify-between border-b items-center'>
                    <h1 className='text-base font-medium text-gray-700 '>LICENSE VOLUME</h1>
                    <div className='w-20 h-8 bg-gray-50 flex justify-center items-center rounded-md shadow-inner shadow-slate-200'>
                        <span>4</span>
                    </div>
                </div>
                <div className=' py-8 flex  border-b-2'>
                    <div className="w-5/6 mx-auto  h-1.5 flex items-center justify-center   ">
                        <input
                            type="range"
                            id="priceRange"
                            name="priceRange"
                            min={500000}
                            max={1500000}
                            value={value}
                            onChange={(e) => setValue(Number(e.target.value))}
                            className="slider  appearance-none  h-2 rounded-full w-full bg-gray-300"
                        />
                    </div>
                </div>

                <div className=' w-5/6 mx-auto  py-4 flex justify-between border-b items-center'>
                    <h1 className='text-4xl font-medium text-gray-700 '>$196</h1>
                    <div className=' mx-3 flex justify-center items-center text-sm text-gray-500  '>
                        <span></span>This price only available to existing customers
                    </div>
                </div>

            </div>
            <div className='w-full flex justify-center items-center mt-4'>
                <button
                    type="button"
                    className="rounded-md bg-[#46b4e1] px-8 mx-auto py-3 w-full text-sm  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    REVIEW LICENSE
                </button>
            </div>


        </div>


    </div>
</header>
  )
}
