import { Fragment, useState } from 'react'
import Bowenav from './Bowenav'
import Header from "./Header"
import Oops from './Oops'
import Chats from './Chats'
import Chatbox from './Chatbox'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="w-screen h-screen overflow-hidde">
            <div className='w-4/6  h-full flex '>
                <div className=" mx-auto w-full bg-white h-4/5 flex">
                    <div className="h-full ">
                        <Bowenav/>
                    </div>
                    <div className='w-full'>
                        <Header />
                        <Oops />
                        <div className='px-20 py-1'>
                            <h2 className="text-gray-600">the notes you made?</h2>
                        </div>
                        <div>
                           <Chats/>

                        </div>
                        <div className='px-4 py-4'>
                            <Chatbox/>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}
