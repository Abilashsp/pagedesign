import { HelloWorld } from "@/components/Helloworld";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "kMYeHci2xQiQ3sijqmY32D",
      token: "5yqAoZOb6rsZsIXnV1v1StPhjiG9LWfsutlTClhIR9MdLEwrR0xihds2YMNcShuvC3Umh5WiMapeUOCFVA",
    },
  ],
  preview: false,
});


PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});