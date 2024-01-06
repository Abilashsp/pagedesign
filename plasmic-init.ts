
import Helloworld from "@/components/ReactToSvg";
import HeroSection from "@/components/HeroSection";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Addlabel from "@/components/UIComponents/Addlabel";
import Agilemorning from "@/components/UIComponents/Agilemorning";
import Argyle from "@/components/UIComponents/Argyle";
import Barger from "@/components/UIComponents/Barger";
import Bowen from "@/components/UIComponents/Bowen";
import Bussinessui from "@/components/UIComponents/Bussinessui";
import Card from "@/components/UIComponents/CardwithCross";
import Card2 from "@/components/UIComponents/CardwithUpandDown";
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
import Tweet from "@/components/UIComponents/Tweet";
import Twofactorauth from "@/components/UIComponents/Twofactorauth";
import UnbanfairUI from "@/components/UIComponents/UnbanfairUI";
import Youtube from "@/components/UIComponents/Youtube";
import Semanticsbuttons from "@/components/UIComponents/Semanticsbuttons";
import Cards from "@/components/UIComponents/Cards";
import CarousalUI from "@/components/UIComponents/CarousalUI";
import Whatsappchat from "@/components/UIComponents/Whatsappchat";
import Userfeature from "@/components/UIComponents/Userfeature";
import UsegoodphotoUI from "@/components/UIComponents/UsegoodphotoUI";
import Cart from "@/components/UIComponents/Cart";




const components = [
    { comp: Addlabel, compname: "Addlabel" },
    { comp: Agilemorning, compname: "Agilemorning" },
    { comp: Argyle, compname: "Argyle" },
    { comp: Barger, compname: "Barger" },
    { comp: Bowen, compname: "Bowen" },
    { comp: Bussinessui, compname: "Bussinessui" },
    { comp: Card, compname: "Card" },
    { comp: Card2, compname: "Card2" },
    { comp: Chatui, compname: "Chatui" },
    { comp: Commentsui, compname: "Commentsui" },
    { comp: Dashboard, compname: "Dashboard" },
    { comp: Deactivateui, compname: "Deactivateui" },
    { comp: Deempathyzing, compname: "Deempathyzing" },
    { comp: Estateui, compname: "Estateui" },
    { comp: Flightbookui, compname: "Flightbookui" },
    { comp: Folow, compname: "Folow" },
    { comp: Freelancer, compname: "Freelancer" },
    { comp: GamesummaryUI, compname: "GamesummaryUI" },
    { comp: Heartrate, compname: "Heartrate" },
    { comp: IconDeemp, compname: "IconDeemp" },
    { comp: Inputbox, compname: "Inputbox" },
    { comp: Label, compname: "Label" },
    { comp: License, compname: "License" },
    { comp: Lightsource, compname: "Lightsource" },
    { comp: Login, compname: "Login" },
    { comp: Musicplayer, compname: "Musicplayer" },
    { comp: Passwordprotector, compname: "Passwordprotector" },
    { comp: Playback, compname: "Playback" },
    { comp: Premiersuite, compname: "Premiersuite" },
    { comp: Premium, compname: "Premium" },
    { comp: Profile, compname: "Profile" },
    { comp: Profiledrop, compname: "Profiledrop" },
    { comp: Restaurant, compname: "Restaurant" },
    { comp: Sectiontittle, compname: "Sectiontittle" },
    { comp: Sidebar, compname: "Sidebar" },
    { comp: Sofa, compname: "Sofa" },
    { comp: StyleStorage, compname: "StyleStorage" },
    { comp: Tableui, compname: "Tableui" },
    { comp: Takeday, compname: "Takeday" },
    { comp: Trendingnews, compname: "Trendingnews" },
    { comp: Trip, compname: "Trip" },
    { comp: Tweet, compname: "Tweet" },
    { comp: Twofactorauth, compname: "Twofactorauth" },
    { comp: UnbanfairUI, compname: "UnbanfairUI" },
    { comp: Youtube, compname: "Youtube" },
    { comp: Semanticsbuttons, compname: "Semanticsbuttons" },
    { comp: Cards, compname: "Cards" },
    { comp: CarousalUI, compname: "CarousalUI" },
    { comp: Whatsappchat, compname: "Whatsappchat" },
    { comp: Userfeature, compname: "Userfeature" },
    { comp: UsegoodphotoUI, compname: "UsegoodphotoUI" },
    { comp: Cart, compname: "Cart" }
  
]


































const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "kMYeHci2xQiQ3sijqmY32D",
      token: "5yqAoZOb6rsZsIXnV1v1StPhjiG9LWfsutlTClhIR9MdLEwrR0xihds2YMNcShuvC3Umh5WiMapeUOCFVA",
    },
  ],
  preview: false,
});





components.map((com,index) => {
  PLASMIC.registerComponent(com.comp, {
    name: com.compname,
    props: {
      verbose: 'boolean',
      children: 'slot'
    }
  });

});


export default PLASMIC