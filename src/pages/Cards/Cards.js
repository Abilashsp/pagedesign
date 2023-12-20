import { FaStar } from "react-icons/fa";

export default function Cards() {





    const stars = () => {
        const starComponents = [];
        for (let i = 0; i < 5; i++) {
            starComponents.push(<FaStar key={i} className="text-lg text-teal-500 " />);
        }
        return <div className="flex ">
            {starComponents}
        </div>;
    };










    return (
        <div className="w-full flex items-center justify-center h-screen  mx-auto font-normal">
            <div className="border-b border-gray-200 bg-white  flex h-2/5 rounded-lg border-2 w-2/5">
                <div className='flex justify-end '>
                    <img
                        src="/Images/08.jpg"
                        alt=""
                        className=" h-full w-full object-cover bg-white rounded-l-lg"
                    />
                </div>
                <div className="ml-1 ">
                    <div className=" flex flex-wrap items-center justify-between   py-4 px-4">
                        <div className=" py-4">
                            <h3 className="text-3xl font-bold leading-6 text-gray-900 ">Amsterdam Walking Tour</h3>
                            <p className="mt-3 text-sm text-gray-500 font-bold">
                                Explore popular tourist destinations as well as hidden 
                                local favorites.
                            </p>
                        </div>

                    </div>
                    <div className="bg-slate-50  py-2">
                    <div className="flex flex-wrap items-center justify-between sm:flex-nowrap  px-2 py-6 ">
                        <div className="">
                            <div className="flex justify-start">
                                <h3 className="text-base font-bold leading-6 text-gray-950 ">$17</h3>
                                <h3 className="text-base font-semibold ml-2 leading-6 text-gray-500 ">per person*</h3>
                            </div>
                            <div className=" flex justify-start">
                                <p className="mt-1 text-sm text-gray-500">
                                    {stars()}
                                </p>
                                <p className="mt-1 ml-2 text-sm text-gray-500 font-semibold">
                                    28 reviews
                                </p>
                            </div>
                        </div>
                        <div className="ml-8 mt-4 flex-shrink-0">
                            <button
                                type="button"
                                className="relative inline-flex items-center rounded-md bg-indigo-600 px-12 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Book now
                            </button>
                        </div>

                    </div>
                    <p className=" text-sm text-gray-500 px-2 font-semibold">
                        *price may vary depending on selected date
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}
