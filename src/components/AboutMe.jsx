import Hero from "../assets/images/aboutMe.png";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="AboutMe" className="aboutSection">
      <div className="aboutSectionImg">
        <img src={Hero} alt="aboutMe" />
      </div>
      <div className="heroSectionContentBox aboutSectionBox">
        <div className="heroSectionContent">
          <p className="sectionTitle">{t("aboutMe.sectionTitle")}</p>
          <h1 className="skillsSectionHeading">{t("aboutMe.heading")}</h1>
          <p className="heroSectionDescription">
            <p className="heroSectionDescription">{t("aboutMe.description1")}</p>

          </p>
          <p className="heroSectionDescription">
            <p className="heroSectionDescription">{t("aboutMe.description2")}</p>

          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
