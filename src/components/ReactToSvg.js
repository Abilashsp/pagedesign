import { useEffect, useState } from "react";
import satori from "satori";

export default function ReactToSvg() {
  const [Svg, setSvg] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch("../Font/Roboto-Black.ttf");
      console.log("request");
      const fontData = await request.arrayBuffer();
      console.log("fontData", fontData);
      const _svg = await satori(
        <div style={{ fontFamily: "sans-serif", color: "black" }}>
          hello, world
        </div>,
        {
          width: 600,
          height: 400,
          fonts: [
            {
              name: "Roboto",
              weight: 400,
              style: "normal",
              data: fontData,
            },
          ],
        }
      );
      console.log("_svg", _svg);
      setSvg(_svg);
    }

    fetchData();
  }, []);

  return (
    <>
      <Svg />
    </>
  );
}
