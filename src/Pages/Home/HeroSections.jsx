import { TypeAnimation } from "react-type-animation";
import Hero from "../../assets/images/hero.png";
import { FaDownload } from "react-icons/fa6";
import resume from "../../assets/Resume.pdf";
function HeroSections() {
  return (
    <section id="heroSection" className="heroSection">
      <div className="heroSectionContentBox">
        <div className="heroSectionContent">
          <p className="sectionTitle">Hey, {"I'm"} Abdul Rehman</p>
          <h1 className="heroSectionTitle">
            <span className="heroSectionTitleColor">
              <TypeAnimation
                sequence={[
                  "Software ",
                  1500,
                  "Frontend ",
                  1500,
                  "React.js",
                  1500,
                  "Mernstack",
                  1500,
                  () => { },
                ]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                repeat={Infinity}
              />
            </span>
            <br />
            Developer
          </h1>
          <p className="heroSectionDescription">
            Passionate about creating engaging digital experiences: skilled in
            JavaScript, React.js, Redux and the MERN stack. {`Let's `}
            collaborate and bring your digital projects to life.
            Together, {`we'll`} build something extraordinary.
          </p>
        </div>
        <a href={resume} download className="btn btnPrimary">
          Download CV <FaDownload />
        </a>
      </div>
      <div className="heroSectionImg">
        <img src={Hero} alt="hero section" />
      </div>
    </section>
  );
}

export default HeroSections;
