import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Quote', href: '#', current: false },
    { name: 'Buy/Sell', href: '#', current: false },
    { name: 'Order', href: '#', current: false },
    { name: 'Transfer', href: '#', current: false },
    { name: 'Watchlist', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]


const result = [
    { title: 'Total Balance', amt: '$16412.92', increment: "+$648.83" },
    { title: 'Invesment', amt: '15606.14', increment: "+$648.83" },
    { title: 'Cash', amt: '$80678', increment: "" },
]



const tabs = [
    { name: 'Holdings', href: '#', current: true },
    { name: 'Activity', href: '#', current: false },
    { name: 'Performance', href: '#', current: false },
    { name: 'Gain & Loss', href: '#', current: false },
]


const people = [
    {
        Name: 'TDB900',
        desc:"Description",
        Quantity: '140.143',
        Price: '$3,601.68',
        AvgCost: '65.218',
        MktValue: '25.70',
        GainAndLoss: {
            Amount: '+$170.00',
            Percentage: '+4.95%'
        },
        Port: '10.10%',
        BuyAndSell: ''
    },
    {
        Name: 'TDB900',
        desc:"description",
        Quantity: '140.143',
        Price: '$3,601.68',
        AvgCost: '65.218',
        MktValue: '25.70',
        GainAndLoss: {
            Amount: '+$170.00',
            Percentage: '+4.95%'
        },
        Port: '10.10%',
        BuyAndSell: ''
    },
    {
        Name: 'TDB900',
        desc:"description",
        Quantity: '140.143',
        Price: '$3,601.68',
        AvgCost: '65.218',
        MktValue: '25.70',
        GainAndLoss: {
            Amount: '+$170.00',
            Percentage: '+4.95%'
        },
        Port: '10.10%',
        BuyAndSell: ''
    },

];





function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
            <div className="h-screen w-4/5  border-2 font-thin bg-white">
                <Disclosure as="nav" className="border-b border-gray-200">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 justify-between">
                                    <div className="flex">
                                        <div className="flex flex-shrink-0 items-center">
                                            <img
                                                src="/Images/07.png"
                                                alt=""
                                                className=" h-10 w-10 object-cover bg-white"
                                            />
                                        </div>
                                        <div className="hidden sm:-my-px sm:ml-56 sm:flex sm:space-x-8">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? ' text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:items-center">


                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                                                'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pb-3 pt-4">
                                    <div className="flex items-center px-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-gray-800">{user.name}</div>
                                            <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <div className="py-10">
                    <header>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Overview</h1>
                            <h2>
                                As of December 11,2008,8:00 Am PT
                            </h2>
                        </div>
                    </header>
                    <main>
                        <div className="mx-auto h-full max-w-6xl sm:px-6 lg:px-8">

                                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3 bg-blue-950">
                                            {result.map((stat) => (
                                                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                                                    <dt className="text-sm font-semibold leading-6 text-blue-300">{stat.increment}</dt>
                                                    <dd className="order-first text-2xl font-bold tracking-tight text-blue-300">{stat.title}</dd>
                                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.amt}</dd>
                                                </div>
                                            ))}
                                        </dl>

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
                                                            ? ' bg-gray-300 px-2  rounded-xl'
                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                        'whitespace-nowrap border-b-2 px-2   text-sm font-medium'
                                                    )}
                                                    aria-current={tab.current ? 'page' : undefined}
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
                                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6">
                                                                        NAME
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        QUANTITY
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        PRICE
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        AVG COST
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        MKT VALUE
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        GAIN&LOSS
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        0% of PORTFOLOIO
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                                                                        BUY AND SELL
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200 ">
                                                                {people.map((person) => (
                                                                    <tr key={person.email}>
                                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 w-96 ">
                                                                           <div>{person.Name}</div> 
                                                                           <div className="text-gray-400">{person.desc}</div> 
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.Quantity}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.Price}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.AvgCost}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.MktValue}</td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                                            <div className='text-green-500 font-semibold'>{person.GainAndLoss.Amount}</div>
                                                                            <div className='text-green-500 font-semibold'> {person.GainAndLoss.Percentage}</div>
                                                                        </td>
                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-500">{person.Port}</td>
                                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                            <div className="flex justify-around">
                                                                                <a href="#" className="px-2 py-1 border rounded-lg mx-1">

                                                                                    Buy<span className="sr-only"></span>
                                                                                </a>
                                                                                <a href="#" className="px-2 py-1 border rounded-lg">
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

                    </main>
                </div >
            </div >
        </>
    )
}
