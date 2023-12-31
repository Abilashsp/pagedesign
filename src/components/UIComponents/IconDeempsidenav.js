import React from 'react'
import { navigationiconsdata } from '@/components/Seed/Icondeempdata'
import { teamsdata } from '@/components/Seed/Icondeempdata';





function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function IconDeempsidenav({navigation=navigationiconsdata,teams=teamsdata}) {
  
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
            <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
        </div>
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <div className="text-xl font-bold leading-6 text-gray-500 py-4">Browse</div>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-50 text-indigo-600'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-indigo-600' : 'text-gray-400  group-hover:text-indigo-600',
                                            'h-6 w-6 shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                    <p className="text-lg">{item.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <div className="text-xl font-bold leading-6 text-gray-500 py-4">Your Library</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                            <li key={team.name}>
                                <a
                                    href={team.href}
                                    className={classNames(
                                        team.current
                                            ? 'bg-gray-50 text-indigo-600'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >

                                    <team.icon
                                        className={classNames(
                                            team.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                            'h-6 w-6 shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />

                                    <span className="text-lg">{team.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>
  )
}
