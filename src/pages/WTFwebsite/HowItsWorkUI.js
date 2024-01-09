import { StarIcon } from "@heroicons/react/20/solid";
import data from "@/components/Seed/WTwebsitedata/HowitsWork";

export default function Tweet({ Instruction = data }) {
  return (
    <div className="w-full bg-white font-WTfont ">
      <div>
        <div className="bg-white  py-5 w-full h-auto relative ">
          <div>
            <div className="flex items-center justify-center py-8 ">
              <h1 className="text-[42px] leading-10 text-[#1e0e62] font-bold">
                How It Works
              </h1>
            </div>
            <div className="w-full relative">
              {Instruction.map((ins) => (
                <div className="w-full flex odd:flex-row even:flex-row-reverse justify-between group  relative  ">
                  <div className=" h-[320px]  w-[670px] bg-[#f3f8fe] group-odd:rounded-r-lg group-even:rounded-l-md   flex flex-col  items-center ">
                    <div className=" h-full">
                      <div className="w-[68px] h-[100px] text-[100px] text-[#1E0E62]  font-bold ">
                        {ins.id}
                      </div>
                      <div className="w-[380px] h-[45px] text-[30px] text-[#1e0e62] py-6 font-medium">
                        {ins.Tittle}
                      </div>
                      <div className="w-[476px] h-[130px] text-[16px] text-[#1e0e62] py-8 font-medium ">
                        {ins.Content}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 w-1/2 flex flex-col  items-center py-6   ">
                    <img
                      className="h-[280px] w-[360px]   "
                      src={`/Images/HowIsWorkSvg/${ins.id}.svg`}
                      alt=""
                    />
                  </div>
                </div>
              ))}
              <div className="absolute top-36 -ml-px left-1/2  -translate-x-4 z-10">
                {[...Array(7)].map((e, index) => (
                  <div key={index} className="h-[320px]">
                    <img
                      className="h-10 w-10"
                      src={`/Images/HowIsWorkSvg/Circle.svg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="absolute left-1/2 top-4 -ml-px  h-full w-2  bg-gray-300" aria-hidden="true" >
                <div className="h-14 w-full transform  transition ease-in-out delay-150 translate-y-1 bg-blue-500"> 
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
