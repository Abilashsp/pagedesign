import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { MdOutlineMoreVert } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Tabledetails from "../../components/Seed/TableZdata"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({people=Tabledetails}) {
  const [select, setselect] = useState(0)

  const selecteditem = (id) => {
    setselect(id)
    console.log(select)

  }












  return (
    <div className="h-screen w-screen">
      <div className="w-3/6 bg-[#f5f5fa]  ">
        <div className="px-4 sm:px-6 lg:px-5 ">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <div className="w-full max-w-lg lg:w-4/6 mt-4  sm:px-6 lg:px-24">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-3xl border-0  px-4 bg-[#ffffff] py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Filter"
                    type="search"
                  />
                </div>
              </div>

            </div>

          </div>
          <div className="mt-4 ">
            <div className=" overflow-x-auto">
              <div className="inline-block min-w-full py-2  sm:px-6 lg:px-12">
                <table className="min-w-full divide-y  ">
                  <thead>
                    <tr className=''>
                      <th scope="col" className=" py-3.5 text-center text-sm font-semibold text-gray-400 ">

                      </th>
                      <th scope="col" className=" py-3.5 text-center text-sm font-semibold text-gray-400">

                      </th>
                      <th scope="col" className=" py-3.5 text-left text-sm font-semibold text-gray-400 tracking-wider">
                        TITTLE
                      </th>
                      <th scope="col" className=" py-3.5 text-left text-sm font-semibold text-gray-400 tracking-wider">
                        ARTIST
                      </th>
                      <th scope="col" className=" py-3.5 text-left text-sm font-semibold text-gray-400 tracking-wider">
                        ADDED
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    {people.map((person, index) => (
                      <tr key={person.tittle} onClick={() => selecteditem(index)}  className={classNames(index === select ? ' shadow-md rounded-lg shadow-gray-300 border-none ' : 'border-t', '')}>
                        <td className={classNames(index === select ? 'bg-white rounded-l-lg' : '', 'whitespace-nowrap  py-4 text-sm text-gray-500 flex  justify-around')}>
                          {index === select ? <span className=''><MdOutlineMoreVert className='w-6 h-6 text-gray-400' /></span> : null}
                        </td>
                        <td className={classNames(index === select ? 'bg-white ' : '', 'whitespace-nowrap  py-4   text-base font-medium text-gray-900')}>
                          <FaPlus className='w-4 h-4 text-gray-400' />
                        </td>
                        <td className={classNames(index === select ? 'bg-white ' : '', 'whitespace-nowrap  py-4 text-base text-gray-500')}>{person.tittle}</td>
                        <td className={classNames(index === select ? 'bg-white ' : '', 'whitespace-nowrap  py-4 text-base text-gray-500')}>{person.artist}</td>
                        <td className={classNames(index === select ? 'bg-white rounded-r-lg' : '', 'whitespace-nowrap  py-4 text-base text-gray-500')}>{`${person.added} ago `}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
