import HeroSections from "../HeroSections";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
function index() {
  return (
    <>
      <HeroSections />
      <Skills/>
      <AboutMe/>
      <Portfolio/>
      <Testimonials/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default index;
