import * as React from 'react';
import { PlasmicCanvasHost, PlasmicComponent, PlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import  PLASMIC  from '../../plasmic-init';


export default function PlasmicHost() {
  
  return(
    <PlasmicRootProvider loader={PLASMIC} >
  <PlasmicCanvasHost/>
    </PlasmicRootProvider>
  )
}