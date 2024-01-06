import {
  ChartBarIcon,
  TagIcon,
  EnvelopeOpenIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { RiScissorsCutLine } from "react-icons/ri";
const DiscountNavdata = [
  { name: "Overview", href: "#", icon: ChartBarIcon, current: false },
  { name: "Products", href: "#", icon: TagIcon, current: false },
  { name: "Orders", href: "#", icon: EnvelopeOpenIcon, current: false },
  { name: "Campaigns", href: "#", icon: RocketLaunchIcon, current: false },
  {
    name: "Discount Codes",
    href: "#",
    icon: RiScissorsCutLine,
    current: false,
  },
  {
    name: "Extension",
    href: "#",
    icon: IoExtensionPuzzleOutline,
    current: false,
  },
];
export default DiscountNavdata;
