// includes information about specific projects
// information includes a brief description, tech stack, link to code (if possible), and a demo of the project
// there will be more detailed sections including project purpose/goal, problems/thought process, tech stack/explanation, and lessons learned 

import React from 'react';
import { useParams } from 'react-router-dom';
import placeHolderImage from '../assets/placeholder.jpeg';

export function ProjectDetailsPage() {
    const { projectName } = useParams();

    const projectData = {
        'geosynth': {
            title: 'GeoSynth',
            type: 'Music services',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Spotify API', 'Leaflet', 'Backend Integration'],
            shortDescription: 'A web app that recommends new music to users based on location, mood, activity, and time of day.',
            purpose: 
                'To create an innovative music discovery platform that combines geographical data with user preferences to provide personalized music recommendations that match the user\'s current context and environment.',
            techStackExplanation:
                'Placeholder tech stack and explanation here'
            ,
            problemsThoughtProcess: 
                'Placeholder problems and thought process discussion here'
            ,
            lessonsLearned: 
                'Placeholder lessons learned discussion here'
            ,
            githubLink: 'https://github.com/yourusername/geosynth',
            liveDemo: 'https://geosynth-demo.com'
        },
        'cyberattack-visualization-tool': {
            title: 'Cyberattack Visualization Tool',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'JSON', 'Chart.js', 'D3', 'Firebase'],
            shortDescription: 'A web app that helps users visualize cyberattack data through interactive graphs, heatmaps, and tables.',
            purpose: 'To create an accessible platform for cybersecurity professionals and researchers to analyze and understand cyberattack patterns through interactive data visualizations.',
            techStackExplanation:
                'Placeholder tech stack and explanation here'
            ,
            problemsThoughtProcess: 
                'Placeholder problems and thought process discussion here'
            ,
            lessonsLearned: 
                'Placeholder lessons learned discussion here'
            ,
            githubLink: 'https://github.com/yourusername/cyberattack-viz',
            liveDemo: 'https://cyberattack-viz-demo.com'
        },
        'parking-lot-manager': {
            title: 'Parking Lot Manager',
            skills: ['Java', 'SQL', 'Swing', 'UML'],
            shortDescription: 'A desktop application for managing parking permits and tracking parking violations in institutional settings.',
            purpose: 'To streamline parking management for educational institutions by providing a comprehensive system for permit issuance, violation tracking, and parking pattern analysis.',
            techStackExplanation:
                'Placeholder tech stack and explanation here'
            ,
            problemsThoughtProcess: 
                'Placeholder problems and thought process discussion here'
            ,
            lessonsLearned: 
                'Placeholder lessons learned discussion here'
            ,
            githubLink: 'https://github.com/yourusername/parking-manager',
            liveDemo: null // desktop app, cannot have live demo
        }
    };

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
                                {(project.skills).map((skill, index) => (
                                    <li key={index}>{skill}</li>
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