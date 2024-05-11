import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/svg/logo-apple-appstore-svgrepo-com.svg"
function Navbar() {
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
          <img
            src={Logo}
            alt="logoipsum"
            className="svg"
          />
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
                Home
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
                Portfolio
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
                About Me
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
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <Link
          onClick={closeMenu}
          activeClass="navbarActiveContent"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="ContactMe"
          className="btn btnOutlinePrimary">
          Contact Me
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
