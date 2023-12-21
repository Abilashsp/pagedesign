
import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";
import HeroSection from "../components/HeroSection"

export default function IndexPage() {
  return (
    <PlasmicRootProvider plasmic={PLASMIC}>
      <PlasmicComponent component="HeroSection"/>
    </PlasmicRootProvider>
  );
}