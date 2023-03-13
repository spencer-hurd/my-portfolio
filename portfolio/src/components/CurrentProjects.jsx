import "./Styles/CurrentProjects.css";
import alphabetron from "/src/assets/Alphabetron.png";
const CurrentProjects = () => {
  return (
    <div className="project-section">
      <h3 className="h-3">Current Project(s):</h3>
      <hr />
      <p>Here's what I'm currently working on.</p>
      <div className="project">
        <div className="name-and-pic">
          <b className="project-name">ALPHABETRON</b>
          <img className="project-pic" src={alphabetron} />
        </div>
        <div className="pic-desc">
          <p className="project-desc">
            ALPHABETRON is an 8-bit themed word game where players must make as
            many words as possible within a set time limit. The game is
            level-based and has a winning word for each round that must be used
            to progress. In addition, players have five lives which can be lost
            by re-entering words already declared incorrect or already played.
            Every 10 levels, lives are restored. I'm currently developing this
            game with React, striving to create a captivating, level-based word
            game that challenges players with every round.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjects;
