import { ReactLenis } from "@studio-freight/react-lenis";

import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

import Spline from "@splinetool/react-spline";

function App() {
  return (
    <>
      <Spline
        className="absolute z-20"
        scene="https://prod.spline.design/Lb8NFCFaYIp0QmvL/scene.splinecode"
      />
      {/* <Spline
        className="absolute z-20"
        scene="https://prod.spline.design/yFGbMF0qT3H8vteA/scene.splinecode"
      /> */}
      <ReactLenis root>
        <HeroSection />
        <AboutSection />
      </ReactLenis>
    </>
  );
}

export default App;
