
import { Fragment, useState } from 'react'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Commentsui() {
  return (
    <div>
    <div className="flex items-start space-x-4 h-screen w-full   font-sans ">
      <div className='  w-1/3 bg-white px-2 py-2 rounded-md shadow-lg  '>
        <div className='px-2 py-2 font-bold text-gray-600'>
          <h1 className=' py-2'>Add New Comments</h1>
        </div>
        <div className='flex w-full'>
      <div className="flex-shrink-0 ">
        <img
          className="inline-block h-10 w-10 rounded-md mx-2"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="block w-full px-3 resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Type your message "
              defaultValue={''}
            />

 
          
          </div>

            <div className="flex justify-end py-2">
              <button
                type="submit"
                className="inline-flex items-end bg-slate-300 rounded-md  px-12 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Post Comment
              </button>
            </div>
          </div>
          </div>
          </div>
      </div>
      </div>
  )
}
