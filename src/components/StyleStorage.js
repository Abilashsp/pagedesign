
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Essential',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$10' },
    description: '200GB',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],

    mostPopular: true,
  },
  {
    name: 'Pro',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$20' },
    description: '1TB ',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],

  },
  {
    name: 'Premium',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$60', annually: '$40' },
    description: '2TB ',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StyleStorage() {
  const [frequency, setFrequency] = useState(frequencies[0])
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="mt-6 bg-zinc-200  h-auto w-5/6  mx-auto font-light">



      <div className='flex justify-between mt-10 '>
        <div className=" mt-3">
          <p className='mb-6 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            Choose the amount of storage<br />
            That's right for you
          </p>
        </div>
        <div className='flex justify-evenly mt-3'>
          <div className='mx-3'>
            <p>Bill Yearly</p>
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
          <div className='mx-3'>
            <p>Bill Monthly</p>
          </div>
        </div>

      </div>








      <div className='flex  justify-center'>
        <div className='bg-zinc-300 w-3/5 h-1 '></div>
      </div>
      <div className="mt-6 flex justify-between">
        <div className="  flex ml-40 items-center ">
          <div className="">
            <div className="mt-2 ">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Email"
                className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Password"
                className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex ">
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Card"
                  className="block  border-0 rounded-l-md py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="MM/YY"
                  className="block  w-full  border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Cvv"
                  className="block w-full  rounded-r-md   border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex  mt-4 w-full justify-center rounded-md bg-indigo-500 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create Account
              </button>
            </div>


          </div>

        </div>

        <div className="mx-auto w-4/5 ">
          <div className="w-3/6 ml-20">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                  'rounded-sm bg-white mt-2 xl:p-3'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-indigo-600' : 'text-gray-500',
                      'text-lg font-semibold leading-6' 
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id={`radio_${tier.id}`}
                      name="tierSelection" 
                      className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex text  ">
                    <p className=" mt-2 text-xl font-bold  mr-3 text-gray-600">{tier.description}</p>
                    <p className="mt-3 mr-3 text-base">of Storage</p>
                  </div>
                  <p className="flex items-baseline">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">{`${tier.price[frequency.value]} /mo`}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
