
import {
  footerdata,
  additionaldata,
} from "../../components/Seed/FooterDetails";

export default function Example() {
  return (
    <div className="w-screen h-screen ">
      <div
        role="list"
        className="w-3/6 h-2/5 relative mx-3 mt-3 rounded-md bg-[#28323c]   "
      >
        <div className="flex  gap-x-14 px-8">
          <div className=" grid grid-cols-2 gap-2 px-2 ">
            {footerdata.map((data) => (
              <div className=" ">
                <div className="text-gray-200 text-sm py-1 ">{data}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 px-2  ">
            {additionaldata.map((data, index) =>
              index !== additionaldata.length - 1 ? (
                <div className="" key={index}>
                  <div className="text-gray-200 text-sm py-1">{data}</div>
                </div>
              ) : null
            )}
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="text-gray-200 text-sm py-1">
              {additionaldata[additionaldata.length - 1]}
            </div>
            <div className="text-[#a5e1eb] text-sm py-2">
              Sign up for our new<br/>
              week.
            </div>
            <div className="py-3">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-3xl  border-2  py-2 px-4 text-gray-900  ring-inset  placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email  "
              />
            </div>
          </div>
        </div>

        <div>
        <div>
  <div
    style={{
      backgroundColor: '',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 32 32\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'Artboard-5\' fill=\'%239C92AC\' fill-opacity=\'0.59\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M6 18h12V6H6v12zM4 4h16v16H4V4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      width: '100%', 
      height: '120px',
    }}
  >
  </div>
</div>

</div>
      </div>
    </div>
  );
}
