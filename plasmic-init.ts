import Helloworld  from "@/components/Helloworld";
import HeroSection from "@/components/HeroSection";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

 const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "kMYeHci2xQiQ3sijqmY32D",
      token: "5yqAoZOb6rsZsIXnV1v1StPhjiG9LWfsutlTClhIR9MdLEwrR0xihds2YMNcShuvC3Umh5WiMapeUOCFVA",
    },
  ],
  preview: false,
});


PLASMIC.registerComponent(HeroSection, {
  name: 'HeroSection',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
})

export default PLASMIC