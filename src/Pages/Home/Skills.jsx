import Data from '../../data/index.json';
import frontendImg from '../../assets/images/frontend.png';
import reactImg from '../../assets/images/react.jpg';
import responsiveDesignImg from '../../assets/images/responsiveDesign.jpg';
import versionControlImg from '../../assets/images/versionControl.jpg';

function Skills() {
  const skillImages = {
    'Front-End': frontendImg,
    'React.js': reactImg,
    'Responsive Design': responsiveDesignImg,
    'Version Control': versionControlImg
  };

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
                <img src={skillImages[item.title]} alt={item.title} className="skillsImg" />
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
