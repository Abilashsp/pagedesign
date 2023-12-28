import { Fragment, useState } from 'react'
import Lightsourcesidenav from './Lightsourcesidenav'
import Lightsourcebody from './Lightsourcebody'


const info = [
    {
        imageurl: "/Images/11.jpg", name: "Detached House", price: "$6,80,000", Address: "528 Dalgas Street", old: "5",

    },
    {
        imageurl: "/Images/38.jpg", name: "ModernHouse", price: "$8,00,000", Address: "78 John Street", old: "1",

    },
    {
        imageurl: "/Images/39.jpg", name: "Vintage House", price: "$12,89,000", Address: "67 Harry potter Street", old: "8",

    },
    {
        imageurl: "/Images/40.jpg", name: "Royal House", price: "$3,80,000", Address: "01 Hulk Street", old: "7",

    },

]



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
                            <Lightsourcebody info={info} />
                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}
