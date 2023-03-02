import './Styles/Portfolio.css'
import td1 from '../assets/project-vids/3d1.mp4'
import td2 from '../assets/project-vids/3d2.mp4'
import td3 from '../assets/project-vids/3d3.mp4'
import td4 from '../assets/project-vids/3d4.mp4'
import td5 from '../assets/project-vids/3d5.mp4'
import ft1 from '../assets/project-vids/ft1.mp4'
import ft2 from '../assets/project-vids/ft2.mp4'
import ft3 from '../assets/project-vids/ft3.mp4'
import ft4 from '../assets/project-vids/ft4.mp4'
import st1 from '../assets/project-vids/st1.mp4'
import st2 from '../assets/project-vids/st2.mp4'
import st3 from '../assets/project-vids/st3.mp4'
import {AiOutlineGithub} from "react-icons/ai"


const Portfolio = () => {
    return (
        <div id="portfolio">
            <h3>Portfolio</h3>
            <p>Here are some demos of a few of my favorite applications I've had a role in developing:</p>
            <hr/>
            <div className="portfolio-project">
                <b className="portfolio-name">3D-Glasses 
                <a href="https://www.github.com/spencer-hurd" target={"_blank"} className="git-link"><AiOutlineGithub /></a>
                </b>
                <p className='portfolio-desc'>3D Glasses is an ecommerce website</p>
            <div className="portfolio-content">
                <div className="portfolio-sect">
                    <video src={td1} controls='controls' className='portfolio-pic'/>
                    <p className='portfolio-aside'>dsfnsdjfndkvnsjkvneskj</p>
                </div>
                <div className="portfolio-sect">
                    <video src={td2} controls='controls' className='portfolio-pic'/>
                    <p className='portfolio-aside'>dsfnsdjfndkvnsjkvneskj</p>
                </div>
                <div className="portfolio-sect">
                    <video src={td3} controls='controls' className='portfolio-pic'/>
                    <p className='portfolio-aside'>dsfnsdjfndkvnsjkvneskj</p>
                </div>
                <div className="portfolio-sect">
                    <video src={td4} controls='controls' className='portfolio-pic'/>
                    <p className='portfolio-aside'>dsfnsdjfndkvnsjkvneskj</p>
                </div>
                <div className="portfolio-sect">
                    <video src={td5} controls='controls' className='portfolio-pic'/>
                    <p className='portfolio-aside'>dsfnsdjfndkvnsjkvneskj</p>
                </div>
            </div>
            </div>
            <hr/>
            <div className="portfolio-project">
                <b className="portfolio-name">Fitness Trac.kr
                <a href="https://www.github.com/spencer-hurd" target={"_blank"} className="git-link"><AiOutlineGithub /></a>
                </b>
                <p className='portfolio-desc'>Fitness Trac.kr is an application designed
                for users to track their workout routines. This full stack web application
                developed by myself and a peer. We worked together to build a secure API and set up
                our server, and found efficient ways to collaborate when fleshing out the front end components.</p>
                <div className="portfolio-content">
                    <div className="portfolio-sect">
                        <video src={ft1} controls='controls' className='portfolio-pic'/>
                        <p className='portfolio-aside'>
                            Upon entering the site, you will be welcomed and prompted to sign
                            up or sign in. For the authorization form, we implemented a side modal,
                            styling the transition upon open and close for a streamlined, dynamic
                            user experience.
                        </p>
                    </div>
                    <div className="portfolio-sect">
                        <video src={ft2} controls='controls' className='portfolio-pic'/>
                        <p className="portfolio-aside">
                            After registering or logging in, the user will obtain access to their personal
                            routines and activities pages, where they can create custom routines and activities
                            as well as edit or delete any they have authored. When adding activities to a routine,
                            the user is presented with all activities to choose from, and can adjust the reps
                            and set to fit their exercise needs.
                        </p>
                    </div>
                    <div className="portfolio-sect">
                        <video src={ft3} controls='controls' className='portfolio-pic'/>
                        <p className='portfolio-aside'>
                            When a user creates a routine, they have the option of making it public,
                            or private. Public routines are viewable by any user site-wide, but private
                            routines are only viewable to the author. The privacy status can be
                            changed by the author at any time.
                        </p>
                    </div>
                    <div className="portfolio-sect">
                        <video src={ft4} controls='controls' className='portfolio-pic'/>
                        <p className='portfolio-aside'>
                            Users without accounts can still access all public routines and
                            activities, but can not create or interact with them unless they
                            are registered. We utilized local storage as well as implementing
                            state to access information pertaining to the current user and their
                            authorization token. This information is also posted to the database
                            upon registration, alongside the tables for routines, activities, and
                            routine activities.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="portfolio-project">
                <b className="portfolio-name">Stranger's Things
                <a href="https://www.github.com/spencer-hurd" target={"_blank"} className="git-link"><AiOutlineGithub /></a>
                </b>
                <p className="portfolio-desc">       
                Stranger's Things is a trade website blahb abhfsbdfhsba
                bahfsbdhzdbhkfb bLEBLjdbjlfbjfsbskjbf         
                </p>
                <div className="portfolio-content">
                    <div className="portfolio-sect">
                        <video src={st1} controls='controls' className='portfolio-pic'/>
                        <p className='portfolio-aside'>
                         After you open the website you can log in blah bleh blahbb
                         uwhawruahua ashfuishdf sdfhisfhsuid dfhisdfhs sdhifhsifn
                         sifsufisdf sdfhisdhjfisdhf sdifhsdifh dsidhfishfishfishsd
                        </p>
                    </div>
                    <div className="portfolio-sect">
                        <video src={st2} controls='controls' className='portfolio-pic'/>
                        <p className='portfolio-aside'>
                         After you open the website you can log in blah bleh blahbb
                         uwhawruahua ashfuishdf sdfhisfhsuid dfhisdfhs sdhifhsifn
                         sifsufisdf sdfhisdhjfisdhf sdifhsdifh dsidhfishfishfishsd
                        </p>
                    </div>
                    <div className="portfolio-sect">
                        <video src={st3} controls='controls' className='portfolio-pic'/>
                        <p className='portfolio-aside'>
                         After you open the website you can log in blah bleh blahbb
                         uwhawruahua ashfuishdf sdfhisfhsuid dfhisdfhs sdhifhsifn
                         sifsufisdf sdfhisdhjfisdhf sdifhsdifh dsidhfishfishfishsd
                        </p>
                    </div>
                    <div className='pb'></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio