import React from 'react'
import{tabs,people} from "../../components/Seed/Tabledata"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Table() {
  return (
    <div>
        <div className=" mt-8 border-b border-gray-200 max-w-7xl">
                <div className="sm:flex sm:items-start">
                  <div className="mt-4  sm:mt-0">
                    <nav className="-mb-px flex space-x-8">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? " bg-gray-300 px-2  rounded-xl"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 px-2   text-sm font-medium"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                    <div className="mt-8 flow-root max-w-7xl ">
                      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                              <thead className="bg-gray-200">
                                <tr>
                                  <th
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
                                  >
                                    NAME
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    QUANTITY
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    PRICE
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    AVG COST
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    MKT VALUE
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    GAIN&LOSS
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    0% of PORTFOLOIO
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                                  >
                                    BUY AND SELL
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 ">
                                {people.map((person) => (
                                  <tr key={person.email}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 w-96 ">
                                      <div>{person.Name}</div>
                                      <div className="text-gray-400">
                                        {person.desc}
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">
                                      {person.Quantity}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">
                                      {person.Price}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">
                                      {person.AvgCost}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">
                                      {person.MktValue}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                                      <div className="text-green-500 font-semibold">
                                        {person.GainAndLoss.Amount}
                                      </div>
                                      <div className="text-green-500 font-semibold">
                                        {" "}
                                        {person.GainAndLoss.Percentage}
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">
                                      {person.Port}
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                      <div className="flex justify-around">
                                        <a
                                          href="#"
                                          className="px-2 py-1 border rounded-lg mx-1"
                                        >
                                          Buy<span className="sr-only"></span>
                                        </a>
                                        <a
                                          href="#"
                                          className="px-2 py-1 border rounded-lg"
                                        >
                                          Sell<span className="sr-only"></span>
                                        </a>
                                      </div>
                                    </td>
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
              </div>
    </div>
  )
}
