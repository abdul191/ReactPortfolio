import HeroSections from "../../../components/HeroSections";
import Skills from "../../../components/Skills";
import AboutMe from "../../../components/AboutMe";
import Portfolio from "../../../components/Portfolio";
import Testimonials from "../../../components/Testimonials";
import ContactMe from "../../../components/ContactMe";
import Footer from "../../../components/Footer";
function index() {
  return (
    <>
      <HeroSections />
      <Skills />
      <AboutMe />
      <Portfolio />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}

export default index;
