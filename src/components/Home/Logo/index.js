import "./index.scss";
//import LogoS from "../../../assets/images/logo-v.png";
import { useEffect, useRef } from "react";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  console.log(outlineLogoRef);

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     });
  // }, []);
  return (
    <div className="logo-container" ref={bgRef}>
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 482.842 482.842"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" fill="none">
          <path
            ref={outlineLogoRef}
            d="M482.842,365.758V0H0v365.758h188.51l-34.875,96.538h-36.633v20.546h248.835v-20.546h-36.637l-34.876-96.538H482.842z    M20.546,20.546h441.749v324.665H20.546V20.546z M307.353,462.295H175.482l34.878-96.538h62.116L307.353,462.295z"
          />
          <path
            ref={outlineLogoRef}
            d="M335.199,125.396l54.18,58.81l-51.728,56.151l-15.109-13.925l38.896-42.226L320.09,139.32L335.199,125.396z    M147.638,125.396l-54.171,58.81l51.723,56.151l15.109-13.925l-38.901-42.226l41.349-44.886L147.638,125.396z M205.9,263.537   l19.965,4.856l40.416-166.177l-19.965-4.856L205.9,263.537z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
