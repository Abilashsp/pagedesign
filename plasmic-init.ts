import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
import * as NextNavigation from "next/navigation";

export const PLASMIC = initPlasmicLoader({
  nextNavigation: NextNavigation,
  projects: [
    {
      id: "961Dap539VqK6ewnrYwsre",
      token:
        "Ey2dSPAF37f6N1EP4cg4xf61nx3moqyPCidIpkWSAq2XkqcLSJcgUxEsZwCGPMG2OZm1HHii3UcxRoCLVYaQ",
    },
  ],


  preview: false,
});