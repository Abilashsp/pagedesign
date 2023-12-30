import * as React from "react";
import {
  PlasmicCanvasHost,
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import PLASMIC from "../../plasmic-init";
import TailwindStyle from "./TailwindStyle";

export default function PlasmicHost() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <div className="flex">
        <div className="w-3/12">Controls</div>
        <div className="w-6/12">Page Design</div>
        <div className="w-3/12">
          <TailwindStyle
            initialSelectedStyles={{
              "Aspect Ratio": "aspect-auto",
              Container: "container",
              Columns: "columns-2",
            }}
          />
        </div>
      </div>
    </PlasmicRootProvider>
  );
}
