// feature a short description of myself, my skills, and a link to a list of my projects that will be displayed vertically
// at the bottom i can also quickly include my email and a button to send a message

import React from 'react';


export function HomePage() {
    return (
        <div>
            <h1> Hi, I'm TJ | Software Engineer </h1>
            <p> short blurb </p>
            <div className="skills-section">
                <h2> My Skills </h2>

                <div className="image-container">
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
                </div>

                <div className="short-bio-container">
                    <h3>I love learning new things</h3>
                    <p>I started messing around with computers when I was roughly ten years old. This started mainly by playing various games on Steam, which evolved into me playing around with various tools such as Photoshop and eventually programming. What kickstarted this interest was modding videogames such as Minecraft, where I created some very basic mods to add various items into the game at around thirteen years old. Since then, I have had a growing interest in learning how to develop various things, which has led me to completing a bachelors degree in Computer Science at the University of West Florida.</p>
                    <a href="/about">Keep reading my bio</a>
                </div>
            </div>
            <div className="projects-section">
                <h2> Projects </h2>

                <small> (Role in project) </small>
                <div className="project-content">
                    <h3> Project X </h3>
                    <div className="project-skills-badge-list">
                        <span class="badge bg-dark">C++</span>
                        <span class="badge bg-dark">Java</span>
                        <span class="badge bg-dark">JavaScript</span>
                    </div>
                    <p> short description of project</p>
                    <div className="image-container">
                        {/* ensure there's some form of reactivity to the image, such as a hover effect that adds drop shadow or smth */}
                    </div>
                </div>

                <a href="/projects/project-x">View Project</a>


            </div>

            <h2> Contact Me! </h2>
            <p> (contact section) </p>
        </div>
    )
}

export default HomePage;