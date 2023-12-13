import { MdRowing } from "react-icons/md";


const people = [
    {
        name: 'Lindsay Walton', HAWB: "YGL-31983744", shipper: 'T.RAD co.,pvt', Con: "TATA TOYOTO RADIATOR LTD", Mobile: "91 9679767837", Address1: 'Aici. Missay Dowa, Insurance Shinjuku Bldg 3-25-3. Yoyogi. Shibuya-ku, Tokyo151-0053, JAPAN Attn: Yoriko SaitoPhone.+81-3-3373-2197 FAX.+81-3-3373-1199',
        Address2: 'Aici. Missay Dowa, Insurance Shinjuku Bldg 3-25-3. Yoyogi. Shibuya-ku, Tokyo151-0053, JAPAN Attn: Yoriko SaitoPhone.+81-3-3373-2197 FAX.+81-3-3373-1199'
    },


]

const cells=()=>{
const cell = [];
for (let i = 0; i < 8; i++) {
    cell.push(
        <td className="whitespace-nowrap px-2 py-6 text-sm text-gray-500 border-r-2">

                </td>

    )

}
return cell
}


const rows = () => {
    const row = [];
    for (let i = 0; i < 10; i++) {
        row.push(
            <tr className=" px-2 py-4 border border-gray-700 ">
                
               {cells()}
            </tr>

        )

    }
    return row
}


export default function Example() {

    return (
        <div className="h-full">
            <div className="mx-auto mt-10 max-w-5xl  bg-white sm:px-6 lg:px-8 h-full ">
                <div className="flex justify-center items-center flex-col text-center">
                    <div className="text-xl font-bold text-gray-800">CONSOLIDATED AIR CARGO MANIFEST</div>
                    <div className="text-sm font-bold text-gray-800">(FOR ACCOUNTING PURPOSE ONLY)</div>
                    <div className="text-sm font-bold text-gray-800">YAMATO TRANSPORT CO.,LTD</div>
                </div>


                <div className=" flex justify-between items-center px-2 ">

                    <div>
                        <div>
                            <div className="text-left text-lg font-medium">DESTINATION</div>
                            <div className="text-lg font-medium ">BOM MUMBAI</div>
                        </div>
                        <div>
                            <div className="text-left text-sm font-medium">CONGINED TO MESSER:</div>
                            <div className="text-sm font-medium ">ODYSEE LOGISTIC PVT.LTD (BOM)</div>
                        </div>
                    </div>

                    <div className="ml-24"> 
                        <div>
                            <div className="text-left text-lg font-medium">MASTER  AWB</div>
                            <div className="text-lg font-medium ">217-94037775</div>
                        </div>
                        <div>
                            <div className="text-left  text-lg font-medium">ISSUE DATE</div>
                            <div className=" text-lg font-medium ">2023/09/19</div>
                        </div>
                    </div>


                    <table>
                        <div className="mb-3">
                            <tr>
                                <td className="text-left text-sm font-medium">FLT NO. /DATE</td>
                            </tr>
                            <tr>
                                <td className="text-left text-sm font-medium">TG 623/ 20 </td>
                            </tr>
                            <tr>
                                <td className="text-left text-sm font-medium">T6 317 1 22</td>
                            </tr>
                        </div>
                    </table>







                </div>
                <div className=" flex justify-between items-center px-2 ">

                    <div>
                        <div>
                            <div className="text-left text-sm  font-medium">AIRPORT OF DEPARTMENT</div>
                            <div className="text-sm  font-medium ">KANSI AIRPORT</div>
                        </div>

                    </div>

                    <div className="mr-20">
                        <div>
                            <div className="text-left text-sm font-medium">CONSOL PLACE</div>
                            <div className="text-sm  font-medium ">KANSI CONSOLIDATION OFFICE</div>
                        </div>

                    </div>

                </div>

                <div className="flex ">
                    <div className="w-full ">
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow  ring-black  sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300 ">
                                            <thead className="">
                                                <tr>
                                                    <th scope="col" className="py-3.5 px-2 text-left text-sm font-semibold text-gray-900 sm:pl-6 ">
                                                        No
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        HAWB No
                                                    </th>

                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        Pcs
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        <div>G.w/t</div>
                                                        <div>C.w/tT</div>
                                                    </th>

                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        Dest
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        Description of goods
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        Remarks
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900 ">
                                                        C Charge
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className=" divide-gray-200 bg-white">
                                                {people.map((person) => (
                                                    <tr key={person.email}>
                                                        <td className="whitespace-nowrap py-4  text-sm font-medium text-gray-900 sm:pl-6 border-r-2 ">
                                                            1
                                                        </td>
                                                        <td className="whitespace-nowrap px-2  text-sm font-medium text-gray-500 border-r-2">{person.HAWB}</td>

                                                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-500 border-r-2">
                                                           1
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500 border-r-2" ><div>188.0</div><div>188.0</div></td>
                                                        <td className="whitespace px-2 py-4 text-sm text-gray-500  font-medium border-r-2"> Bom </td>
                                                        <td className="whitespace-nowrap py-4  text-sm font-medium text-gray-500  sm:pl-6 border-r-2 ">
                                                           Carbide main roll Assy
                                                        </td>
                                                        <td className=" px-3 py-4 text-sm text-gray-500 font-medium border-r-2">
                                                           
                                                        </td>
                                                        <td className=" px-3 py-4 text-sm text-gray-500 font-medium border-r-2">
                                                           0
                                                           </td>

                                                    </tr>
                                                ))}
                                                {rows()}
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>







                </div>
















            </div>
        </div>


    )

}