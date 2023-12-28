import { CgSandClock } from "react-icons/cg";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { LiaMoneyCheckSolid } from "react-icons/lia"
import { EnvelopeIcon, PhoneIcon, StarIcon } from '@heroicons/react/20/solid'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    ChartBarSquareIcon,
    NewspaperIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'






import Addlabel from "@/components/UIComponents/Addlabel";
import Agilemorning from "@/components/UIComponents/Agilemorning";
import Argyle from "@/components/UIComponents/Argyle";
import Barger from "@/components/UIComponents/Barger";
import Bowen from "@/components/UIComponents/Bowen";
import Bussinessui from "@/components/UIComponents/Bussinessui";
import Card from "@/components/UIComponents/Card";
import Card2 from "@/components/UIComponents/Card2";
import Chatui from "@/components/UIComponents/Chatui";
import Commentsui from "@/components/UIComponents/Commentsui";
import Dashboard from "@/components/UIComponents/Dashboard";
import Deactivateui from "@/components/UIComponents/Deactivateui";
import Deempathyzing from "@/components/UIComponents/Deempathyzing";
import Estateui from "@/components/UIComponents/Estateui";
import Flightbookui from "@/components/UIComponents/Flightbookui";
import Folow from "@/components/UIComponents/Folow";
import Freelancer from "@/components/UIComponents/Freelancer";
import GamesummaryUI from "@/components/UIComponents/GamesummaryUI";
import Heartrate from "@/components/UIComponents/Heartrate";
import IconDeemp from "@/components/UIComponents/IconDeemp";
import Inputbox from "@/components/UIComponents/Inputbox";
import Label from "@/components/UIComponents/Label";
import License from "@/components/UIComponents/License";
import Lightsource from "@/components/UIComponents/Lightsource";
import Login from "@/components/UIComponents/Login";
import Musicplayer from "@/components/UIComponents/Musicplayer";
import Passwordprotector from "@/components/UIComponents/Passwordprotector";
import Playback from "@/components/UIComponents/Playback";
import Premiersuite from "@/components/UIComponents/Premiersuite";
import Premium from "@/components/UIComponents/Premium";
import Profile from "@/components/UIComponents/Profile";
import Profiledrop from "@/components/UIComponents/Profiledrop";
import Restaurant from "@/components/UIComponents/Restaurant";
import Sectiontittle from "@/components/UIComponents/Sectiontittle";
import Sidebar from "@/components/UIComponents/Sidebar";
import Sofa from "@/components/UIComponents/Sofa";
import StyleStorage from "@/components/UIComponents/StyleStorage";
import Tableui from "@/components/UIComponents/Tableui";
import Takeday from "@/components/UIComponents/Takeday";
import Trendingnews from "@/components/UIComponents/Trendingnews";
import Trip from "@/components/UIComponents/Trip";
import Twofactorauth from "@/components/UIComponents/Twofactorauth";
import UnbanfairUI from "@/components/UIComponents/UnbanfairUI";
import Youtube from "@/components/UIComponents/Youtube";
import Semanticsbuttons from "@/components/UIComponents/Semanticsbuttons";
import Cards from "@/components/UIComponents/Cards";
import CarousalUI from "@/components/UIComponents/CarousalUI";
import Whatsappchat from "@/components/UIComponents/Whatsappchat";
import Userfeature from "@/components/UIComponents/Userfeature";
import UsegoodphotoUI from "@/components/UIComponents/UsegoodphotoUI";


























const pages=[{href:"StyleStorage/StyleStorage"},
{href:"CommentUI/Commentsui"},
{href:"Argyle/Argyle"},
{href:"Bussinessui/Bussinessui"},
{href:"Chatui/Chatui"},
{href:"Tableui/Tableui"},
{href:"Cards/Cards"},
{href:"Card2/Card2"},
{href:"Deempathyzing/Deempathyzing"},
{href:"Sidebar/Sidebar"},
{href:"Label/Label"},
{href:"Addlabel/Addlabel"},
{href:"Estateui/Estateui"},
{href:"Heartrate/Heartrate"},
{href:"Sectiontittle/Sectiontittle"},
{href:"IconDeemp/IconDeemp"},
{href:"Tweet/Tweet"},
{href:"Semanticsbuttons/Semanticsbuttons"},
{href:"Deactivateui/DeactivateUI"},
{href:"Layout_and_Spacing/Twofactorauth"},
{href:"Layout_and_Spacing/RatingUI"},
{href:"Layout_and_Spacing/GamesummaryUI"},
{href:"Spacing_and_size/Premiersuite"},
{href:"Spacing_and_size/UnbanfairUI"},
{href:"Spacing_and_size/Login"},
{href:"Spacing_and_size/Musicplayer"},
{href:"Spacing_and_size/Playback"},
{href:"Grid/Dashboard"},
{href:"Grid/Restaurant"},
{href:"DesignText/Sofa"},
{href:"DesignText/Folow"},
{href:"Youtube/Youtube"},
{href:"Bowengroups/Bowen"},
{href:"Card/Card"},
{href:"Card/Table"},
{href:"Lightsource/Lightsource"},
{href:"Trendingnews/Inputbox"},
{href:"Card/Passwordprotector"},
{href:"Card/Agilemorning"},
{href:"Trendingnews/Trendingnews"},
{href:"Trendingnews/Trip"},                                              
{href:"Trendingnews/License"},
{href:"Trendingnews/CarousalUI"},
{href:"Trendingnews/Profile"},
{href:"Usegoodphotos/UsegoodphotoUI"},
{href:"Takecontrolday/Takeday"},
{href:"Barger/Barger"},
{href:"Whatsappchat/Whatsappchat"},
{href:"Flightbookui/Flightbookui"},
{href:"Cart/Cart"},
{href:"Profiledrop/Profiledrop"},
{href:"BlueCard/BlueCard"},
{href:"DragandDrop/DragandDrop"},
{href:"TableZ/TableZ"},
{href:"Roommate/Roommate"},
{href:"Protectpoints/Protectpoints"},
{href:"Check/Check"},
]























export default function Tweet() {


    return (
        <div className="w-full h-full">
            <div className="w-4/5 relative mx-auto">
              <header className="bg-white w-4/5 top-0 z-10 fixed">
                <nav className="mx-auto flex w-full items-center justify-between p-3 lg:px-8" aria-label="Global">
                    <div className="flex items-center">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto text-gray-400" src="\Images\dashboard.png" alt="" />
                        </a>
                    </div>
                    <div className="mx-4 text-lg font-semibold text-gray-600 mt-2 tracking-wider">
                        UI DASHBOARD
                    </div>
                    </div>
                    <div className="flex lg:hidden">
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
            <div className=" w-full mx-auto  h-full absolute z-0 top-12">

                <div className="bg-gray-200 px-4 py-5 w-full  h-auto sm:px-6 relative ">
                    <div>
                        <ul role="list" className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4">
                            {pages.map((person, index) => (
                                <li  className="col-span-1  bg-white mx-2 my-4 border-2 border-gray-300 rounded-md ">
                                    <div className="w-full items-center  shadow-md shadow-gray-400 rounded-md  ">
                                        <div className="flex-shrink-0 relative rounded-md hover:border-gray-700 hover:border-2 hover:shadow-lg ">
                                            <a href={person.href} >
                                            <img
                                                className="h-40 w-full border-2 border-gray-200 rounded-md  object-cover   "
                                                src={`/Homepage/${index+1}.png`}
                                                alt=""
                                            />
                                       </a>

                                        </div>
                                        

                                    </div>
                             
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>


            </div>
        </div>
        </div>






































    )
}
