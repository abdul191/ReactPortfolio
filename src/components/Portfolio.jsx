import data from "../data/index.json";
import githubLogo from "../assets/svg/github.svg";
import queueManagement from "../assets/images/hospitalManagement.jpg";
import facilityManagement from "../assets/images/facilityManagement.jpg";
import noteKeeper from "../assets/images/keeper.jpg";
import { useTranslation } from "react-i18next";
function Portfolio() {
  const { t } = useTranslation();
  const portfolioImages = {
    "Queue Management System": queueManagement,
    "Note Keeper Application": noteKeeper,
    "Facility Management System": facilityManagement,
  };
  return (
    <section className="portfolioSection" id="portfolioSection">
      <div className="portfolioContainerBox">
        <div className="portfolioContainer">
          <p className="sectionTitle">{t('portfolio.title')}</p>
          <h2 className="sectionHeading">{t('portfolio.heading')}</h2>
        </div>
        <div>
          <a href="https://github.com/abdul191" className="btn btnGithub">
            <img src={githubLogo} alt="github logo" className="githubLogo" />
            {t('portfolio.heading')}
          </a>
        </div>
      </div>
      <div className="porfolioSectionContainer">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolioSectionCard">
            <div className="portfolioSectionImg">
              <img src={portfolioImages[item.title]} alt="Placeholder" />
            </div>
            <div className="portfolioSectionCardContent">
              <div>
                <h3 className="portfolioSectionTitle">{t(`portfolio.projects.${index}.title`)}</h3>
                <p className="textMd">{t(`portfolio.projects.${index}.description`)}</p>
              </div>
              <div className="portfolioGithubLive">
                <p className="textSm porfolioLink">
                  <a href={item.githubLink} className="arrowBtn">
                    {t(`portfolio.projects.${index}.link`)}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none">
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                      />
                    </svg>
                  </a>
                </p>
                <p className="porfolioLink textSm">
                  <a href={item.liveLink} className="arrowBtn">
                    {item.linkContent}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
