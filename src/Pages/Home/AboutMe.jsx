import Hero from "../../assets/images/hero.jpg"

function AboutMe() {
  return <section id="AboutMe" className="aboutSection">
    <div className="aboutSectionImg">
        <img src={Hero} alt="aboutMe" />
    </div>
    <div className="heroSectionContentBox aboutSectionBox">
        <div className="heroSectionContent">
            <p className="sectionTitle">
                About
            </p>
            <h1 className="skillsSectionHeading">About Me</h1>
            <p className="heroSectionDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat fugiat sequi atque distinctio perferendis dolorem a ullam reiciendis nam veniam, est, debitis ratione quisquam nobis tempora facere quos beatae.</p>
            <p className="heroSectionDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat fugiat sequi atque distinctio perferendis dolorem a ullam reiciendis nam veniam, est, debitis ratione quisquam nobis tempora facere quos beatae.</p>
        </div>
    </div>
  </section>;
}

export default AboutMe;
