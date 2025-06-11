// these cards will be displayed in the home page's project section

export function ProjectCard({ projectRole, title, skills, description, image, link }) {
    return (
        <div className="project-card">
            <small> {projectRole} </small>
            <h3>{title}</h3>
            <div className="project-skills-badge-list">
                {skills.map((skill, index) => (
                    <span key={index} className="badge bg-dark">
                        {skill}
                    </span>
                ))}
            </div>
            <p>{description}</p>
            <div className="image-container">
                {/* ensure there's some form of reactivity to the image, such as a hover effect that adds drop shadow or smth */}
            </div>
            <a href={link}>
                <button className="btn">
                    View Project
                </button>
            </a>
        </div>
    )
}

export default ProjectCard;