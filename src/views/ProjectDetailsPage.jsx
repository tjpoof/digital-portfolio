// includes information about specific projects
// information includes a brief description, tech stack, link to code (if possible), and a demo of the project
// there will be more detailed sections including project purpose/goal, problems/thought process, tech stack/explanation, and lessons learned 

import React from 'react';
import { useParams } from 'react-router-dom';
import placeHolderImage from '../assets/placeholder.jpeg';
import projectData from '../assets/projectData.json';

export function ProjectDetailsPage() {
    const { projectName } = useParams();
    const project = projectData[projectName];

    if (!project) {
        return (
            <div className="project-details-page">
                <div className="body-section">
                    <h1>Project Not Found</h1>
                    <p>The requested project could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <div className="body-section">
                <div className="project-section">
                    <h2>{project.title}</h2>
                    <p>{project.shortDescription}</p>
                    <div className="multi-column-container">
                        <div className="column">
                            <h3>Type</h3>
                            <ul>
                                <li>{project.type}</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Stack</h3>
                            <ul>
                                {(project.stack).map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Code</h3>
                            <ul>
                                <li><a href={project.githubLink}>Github</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Live</h3>
                            <ul>
                                <li><a href={project.liveDemo}>Site</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project-section">
                    <h2>Project Purpose and Goals</h2>
                    <p>{project.purpose}</p>
                </div>

                <div className="project-section">
                    <h2>Technology Stack and Explanation</h2>
                    <p>{project.techStackExplanation}</p>
                </div>

                <div className="project-section">
                    <h2>Problems and Thought Process</h2>
                    <p>{project.problemsThoughtProcess}</p>
                </div>

                <div className="project-section">
                    <h2>Lessons Learned</h2>
                    <p>{project.lessonsLearned}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailsPage;