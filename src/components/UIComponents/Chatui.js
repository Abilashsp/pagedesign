import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
import { Fragment } from 'react'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
} from '@heroicons/react/20/solid'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIconMini, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selected, setSelected] = useState(moods[5])

  return (
    <div className="bg-white mx-auto">
    
      <div className="relative isolate overflow-hidden pt-14">
        {/* <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}
      
        <div className='flex justify-between'>
        <div className=" ml-3 h-screen max-w-2xl mt-6">
          <div className="flex ml-32 ">
          <img
              className="h-11 "
              src="Images\06.png"
              alt="Your Company"
            />
            <div className='px-3 mt-4'>
                <p className="text-black text-xl font-bold">
                    ChitChat
                </p>
            </div>
          </div>
          <div className="ml-32 mt-32">
            <h1 className="text-2xl font-bold tracking-tight text-gray-700  whitespace-nowrap">
            Help your  customers precisely.
            
            </h1>
            <h1 className="text-2xl font-bold tracking-tight text-gray-700  whitespace-nowrap">
            when they need you
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 ">
            Integrered live chat thats easy to use
             enobtruswve, and can be set up in muinure
            </p>
            <div className="mt-10 flex   gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-500 px-14 py-4 text-base font-bold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
               Start a free trail
              </a>
            </div>
          </div>
        </div>

<div className='w-1/3 mx-auto h-60 bg-white rounded-xl  border-b-2 shadow-xl'>
    <div className="">
    <div className="flex  bg-sky-500 px-2 py-4 rounded-t-xl">
        <div className=" h-11 w-12 flex mx-2 items-center rounded-full bg-white">
        <img
          className="inline-block h-10 w-10 rounded-full  mx-1"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        </div>
        <div>
            <p className="font-semibold mt-2 text-white">
                Your are speaking with kimbely
            </p>
        </div>
      </div>
      <div>
        <div>
            <p className="text-center text-slate-400">
                Today
            </p>
        </div>
        <div>
            <div className='flex justify-end'>
            <p className="text-xs mx-2 mt-1">11:00</p>
            <div className="bg-sky-500 rounded-md mx-2">
            <p className="text-base mx-2 px-1 py-1">Good day</p>
            </div>
           
            </div>
            <div>
            <div className='flex justify-start'>
            
            <div className="rounded-md mx-2">
            <p className="text-base bg-slate-300 px-1 py-1 mx-2 mt-1 text-left rounded-t-md rounded-r-md">Hello</p>
            </div>
            <p className="text-xs mx-2 mt-2">11:01</p>
            </div>
            <div className='flex justify-start'>
            
            <div className="rounded-md mx-2">
            <p className="text-base bg-slate-300 px-1 py-1  mx-2 mt-1 rounded-b-md rounded-r-md">How can you assist today.?</p>
            </div>
            <p className="text-xs mx-2 mt-2">11:02</p>
            </div>
            </div>
        </div>
      </div>
    </div>
<div className="px-7 py-7 mt-3 rounded-b-md bg-slate-100  ">
    <div className="flex items-start space-x-4 w-full mt-2 mx-2">
      <div className="w-1/2 flex-1">
        <form action="#">
          <div className="border-b border-gray-200 flex">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <input
              rows={3}
              name="comment"
              id="comment"
              className="block w-4/5  px-2 py-2 rounded-l-md resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              placeholder="Write your response"
              defaultValue={''}
            />
            <div className="flex justify-between pt-2 bg-white rounded-r-md px-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="-m-2 inline-flex h-10  w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500 "
                >
                  <PaperClipIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flow-root">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only">Your mood</Listbox.Label>
                      <div className="relative">
                        <Listbox.Button className="relative -m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span>
                                <FaceSmileIconOutline className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                <span className="sr-only">Add your mood</span>
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={classNames(
                                    selected.bgColor,
                                    'flex h-8 w-8 items-center justify-center rounded-full'
                                  )}
                                >
                                  <selected.icon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map((mood) => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'bg-gray-100' : 'bg-white',
                                    'relative cursor-default select-none px-3 py-2'
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={classNames(
                                      mood.bgColor,
                                      'flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                  >
                                    <mood.icon
                                      className={classNames(mood.iconColor, 'h-5 w-5 flex-shrink-0')}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
          
          </div>
          </div>
          
        </form>
      </div>
    </div>
    </div>
    <div className='flex justify-end mt-2 '>
          <img
          src="Images\05.png"
          alt=""
          className=" h-10 w-10 object-cover bg-white"
        />
    </div>



</div>














        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
