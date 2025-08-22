// these cards will be displayed in the home page's project section

export function ProjectCard({ projectRole, title, skills, description, image, link }) {
    return (
        <div className="project-card">
            <div className="project-role-container">
                <small> {projectRole} </small>
            </div>

            <div className="project-info-container">
                <div className="project-text-container">
                    <h3>{title}</h3>
                    <div className="project-skills-badge-list">
                        {skills.map((skill, index) => (
                            <span key={index} className="badge bg-dark">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <p>{description}</p>
                    <div className="button-container">
                        <div className="button-outline-box"/>
                        <a href={link}>
                            <button className="btn">
                                View Project
                            </button>
                        </a>
                    </div>
                </div>


                <div className="project-image-container">
                    <a href={link}>
                        <img src={image} className="project-image" />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default ProjectCard;