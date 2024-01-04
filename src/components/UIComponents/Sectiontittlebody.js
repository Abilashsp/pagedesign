import React from 'react'

export default function Sectiontittlebody({activetab}) {
  return (
    <div className=" w-4/5 h-80  bg-white mx-auto rounded-xl shadow-xl flex items-center justify-center" >
      <h1 className='text-3xl' >{`${activetab} page`}</h1>
    </div>
  )
}
