// feature a short description of myself, my skills, and a link to a list of my projects that will be displayed vertically
// at the bottom i can also quickly include my email and a button to send a message

import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard.jsx';
import placeHolderImage from '../assets/placeholder.jpeg';
import profileImage from '../assets/profile.jpg';
import { IoMdSend } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import geosynthProjectCover from '../assets/geosynthProjectCover.png';
import cyberattackProjectCover from '../assets/cyberattackProjectCover.png';
import parkingLotProjectCover from '../assets/parkingLotProjectCover.png';
import stktileProjectCover from '../assets/stktileProjectCover.png';

export function HomePage() {
    const mailtoUrl = `mailto:contact.tjharrison@gmail.com?subject=${encodeURIComponent(`Portfolio message`)}`;

    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-text-container">
                    <h1>
                        <div>Hi,</div>
                        <div>I'm</div>
                        <div>TJ |</div>
                        <div className="highlighted-text-container">
                            <div>Software</div>
                            <div className="highlight"></div>
                        </div>
                        <div className="highlighted-text-container">
                            <div>Engineer</div>
                            <div className="highlight"></div>
                        </div>

                    </h1>
                    <div className="contact-buttons">
                        <a href="https://www.linkedin.com/in/tjharrison0827/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className="react-icons" />
                        </a>
                        <a href="https://github.com/tjpoof" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="react-icons" />
                        </a>
                        <a href={mailtoUrl}>
                            <AiFillMail className="react-icons" />
                        </a>
                    </div>
                    <p> I love messing around with new tech 🧪 I'm always willing to learn 🎓 and I'll never pass up a chance to talk baseball ⚾</p>
                </div>
            </div>

            <div className="body-section">
                <div className="section-heading-container">
                    <h2>
                        <div>My</div>
                        <div className="highlighted-text-container">
                            <div>Skills</div>
                            <div className="highlight"></div>
                        </div>
                    </h2>
                </div>
                <div className="skills-section">
                    <div className="image-container">
                        <img src={profileImage} className="portrait-image" />
                    </div>

                    <div className="skills-content-container">
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
                            <span class="badge bg-dark">Git</span>
                        </div>

                        <div className="short-bio-container">
                            <h3>I love learning new things</h3>
                            <p>I started messing around with computers when I was roughly ten years old. This started mainly by playing various games on Steam, which evolved into me playing around with various tools such as Photoshop and eventually programming. What kickstarted this interest was modding videogames such as Minecraft, where I created some very basic mods to add various items into the game at around thirteen years old. Since then, I have had a growing interest in learning how to develop various things, which has led me to completing a bachelors degree in Computer Science at the University of West Florida.</p>
                            <a href="/about">Keep reading my bio</a>
                        </div>
                    </div>

                </div>

                <div className="section-heading-container" id="projects">
                    <h2>
                        <div className="highlighted-text-container">
                            <div>Projects</div>
                            <div className="highlight"></div>
                        </div>
                    </h2>
                </div>
                <div className="projects-section">
                    <ProjectCard
                        projectRole="PERSONAL PROJECT"
                        title="STK Tile & Stone"
                        skills={["HTML", "CSS", "JavaScript", "React"]}
                        description="Worked with my uncle and father to build a website to showcase my uncle’s services as a tile installation expert 
                        in the area of Milton, FL and surrounding areas. I revised the web app as needed based on feedback from my uncle. Users are able 
                        to view the various services STK Tile provides as well as reviews, past work, and are able to get in contact via email or phone."
                        image={stktileProjectCover}
                        link="/projects/stktile"
                    />
                    <ProjectCard
                        projectRole="TEAM LEAD / FRONTEND DEVELOPER"
                        title="GeoSynth"
                        skills={["HTML", "CSS", "JavaScript", "React", "MongoDB", "Spotify API", "Leaflet", "Backend Integration"]}
                        description="I led a team of four developers to create a web app with the goal of recommending new music to users based
                        on various information they provide, including location, mood, activity, and time of day. Users are able to also rate how 
                        well the suggested music fit their criteria as well as request new songs to be added to the song database."
                        image={geosynthProjectCover}
                        link="/projects/geosynth"
                    />
                    <ProjectCard
                        projectRole="FRONTEND DEVELOPER"
                        title="Cyberattack Visualization Tool"
                        skills={["HTML", "CSS", "JavaScript", "React", "JSON", "Chart.js", "D3", "Firebase"]}
                        description="I worked with a team of three developers to create a web app that helps users visualize cyberattack
                        data in the form of various graphs, a heatmap, and a table view with all necessary data, including the date, location, industry affected,
                        and much more."
                        image={cyberattackProjectCover}
                        link="/projects/cyberattack-visualization-tool"
                    />
                    <ProjectCard
                        projectRole="FULL STACK DEVELOPER"
                        title="Parking Lot Manager"
                        skills={["Java", "SQL", "Swing", "UML"]}
                        description="I worked with a team of four developers to create a desktop app focused on managing parking permits and maintaining a database of employees, students,
                        cars, parking areas, and assigned permits in order to track parking patterns as well as managing parking violations and permits."
                        image={parkingLotProjectCover}
                        link="/projects/parking-lot-manager"
                    />
                </div>

                <div className="section-heading-container contact-heading-container" id="contact">
                    <h2>
                        <div>Send</div>
                        <div>me</div>
                        <div>a</div>
                        <div className="highlighted-text-container">
                            <div>message!</div>
                            <div className="highlight"></div>
                        </div>
                    </h2>
                </div>
                <div className="contact-section">
                    <div className="email-container">
                        <a href={mailtoUrl}>contact.tjharrison@gmail.com</a>
                    </div>
                    <div className="button-container">
                        <div className="button-outline-box" />
                        <a href={mailtoUrl}>
                            <button type="submit" className="btn btn-primary">
                                <IoMdSend className="react-icons" />
                                Send Message
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;