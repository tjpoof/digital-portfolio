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
                'The primary languages used in building GeoSynth included Javascript and Typescript, using React in the frontend and Express/Node.js in the backend. MongoDB was used to manage the database of songs, playlists, user data, etc. and Prisma acted as our ORM to interact with the database. Several external plugins were used as well, such as Leaflet when building a dynamic map for users to navigate various locations.'
            ,
            problemsThoughtProcess: 
                'Most of the problems that were run into had to do with planning how the app would function, which was solved by creating various charts to visualize the flow of a user interaction, such as entity relationship and C4 diagrams. In the frontend, we solved most of our issues by making wireframes for the frontend to plan out how a user would navigate through the website. I was the primary contributor in making these wireframes, creating several drafts before settling on the final iteration that the site currently resembles.\n\n In the development process, I focused on the frontend, ensuring that users had a smooth experience navigating the website as well as working to integrate the backend to transfer data to and from the user, which included making API calls and ensuring that the user was authenticated through a login process. I was also behind most of the functionality regarding the frontend, with an example being the dynamic map where users are able to click on polygons drawn on a map powered by OpenStreetMap to choose a location. \n\n One problem I did run into during the development process was when showing a list of song results when a user searched for one in a search bar that connected to the Spotify API. If a song existed in our database already, it would both show that song and a copy of it from Spotify, showing potentially multiple results of the same song. On top of that, if a song was both a single and part of another album, then it would show multiple times. In order to fix these issues, I decided that if a song already exists in the database, I would mark it with a badge that showed it exists next to the title and I would only return one copy of each song in the results list.'
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