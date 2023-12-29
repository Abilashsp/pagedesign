
import { StarIcon } from '@heroicons/react/20/solid'
import Bargardata from "@/components/Seed/Bargerdata";



export default function Tweet({Bargars=Bargardata}) {

    const stars = (noOfStar) => {
        const starComponents = [];
        for (let i = 0; i < 5; i++) {
            const starColor = i < noOfStar ? "text-[#f5a440]" : "text-gray-300";
            starComponents.push(<StarIcon key={i} className={`text-xs w-3.5 h-3.5  ${starColor}`} />);
        }
        return <div className="flex ">{starComponents}</div>;
    };

    return (
        <div className="w-full h-screen">
            <div className=" w-3/5   h-full">

                <div className="bg-gray-200 px-4 py-5 w-full  h-auto sm:px-6 relative ">
                    <div>
                        <ul role="list" className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 ">
                            {Bargars.map((person, index) => (
                                <li key={person.email} className="col-span-1  bg-white mx-2 my-2 ">
                                    <div className="w-full items-center  ">
                                        <div className="flex-shrink-0 relative">
                                            <img
                                                className="h-40 w-full"
                                                src={person.image}
                                                alt=""
                                            />

                                        </div>

                                    </div>
                                    <div className="px-4 py-1">
                                        <div className="w-full items-center  ">
                                            <div className="text-gray-800 font-semibold text-[15px] py-1 ">
                                                {person.tittle}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="text-xs text-gray-400 font-semibold flex items-center py-1 ">
                                                {stars(person.duration)}
                                            </div>
                                        </div>
                                        <div className="w-full items-center py-1 ">
                                            <div className="text-gray-400 font-medium text-xs leading-relaxed">
                                                {person.Desc}
                                            </div>
                                        </div>
                                        <div className="w-full items-center py-1">
                                            <div className="text-gray-400  text-xs leading-relaxed">
                                               By <span className="font-semibold text-gray-700">{person.Name}</span>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>


            </div>
        </div>
    )
}
