import React from 'react'
import { stepsdata } from '@/components/Seed/Sidebardata'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Steps({steps=stepsdata}) {
  return (
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
  )
}
