import Hero from "../../assets/images/hero.jpg"
function HeroSections() {
  return (
<section id="heroSection" className="heroSection">
  <div className="heroSectionContentBox">
    <div className="heroSectionContent">
      <p className="sectionTitle">
      Hey, {"I'm"} Abdul Rehman
      </p>
      <h1 className="heroSectionTitle">
        <span className="heroSectionTitleColor">
          Full Stack
        </span> { " " }
        <br />
        Developer
      </h1>
      <p className="heroSectionDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae.
        <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit?
      </p>
    </div>
    <button className="btn btnPrimary">Get In Touch</button>
  </div>
  <div className="heroSectionImg">
    <img src={Hero} alt="hero section" />
  </div>
</section>
  )
}

export default HeroSections
