import React, {useState} from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoCss3, IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiPostgresql, SiJson, SiVite } from "react-icons/si";
import './Styles/TechStack.css'

const TechStack = () => {
    const [isFrontShown, setIsFrontShown] = useState(false)
    const [isBackShown, setIsBackShown] = useState(false)
    return(
            <div className="tech-stack">
                <h3 className="h-3">My Tech Stack:</h3>
                <hr />
                <p className="tech-desc">These are the current languages, frameworks, libraries, and tools I utilize most in creating applications.</p>
                <div className="stacks">
                        {isFrontShown && (
                            <p id='frontend-blurb' className="blurb">
                                Front-end development is the process of creating the 
                                visuals and interactions of a website or web application. 
                                It is the user-facing side of development and is responsible 
                                for the look, feel, and functionality of a website. Front-end 
                                development typically involves HTML, CSS, and JavaScript, as 
                                well as frameworks such as React.js and Bootstrap. These tools 
                                allow developers to create dynamic, interactive web experiences 
                                that look great and are easy to use.
                            </p>
                        )}
                        <ul onMouseEnter={() => setIsFrontShown(true)} onMouseLeave={()=> setIsFrontShown(false)} variant="secondary" className="full-stack" id='front-stack'>
                            <h5 className="tech-h5">Front-end</h5>
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
                    <ul onMouseEnter={() => setIsBackShown(true)} onMouseLeave={()=> setIsBackShown(false)} className="full-stack" id='back-stack'>
                    <h5 className="tech-h5">Back-end</h5>
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
                        {isBackShown &&  
                            (<p id='backend-blurb' className="blurb">
                                Back-end development is the process of creating the 
                                server-side of a website or web application. It is 
                                responsible for the data layer (storing and retrieving 
                                information) and the server-side logic (processing requests 
                                and responses). Back-end development typically involves 
                                Node.js, Express.js, PostgreSQL, JSON, and Vite. These tools 
                                allow developers to create powerful applications with high 
                                performance and scalability.
                            </p>) 
                        }
                </div>
            </div>
    )
}

export default TechStack