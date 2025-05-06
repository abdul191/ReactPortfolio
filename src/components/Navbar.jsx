import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/svg/logo-apple-appstore-svgrepo-com.svg";
import Modes from "./Modes";
import LanguageToggle from "./Languages";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();

  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);
  return (
    <>
      <nav className={`navbar ${navActive ? "active" : " "}`}>
        <div>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="heroSection">
            <img src={Logo} alt="logoipsum" className="svg" />
          </Link>
        </div>
        <a
          href="#"
          className={`navHamburger ${navActive ? "active" : " "}`}
          onClick={toggleNav}>
          <span className="navHamburgerLine"></span>
          <span className="navHamburgerLine"></span>
          <span className="navHamburgerLine"></span>
        </a>
        <div className={`navbarItems ${navActive ? "active" : " "}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbarContent">
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="myExpertise"
                className="navbarContent">
                {t('navbar.myExpertise')}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbarContent">
                {t('navbar.aboutMe')}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="portfolioSection"
                className="navbarContent">
                {t('navbar.portfolio')}

              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Testimonials"
                className="navbarContent">
                {t('navbar.testimonials')}

              </Link>
            </li>
          </ul>
        </div>
        <div className="rightContainer">
          <LanguageToggle />
          <Modes />
          <Link
            onClick={closeMenu}
            activeClass="navbarActiveContent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="ContactMe"
            className="btn btnOutlinePrimary">
            {t('navbar.contactMe')}
          </Link>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
