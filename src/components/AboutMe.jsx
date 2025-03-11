import Hero from "../assets/images/aboutMe.png";

function AboutMe() {
  return (
    <section id="AboutMe" className="aboutSection">
      <div className="aboutSectionImg">
        <img src={Hero} alt="aboutMe" />
      </div>
      <div className="heroSectionContentBox aboutSectionBox">
        <div className="heroSectionContent">
          <p className="sectionTitle">About</p>
          <h1 className="skillsSectionHeading">About Me</h1>
          <p className="heroSectionDescription">
            Front-end developer skilled in JavaScript, React.js, and responsive
            design. Contributed to essential React.js components for leading
            companies.
          </p>
          <p className="heroSectionDescription">
            Committed to staying updated with technology advancements and
            sharing knowledge within the tech community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
