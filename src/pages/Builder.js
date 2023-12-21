
import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";


export default function IndexPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
    <PlasmicComponent component="HeroSection"/>
    </PlasmicRootProvider>
  );
}