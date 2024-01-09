import { Bars3Icon } from "@heroicons/react/24/outline";
import Navbardata from "../../components/Seed/WTwebsitedata/Navbardata";

export default function Navbar({ data = Navbardata }) {
  return (
    <div className="w-full h-full  font-WTfont">
      <div className="w-full relative mx-auto ">
        <header className="bg-white w-full top-0 z-20 fixed py-2">
          <nav
            className="mx-auto flex w-full items-center justify-between p-3 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center">
              <div className="mx-4 text-2xl font-bold text-gray-800 mt-2 ">
                WTF
              </div>
            </div>

            <div className="flex items-center pl-20 ">
              {data.map((d) => (
                <div className=" px-3 text-[18px] font-medium text-[#596b76] tracking-wide ">
                  {d.Name}
                </div>
              ))}
            </div>

            <div className=" w-auto">
              <button
                type="button"
                className="rounded-3xl bg-[#136ff1] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 leading-relaxed "
              >
               FREE CONSULTATION
              </button>
            </div>

            <div className="flex lg:hidden  ">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
