
import Takedaybox from './Takedaybox';
import Takedaytittle from './Takedaytittle';





export default function Deempathyzing() {

    return (
        <div className="h-screen  w-screen bg-[#f0f0f5]">
            <div className=" w-full mx-auto h-4/5 ">
                <div className=" mx-auto flex w-full items-center h-full " aria-label="Global">
                    <div className="  h-full w-full object-cover  mx-auto bg-[#f0f0f5]  px-20 py-4 flex mt-10 ">
                      <Takedaytittle/>
                       <Takedaybox/>
                    </div>
                </div>
            </div>
        </div>

    )
}
