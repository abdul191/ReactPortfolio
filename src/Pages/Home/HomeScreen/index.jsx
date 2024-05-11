import HeroSections from "../HeroSections";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
function index() {
  return (
    <>
      <HeroSections />
      <Skills/>
      <AboutMe/>
      <Portfolio/>
      <Testimonials/>
    </>
  );
}

export default index;
