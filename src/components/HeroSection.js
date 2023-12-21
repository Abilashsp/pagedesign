import {PLASMIC} from "../../plasmic-init"
import Commentsui from "./Commentsui/Commentsui";
import React from 'react'

function HeroSection() {
  return (
    <div>HeroSection</div>
  )
}

export default HeroSection
  PLASMIC.registerComponent( HeroSection, {
    name:" HeroSection",
    props: {
      children: "slot",
    },
  });