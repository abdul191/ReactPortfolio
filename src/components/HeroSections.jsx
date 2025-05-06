import { TypeAnimation } from "react-type-animation";
import Hero from "../assets/images/hero.png";
import { FaDownload } from "react-icons/fa6";
import resume from "../assets/Resume.pdf";
import { useTranslation } from 'react-i18next';

function HeroSections() {
  const { t } = useTranslation();
  const titles = [
    t("heroSection.title1"),
    t("heroSection.title2"),
    t("heroSection.title3"),
    t("heroSection.title4")
  ];
  return (
    <section id="heroSection" className="heroSection">
      <div className="heroSectionContentBox">
        <div className="heroSectionContent">
          <p className="sectionTitle">{t('heroSection.greeting')}</p>
          <h1 className="heroSectionTitle">
            <span className="heroSectionTitleColor">
              <TypeAnimation
                sequence={[
                  ...titles.flatMap((title) => [title, 1500]),
                  () => { }
                ]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                repeat={Infinity}
              />
            </span>
            <br />
            {t('heroSection.developer')}
          </h1>
          <p className="heroSectionDescription">
            {t('heroSection.description')}

          </p>
        </div>
        <a href={resume} download className="btn btnPrimary">
          {t('heroSection.downloadCV')}
          <FaDownload />
        </a>
      </div>
      <div className="heroSectionImg">
        <img src={Hero} alt="hero section" />
      </div>
    </section>
  );
}

export default HeroSections;
