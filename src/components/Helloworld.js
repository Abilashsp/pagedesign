import satori from 'satori';

const fontData = fetch(('../Font/Roboto-Black.ttf')).then((res) => res.arrayBuffer());

console.log("font data",fontData)

const Svg = await satori(
  
  <div style={{ fontFamily: 'sans-serif', color: 'black' }}>
    hello, world
  </div>,
  {
    width: 600,
    height: 400,
    fonts:[{
      name: 'Roboto',
      weight: 400,
      style: 'normal',
      data:fontData
    }
    ]
  },
);

export default Svg;
