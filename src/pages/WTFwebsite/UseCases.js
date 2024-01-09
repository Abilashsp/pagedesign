import { StarIcon } from "@heroicons/react/20/solid";
import data from "@/components/Seed/WTwebsitedata/UseCasedata";

export default function Tweet({ Usecasedata = data }) {
  return (
    <div className="w-full  flex items-center justify-center bg-white font-WTfont ">
      <div className=" w-4/5  ">
        <div className="bg-white px-4 py-5 w-full  h-auto sm:px-6 relative ">
          <div>
            <div className="flex items-center justify-center py-8 "> 
                <h1 className="text-[42px] leading-10 text-[#1e0e62] font-bold">Use Cases</h1>
            </div>
            <ul
              role="list"
              className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8  "
            >
              {Usecasedata.map((person, index) => (
                <li
                  key={index}
                  className="col-span-1 bg-white mx-2 my-2  rounded-xl shadow-lg shadow-gray-200 w-80 h-28 border border-gray-100"
                >
                  <div className="w-full h-full px-8 py-5 ">
                    <div className="w-full h-full flex  items-center justify-center ">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-[#6596f3]  flex justify-center items-center">
                        <img className="h-7 w-7 text-black" src={`/Images/Icon${index + 1}.svg`} alt="" />
                        </div>
                      </div>
                      <div className="text-[#6b7280] font-medium text-[16px]  px-4  leading-7  tracking-normal ">
                        {person.decs}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
       
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
