// feature a short description of myself, my skills, and a link to a list of my projects that will be displayed vertically
// at the bottom i can also quickly include my email and a button to send a message

import React from 'react';
import { ProjectCard } from '../components/ProjectCard.jsx';


export function HomePage() {
    return (
        <div className="home-page">
            <div className="intro-section">
                <h1> Hi, I'm TJ | Software Engineer </h1>
                <div className="contact-buttons">
                    <i class="bi bi-github"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-envelope-at-fill"></i>
                </div>
                <p> short blurb </p>
            </div>

            <div className="skills-section">
                <h2> My Skills </h2>

                <div className="image-container">
                    {/* put a picture of myself here */}
                </div>

                <div className="skills-badge-list">
                    <span class="badge bg-dark">C++</span>
                    <span class="badge bg-dark">Java</span>
                    <span class="badge bg-dark">JavaScript</span>
                    <span class="badge bg-dark">HTML</span>
                    <span class="badge bg-dark">CSS</span>
                    <span class="badge bg-dark">Python</span>
                    <span class="badge bg-dark">SQL</span>
                    <span class="badge bg-dark">MongoDB</span>
                    <span class="badge bg-dark">React</span>
                </div>

                <div className="short-bio-container">
                    <h3>I love learning new things</h3>
                    <p>I started messing around with computers when I was roughly ten years old. This started mainly by playing various games on Steam, which evolved into me playing around with various tools such as Photoshop and eventually programming. What kickstarted this interest was modding videogames such as Minecraft, where I created some very basic mods to add various items into the game at around thirteen years old. Since then, I have had a growing interest in learning how to develop various things, which has led me to completing a bachelors degree in Computer Science at the University of West Florida.</p>
                    <a href="/about">Keep reading my bio</a>
                </div>
            </div>

            <div className="projects-section">
                <h2> Projects </h2>
                <ProjectCard
                    projectRole="Lead Developer"
                    title="Project X"
                    skills={["C++", "Java", "JavaScript"]}
                    description="A short description of Project X."
                    image="/path/to/image.jpg"
                    link="/projects/project-x"
                />
            </div>

            <div className="contact-section">
                <h2> Contact Me! </h2>
                <p>tj2002@gmail.com</p>
                <button className="btn btn-primary">Send Message</button>
            </div>
            
        </div>
    )
}

export default HomePage;