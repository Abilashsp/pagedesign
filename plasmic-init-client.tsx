import HeroSection from "@/components/HeroSection";
import { PLASMIC } from "./plasmic-init";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import React from "react";


PLASMIC.registerComponent(HeroSection, {
    name: "HeroSection",
    props: {
      children: "slot",  
    },
  });