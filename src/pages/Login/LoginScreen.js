import React from 'react'

export default function LoginScreen({togglePasswordVisibility,showPassword}) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                                <div className="flex justify-center px-2 py-2">
                                    <h1 className="text-xl text-gray-600 font-semibold">Welcome Back!</h1>
                                </div>

                                <form className="space-y-6" action="#" method="POST">
                                    <div>
                                        <label htmlFor="email" className="block text-xs  font-medium leading-6 text-gray-500">
                                            Username
                                        </label>
                                        <div>
                                            <div className="relative mt-2">

                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="text"
                                                    autoComplete="email"

                                                    required
                                                    className=" px-4 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs  font-medium leading-6 text-gray-500">
                                            Password
                                        </label>
                                        <div className=" relative mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-3 top-2 text-gray-400 " onClick={togglePasswordVisibility} >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                            <input
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                autoComplete="current-password"

                                                required
                                                className="px-4 py-2 w-full bg-customcolor1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-5 w-5 rounded-xl border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="ml-3 text-xs leading-6">
                                                <label htmlFor="comments" className="font-medium text-gray-500">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="">
                                            <a className="text-sm text-gray-700 font-bold cursor-pointer">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="sm:mx-auto sm:w-full sm:max-w-[480px] rounded-lg bg-loginbuttoncolor ">
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-lg  px-3 py-2 text-sm font-bold  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            LOG IN
                                        </button>
                                    </div>

                                </form>


                            </div>

                        </div>

                    </div>
  )
}
