

const people = [
    {
        name: 'Lindsay Walton', HAWB: "YGL-31983744", shipper: 'T.RAD co.,pvt', Con: "TATA TOYOTO RADIATOR LTD", Mobile: "91 9679767837", Address1: 'Aici. Missay Dowa, Insurance Shinjuku Bldg 3-25-3. Yoyogi. Shibuya-ku, Tokyo151-0053, JAPAN Attn: Yoriko SaitoPhone.+81-3-3373-2197 FAX.+81-3-3373-1199',
        Address2: 'Aici. Missay Dowa, Insurance Shinjuku Bldg 3-25-3. Yoyogi. Shibuya-ku, Tokyo151-0053, JAPAN Attn: Yoriko SaitoPhone.+81-3-3373-2197 FAX.+81-3-3373-1199'
    },


]


export default function Example() {

    return (
        <div className="h-screen">
            <div className="mx-auto mt-10 max-w-7xl h-4/5 bg-white sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center px-2 pt-4  ">
                    <div className="text-sm font-medium text-gray-800">AIR CARGO</div>
                    <div className="text-xl font-bold text-gray-800">MANIFEST</div>
                    <div className="text-sm font-medium text-gray-800">YAMATO TRANSPORT C0., LTD.</div>
                </div>

                <div className=" flex justify-between items-center px-2 ">

                    <table>
                        <tr>
                            <td className="text-left text-sm font-medium">DESTINATION</td>
                            <td className="text-center">:</td>
                            <td className=" text-sm font-medium px-1">Bom Mumbai</td>
                        </tr>
                        <tr>
                            <td className="text-left text-sm font-medium">CONSIGNED TO</td>
                            <td className="text-center text-sm font-medium">:</td>
                            <td className="text-sm font-medium px-1">odyssee</td>
                        </tr>
                        <tr>
                            <td className="text-left text-sm font-medium">AIRLINE</td>
                            <td className="text-center">:</td>
                            <td className="text-sm font-medium px-1">thailand airline pvt</td>
                        </tr>
                        <tr>
                            <td className="text-left text-sm font-medium"> AIRLINE NATIONALITY</td>
                            <td className="text-center">:</td>
                            <td className=" text-sm font-medium px-1" > tailand</td>
                        </tr>
                    </table>

                    <table >
                        <div>
                            <tr className="text-xl font-semibold">
                                <td className="text-left text-sm font-bold ">MAWB No</td>
                                <td className="text-center">:</td>
                                <td className=" text-sm font-bold px-1">217-94037775</td>
                            </tr>
                        </div>

                        <div className="mt-3">
                            <tr >
                                <td className="text-left text-sm font-medium">AIRPORI OE DEP</td>
                                <td className="text-center">:</td>
                                <td className="text-sm font-medium px-1">KANSAI AIRPORE</td>
                            </tr>
                            <tr>
                                <td className="text-left text-sm font-medium"> ISSUED DATE</td>
                                <td className="text-center">:</td>
                                <td className="text-sm font-medium px-1">2023 09/19</td>
                            </tr>
                        </div>
                    </table>


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

                <div className="flex ">
                    <div className="w-4/5">
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300 ">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3.5 px-2 text-left text-sm font-semibold text-gray-900 sm:pl-6 border-r-2">
                                                        No
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        HAWB No
                                                    </th>

                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        <div> SLAC PCS</div>
                                                        SHIPPER CONSIGNEE NAME
                                                        <div> REMARKS</div>
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        PCS
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        G/W DEST NATURE OF GOODS
                                                    </th>
                                                    <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                                        SHIPPER CONSIGNEE ADDRESS
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className=" divide-gray-200 bg-white">
                                                {people.map((person) => (
                                                    <tr key={person.email}>
                                                        <td className="whitespace-nowrap py-4  text-sm font-medium text-gray-900 sm:pl-6 border-r-2">
                                                            1
                                                        </td>
                                                        <td className="whitespace-nowrap px-2  text-sm font-medium text-gray-500">{person.HAWB}</td>

                                                        <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-500">
                                                            <div className=" py-4 ">
                                                                <span>{`(shipper) ${person.shipper}`}</span>
                                                            </div>
                                                            <div className=" py-4">
                                                                <span >{`(Conginee) ${person.Con}`}</span>
                                                            </div>
                                                            <div>
                                                                <table>
                                                                    <tr>
                                                                        <td>{`(REMARKS) `}</td>

                                                                    </tr>

                                                                </table>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-4 text-sm text-gray-500">1</td>
                                                        <td className="whitespace px-2 py-4 text-sm text-gray-500 font-medium">188.0 bom carbie main role</td>
                                                        <td className=" px-3 py-4 text-sm text-gray-500 font-medium">
                                                            <div>
                                                                <table>
                                                                    <tr>
                                                                        <td className="text-xs"> {`(OFFICE TEL) `}</td>
                                                                        <td>{` `}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-xs">{`(ADDRESS) `}</td>
                                                                        <td>{`${person.Address1}`}</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <table>
                                                                    <tr>
                                                                        <td className="text-xs">{`(OFFICE TEL) `}</td>
                                                                        <td>{` ${person.Mobile}`}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-xs">{`(ADDRESS) `}</td>
                                                                        <td>{`${person.Address1}`}</td>
                                                                    </tr>
                                                                </table>
                                                            </div>




                                                        </td>

                                                    </tr>
                                                ))}
                                                <tr className=" px-2 py-4 border border-gray-700">
                                                    <td className="whitespace-nowrap px-2 py-6 text-sm text-gray-500 border-r-2">

                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="flex justify-between px-28 text-sm font-medium" >
                                        <div>
                                            total
                                        </div>
                                        <div>
                                            pcs:1
                                        </div>
                                        <div>
                                            G/WT :188.0

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5  ">
                        <div className=" w-4/5 mx-auto">
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300 h-80">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="py-3.5  text-left text-sm font-semibold text-gray-900 sm:pl-6 border-r-2">
                                                            Office use only
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className=" divide-gray-200 bg-white">
                                                    {people.map((person) => (
                                                        <tr key={person.email}>
                                                            <td className="whitespace-nowrap  py-4 text-sm font-medium text-gray-900 sm:pl-6 border-r-2">
                                                              
                                                            </td>

                                                        </tr>
                                                    ))}
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
        </div>


    )

}