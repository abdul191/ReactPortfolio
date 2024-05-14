import Data from "../../data/index.json";
function Skills() {
  return (
    <>
      <section className="skillsSection" id="myExpertise">
        <div className="portfolioContainer">
          <p className="sectionTitle">My Skills</p>
          <h2 className="skillsSectionHeading">My Expertise</h2>
        </div>
        <div className="skillsSectionContainer">
          {Data.skills?.map((item, index) => (
            <div key={index} className="skillsSectionCard">
              <div className="skillSectionImg">
                <img src={item.src} alt="Skills" className="skillsImg" />
              </div>
              <div className="skillsSectionCardContent">
                <h3 className="skillsSectionTitle">{item.title}</h3>
                <p className="skillsSectionDescription">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
