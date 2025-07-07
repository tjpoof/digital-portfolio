// these cards will be displayed in the home page's project section
import placeHolderImage from '../assets/placeholder.jpeg';

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
                    <a href={link}>
                        <button className="btn">
                            View Project
                        </button>
                    </a>
                </div>


                <div className="project-image-container">
                    <img src={placeHolderImage} className="project-image" />
                </div>

            </div>

        </div>
    )
}

export default ProjectCard;