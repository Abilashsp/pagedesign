import React from 'react'

export default function HeroSection() {


    const data=fetch("../Font/Roboto-Black.ttf")
    .then(response => response.arrayBuffer())

    console.log(data)
  return (
    <div>HeroSection</div>
  )
}
