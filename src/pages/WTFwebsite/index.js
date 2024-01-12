import { Bars3Icon } from "@heroicons/react/24/outline";
import Navbardata from "../../components/Seed/WTwebsitedata/Navbardata";
import StartUp from "./StartUp";
import UseCases from "./UseCases"
import WNavbar from "./WNavbar"
import HowItsWorkUI from "./HowItsWorkUI"
import PersonalizedQuotes from "./PersonalizedQuotes"
import Sponser from "./Sponser"
import ContactUS from "./ContactUS"
import Footer from "./Footer"

export default function Navbar({ data = Navbardata }) {
  return (
    <div className="w-full h-full font-WTfont">
      <div className="w-full relative mx-auto ">
       <WNavbar/>
        <div className="mt-20 bg-white pt-24 ">
        <StartUp/>
      </div>
      <div className="bg-white pt-24">
        <UseCases/>
      </div>
      <div className="bg-white pt-24">
        <HowItsWorkUI/>
      </div>
      <div className="bg-white pt-24">
        <PersonalizedQuotes/>
      </div>
      <div className="bg-white pt-10">
        <Sponser/>
      </div>
      <div className="  pt-10 bg-white">
        <ContactUS/>
      </div>
      <div className="  bg-white">
        <Footer/>
      </div>
      </div>
    </div>
  );
}
