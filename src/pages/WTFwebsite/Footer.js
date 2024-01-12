import React from "react";
import Footerdetails from "../../components/Seed/WTwebsitedata/Footerdata";

export default function Footer() {
  console.log(Footerdetails.logos);
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full flex  justify-center  py-28 ">
        <div>
          <h1 className="text-[20px] font-semibold" >WTF</h1>
          <div className="flex py-4 -mx-1">
            {Footerdetails.logos.map((e) => (
              <div className="bg-[#1e0e62] w-[26px] h-[26px] flex items-center justify-center mx-1 rounded-full ">
                <e.mediaLogo className="w-4 h-4 text-white" />
              </div>
            ))}
          </div>
          <div className="text-[12px] py-2 text-[#525252] font-normal">&copy; 2023 what the Flutter OU.</div>
        </div>

        <div className="grid  grid-cols-3  text-[#1e0e62] px-20 ">
          <div className="w-[260px]">
            <h1 className="text-[22px]  font-bold tracking-wider"> {Footerdetails.footerInfo[0]}</h1>
            {Footerdetails.footerInfo[1].map((data) => (
              <h2 className="py-1 text-sm font-medium  text-[#4d4086]">{data}</h2>
            ))}
          </div>
          <div className="w-[260px]">
            <h1 className="text-[22px] font-bold tracking-wider" > {Footerdetails.footerInfo[2]}</h1>
            {Footerdetails.footerInfo[3].map((data) => (
              <h2 className="py-1 text-sm  font-medium  text-[#4d4086]">{data}</h2>
            ))}
          </div>
          <div className="w-[260px]">
            <h1 className="text-[22px] font-bold tracking-wider "> {Footerdetails.footerInfo[4]}</h1>
            {Footerdetails.footerInfo[5].map((data) => (
              <h2 className="py-1 text-sm font-medium  text-[#4d4086]">{data}</h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
