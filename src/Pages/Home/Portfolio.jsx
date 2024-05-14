import data from "../../data/index.json";
import githubLogo from "../../assets/svg/github.svg"
function Portfolio() {
  return (
    <section className="portfolioSection" id="portfolioSection">
      <div className="portfolioContainerBox">
        <div className="portfolioContainer">
          <p className="sectionTitle">Recent Projects</p>
          <h2 className="sectionHeading">My Portfolio</h2>
        </div>
        <div>
          <a href="https://github.com/abdul191" className="btn btnGithub">
            <img src={githubLogo} alt="github logo"  className="githubLogo"/>
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="porfolioSectionContainer">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolioSectionCard">
            <div className="portfolioSectionImg">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolioSectionCardContent">
              <div>
                <h3 className="portfolioSectionTitle">{item.title}</h3>
                <p className="textMd">{item.description}</p>
              </div>
              <p className="textSm porfolioLink">
                {item.link}
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
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
