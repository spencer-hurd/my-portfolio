import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import './Styles/TechStack.css'
import { SiExpress, SiPostgresql, SiJson, SiVite } from "react-icons/si";

const TechStack = () => {
    return(
            <div className="tech-stack">
                <h3 className="h-3">My Tech Stack:</h3>
                <hr />
                <p className="tech-desc">These are the current languages, frameworks, libraries, and tools I utilize most in creating applications.</p>
                <div className="stacks">
                    <ul className="full-stack">
                    <h5 className="tech-h5">Frontend</h5>
                    <hr/>
                        <li className="stack-icon">
                        <a href="https://html.com/" target={"_blank"}><AiFillHtml5 /> HTML5</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target={"_blank"}><IoLogoCss3 /> CSS</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://www.javascript.com/" target={"_blank"}><IoLogoJavascript/> Javascript</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://reactjs.org/" target={"_blank"}><IoLogoReact /> React.js</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://react-bootstrap.github.io/" target={"_blank"}><BsFillBootstrapFill /> Bootstrap</a>
                        </li>
                    </ul>
                    <ul className="full-stack">
                    <h5 className="tech-h5">Backend</h5>
                    <hr/>
                        <li className="stack-icon">
                        <a href="https://nodejs.org/en/" target={"_blank"}><IoLogoNodejs /> Node.js</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://expressjs.com/" target={"_blank"}><SiExpress /> Express.js</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://www.postgresql.org/" target={"_blank"}><SiPostgresql /> PostgreSQL</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://www.json.org/json-en.html" target={"_blank"}><SiJson /> JSON</a>
                        </li>
                        <li className="stack-icon">
                        <a href="https://vitejs.dev/" target={"_blank"}><SiVite/> Vite</a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default TechStack