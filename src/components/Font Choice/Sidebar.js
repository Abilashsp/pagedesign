import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
  { name: 'Your itinerary', description: '', href: '#', status: 'current' },
  {
    name: 'Cabin Selection',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: '',
  },
  { name: 'Passenger Details', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
  { name: 'Order Confirmation', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Completion', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Flight', href: '#' },
  { name: 'Hotels', href: '#' },
  { name: 'Vechiles', href: '#' },
  { name: 'Deals', href: '#' },
  { name: 'More', href: '#' },
]

export default function Sidebar() {
    const notificationMethods = [
        { id: 'Round Trip', title: 'Round Trip' },
        { id: 'One Way', title: 'One Way' },
    ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const[active,setactive]=useState(null);


const activelink=(id)=>{
    setactive(id)
}




  return (
    <div className="bg-slate-300 w-3/5 mx-auto mt-3 h-screen ">
    <header className="bg-white w-full mx-auto mt-3 rounded-t-lg">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src="Images\09.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}   onClick={()=>activelink(item.name)} className={` font-bold ${active===item.name? "text-blue-700 text-lg font-semibold leading-6":"text-lg font-semibold leading-6 text-gray-500 "} `}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        
        </div>
      </nav>
    </header>

    <div className='flex justify-evenly'> 
        <div className="mt-10  ml-5">
        <nav aria-label="Progress">
            <div className="font-bold mb-3">STEP 1 OF 5</div>
      <ol role="list" className="overflow-hidden ">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'current' ? 
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="group relative flex items-start" aria-current="step">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                     
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
             : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">{step.name}</span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
        </div>

    <div>

<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    
    <div className=" sm:mx-auto sm:w-full sm:max-w-[480px] bg-white sm:rounded-t-lg">
    <div className="flex  mt-4 ml-6 ">
            <h1 className="text-xl font-bold">Your itinerary</h1>
            </div>
        <div className="bg-white px-6 py-12 shadow sm:rounded-t-lg sm:px-12">
            
            <div>
                <fieldset className="mb-4">
                    <div className=" sm:flex sm:items-center sm:space-x-10 ">
                        {notificationMethods.map((notificationMethod) => (
                            <div key={notificationMethod.id} className="flex items-center">
                                <input
                                    id={notificationMethod.id}
                                    name="notification-method"
                                    type="radio"
                                    defaultChecked={notificationMethod.id === 'email'}
                                    className="h-5 w-5 border-gray-300 text-blue-950 focus:bg-buttonbg"
                                />
                                <label htmlFor={notificationMethod.id} className="ml-2 block text-sm font-medium leading-6 text-gray-900">
                                    {notificationMethod.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <div>
                        <div className="relative mt-2">
                            <CiLocationOn className=" text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Leaving from..."
                                required
                                className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" relative mt-2">
                        <CiLocationOn className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Going to..."
                            required
                            className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <div className="relative mt-2 mr-2">
                                <CiCalendar className=" text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Depart"
                                    required
                                    className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" relative mt-2 ml-2">
                            <CiCalendar className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Return"
                                required
                                className="pl-8 pr-2 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                    <div>
                        <div className="mt-2 relative w-full ">
                         <CiUser  className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="pl-8 pr-16 py-2  w-full bg-customcolor1 appearance-none rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option>2 Passengers</option>
                                <option>3 Passengers</option>
                                <option>4 Passengers</option>
                            </select>
                            <div className="absolute right-2 top-1/4 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                            <ChevronUpIcon className=" " />
                            <ChevronDownIcon className=" " />

                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                        <div className="mt-2 relative w-full ">
                         <CiStar  className="text-xl absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="pl-8 pr-16 py-2  w-full bg-customcolor1 appearance-none rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option>Econmy class</option>
                                <option>Class 1</option>
                                <option>Class 2</option>
                            </select>
                            <div className="absolute right-2 top-1/4 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                            <ChevronUpIcon className="" />
                            <ChevronDownIcon className=" " />

                            </div>
                        </div>
                    </div>
                </div>
    
            </form>
            

        </div>

    </div>
    <div className="sm:mx-auto sm:w-full sm:max-w-[480px] sm:rounded-b-lg bg-buttonbg ">
                    <button
                        type="submit"
                        className="flex w-full justify-center   px-3 py-5 text-sm font-bold sm:rounded-b-lg  font-sans leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Search Flight
                    </button>
                </div>
</div>
</div>
    </div>
    </div>
  )
}
