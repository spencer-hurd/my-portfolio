import './Styles/CurrentProjects.css'

const CurrentProjects = () => {
    return (
        <div>
            <h3>Current Projects:</h3>
            <hr />
            <p>Here's what I'm currently working on.</p>
            <div className="project">
                <b className="project-name">Project Name</b>
                <div className="pic-desc">
                    <p className="project-pic">Project Screenshot</p>
                    <p className="project-desc">
                        The description for the website I'm currently working on.
                        There's nothing to put here right now, but I'm thinking of adding
                        several photos of wireframing and concept art.
                    </p>
                </div>
            </div>
            <div className="project">
                <b className="project-name">Project Name</b>
                <div className="pic-desc">
                <p className="project-pic">Project Screenshot</p>
                <p className="project-desc">
                    The description for the website I'm currently working on.
                    There's nothing to put here right now, but I'm thinking of adding
                    several photos of wireframing and concept art.
                </p>
                </div>
            </div>
        </div>
    )
}

export default CurrentProjects