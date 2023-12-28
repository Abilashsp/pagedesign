import React from 'react'

export default function Chats({messages}) {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
    {messages.map((e) => (
        <div className="flex space-x-3 px-1 py-4">
            <div className="flex-shrink-0">
                <img
                    className="h-10 w-10 rounded-full"
                    src={e.image}
                    alt=""
                />
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex items-center">
                    <div className="text-base font-semibold text-gray-900">
                        <a href="#" className="hover:underline">
                            {e.Name}
                        </a>
                    </div>
                    <div className="text-xs font-semibold text-gray-500 mx-2 mt-1">
                        <a href="#" className="hover:underline">
                            {`${e.time} PM`}
                        </a>
                    </div>
                </div>

                <div className="text-base text-gray-500">
                    {e.m ? <div className=""><span className="text-blue-600 font-semibold mr-1">{e.m}</span>
                        <span>{e.Mesg}</span>
                    </div> : <div>{e.Mesg}</div>}
                </div>


            </div>
        </div>

    ))}
</div>
  )
}
