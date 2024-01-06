import {
  ChartBarIcon,
  BellIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { LuRefreshCw } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";

export const navigationDropDownDetails = [
  {
    Icons: ChartBarIcon,
    Name: "Engagement",
    Desc: "Measure action users take",
  },
  { Icons: BellIcon, Name: "Notifications", Desc: "Keep customers informed" },
  { Icons: CheckCircleIcon, Name: "Funnel", Desc: "Pinpoint lost conversions" },
  {
    Icons: ArrowTrendingUpIcon,
    Name: "Forcasting",
    Desc: "Plan for the future",
  },
  {
    Icons: LuRefreshCw,
    Name: "Automations",
    Desc: "Create your own custom rules",
  },
  {
    Icons: RxDashboard,
    Name: "Control Center",
    Desc: "Everything needed in one view",
  },
];
export const additionaldetails = [
  {
    Icons: IoDocumentOutline,
    Name: "Documentation",
    Desc: "Start integrating products and tools",
  },
  {
    Icons: IoExtensionPuzzleOutline,
    Name: "FUll API Reference",
    Desc: "Official libraries for our API",
  },
  {
    Icons: IoCodeSlashOutline,
    Name: "Open Source",
    Desc: "Giving back to the community",
  },
];


