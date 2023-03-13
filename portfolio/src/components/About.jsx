import AboutPhotos from "./AboutPhotos";
import "./Styles/About.css";
const About = () => {
  return (
    <div id="about" className="section">
      <h3 id="abt-h3" className="page-name">
        About Me
      </h3>
      <hr />
      <AboutPhotos />
      <div className="aboutsection ">
        <p>
          I am Spencer, a full-stack software engineer passionate about creating
          innovative and impactful projects. After completing a 12-week bootcamp
          immersive through the University of Texas at Dallas, powered by
          Fullstack Academy, I have acquired the skills necessary to design and
          develop websites, applications, and other software solutions.
          Throughout the program, I worked diligently to gain a comprehensive
          understanding of web application development, including researching
          new concepts and methods to optimize my skills and products. I enjoy
          researching daily to continuously expand my knowledge and abilities. I
          was also able to collaborate with other developers on various team
          projects, gaining insight into the dynamic and workflow of working
          with others. I am a driven learner and an excellent collaborator,
          always striving to improve myself and the team around me while
          ensuring that each project I create is completed with the utmost
          precision and detail.
        </p>
        <p>
          My background in music instruction and band directing has honed my
          ability to think outside the box, as well as my creative
          problem-solving and communication skills. Starting as a young teenager
          as a student of music, I consistently put my all into whatever
          instrument I picked up, and thoroughly enjoyed helping others learn.
          After graduating, I began teaching several instruments, as well as
          band directing for the performance-based music program. While this job
          was fulfilling, I found myself feeling a bit stagnant. I was ready for
          a new challenge and the opportunity to learn something new. I was
          drawn to web development because of the rapidly changing technology
          and how quickly I could learn and stay up to date with the newest
          developments. It was a great fit for me and I love the challenge and
          creativity that comes with the job.
        </p>
        <p>
          In addition to my professional pursuits, I am lucky to share my life
          with my partner Ryan, our beloved cat Circuit, dog Wylie, and bearded
          dragon Grogu. Aside from being a musician, I am also a visual artist;
          I enjoy painting, drawing, creating graphics (like the one in my
          header by my name), and other forms of art. This has been invaluable
          when designing websites and creating interfaces that are both visually
          appealing and functional. I am excited to use my creativity and
          technical skills to continue to develop and maintain web and software
          solutions for my clients, while learning and growing in a company that
          values collaboration, innovation, diversity, and creativity.
        </p>
      </div>
    </div>
  );
};

export default About;
