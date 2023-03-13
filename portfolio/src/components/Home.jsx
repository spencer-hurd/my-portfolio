import CurrentProjects from "./CurrentProjects";
import TechStack from "./TechStack";
import resume from "/src/assets/SpencerHurdResume.pdf";
import "./Styles/Home.css";
const Home = () => {
  return (
    <div className="home-page">
      <div id="first-section" className="section">
        <h3 className="h-3">Introducing Myself:</h3>
        <hr />
        <div className="intro-container">
          <p>
            Welcome to my website! I'm Spencer Hurd, a full stack software
            developer with a passion for creating innovative solutions to
            complex problems. My background in music instruction and band
            directing has given me a unique set of skills—including creative
            problem-solving, thinking outside the box, strong communication and
            collaboration skills, detail-oriented design, and a strong work
            ethic. With the knowledge gained from a 12-week bootcamp immersive
            at the University of Texas at Dallas, powered by Fullstack Academy,
            I'm eager to start a career in web development and use my newfound
            skills to make impactful projects.
          </p>
          <a href={resume} download>
            <button id="resume-button">Download Resume PDF</button>
          </a>
        </div>
      </div>
      <div className="stack-section section">
        <TechStack />
      </div>
      <div className="project-section section">
        <CurrentProjects />
      </div>
    </div>
  );
};
export default Home;
