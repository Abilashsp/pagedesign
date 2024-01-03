import { Fragment, useState } from 'react'
import Lightsourcesidenav from './Lightsourcesidenav'
import Lightsourcebody from './Lightsourcebody'
import Lightsourcedata from "../../components/Seed/Lightsourcedata"




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className='w-4/6 h-full flex '>
                <div className="  mx-auto w-full bg-white h-full flex">
                    <div className="h-full  ">
                        <Lightsourcesidenav />
                    </div>
                    {/* Main */}
                    <div className='w-full overflow-y-auto bg-gray-300 '>
                        <div class="  w-4/5  mt-3 ">
                            <Lightsourcebody  />
                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}
