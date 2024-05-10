import HeroSections from "../HeroSections";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
function index() {
  return (
    <>
      <HeroSections />
      <Skills/>
      <AboutMe/>
      <Portfolio/>
    </>
  );
}

export default index;
