export default function Heroicons() {
  return (
    <div className="relative bg-white w-4/5 mx-auto mt-2 rounded-md font-sans">
      <div  className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="  px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 h-screen">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img
              className="h-11"
              src="/Images/03.png"
              alt="Your Company"
            />
              
            <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
            <div className=" font-bold px-2 py-1 text-base leading-6 text-gray-500 ">
               INDRODUCING
              </div>
             Heroicons UI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             A free set of Premium Svg icons for you to <br/>
             Use on your digital products
            </p>
            <div className="mt-10 flex items-center gap-x-6">
                <div className="flex justify-between rounded-3xl  bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <a
                href="#"
                className="text-sm font-semibold text-white mt-1 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            DOWNLOAD
              </a>

              <div className="ml-6 bg-purple-900 p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>

              </div>
                </div>
              
             
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 w-3/5">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/Images/02.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
