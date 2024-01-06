import { CgSandClock } from "react-icons/cg";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { ChartBarSquareIcon, NewspaperIcon } from "@heroicons/react/24/outline";

const DashboardNavigation = [
  { name: "Dashboard", href: "#", icon: ChartBarSquareIcon, current: true },
  { name: "Invoice", href: "#", icon: NewspaperIcon, current: false },
  { name: "Expanses", href: "#", icon: LiaMoneyCheckSolid, current: false },
  { name: "Time Tracking", href: "#", icon: CgSandClock, current: false },
];
export default DashboardNavigation;
