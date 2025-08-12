// feature a short description of myself, my skills, and a link to a list of my projects that will be displayed vertically
// at the bottom i can also quickly include my email and a button to send a message

import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard.jsx';
import placeHolderImage from '../assets/placeholder.jpeg';
import { IoMdSend } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

export function HomePage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = (event) => {
        // send an email to my email (tj2002@gmail.com)
        // then maybe show some sign of acknowledgement that a message was sent
        setEmail('');
        setMessage('');
    }

    return (
        <div className="home-page">
            <div className="intro-section">
                <div className="intro-text-container">
                    <h1> Hi, I'm TJ | Software Engineer</h1>
                    <div className="contact-buttons">
                        <BsLinkedin className="react-icons"/>
                        <BsGithub className="react-icons"/>
                        <AiFillMail className="react-icons"/>
                    </div>
                    <p> I love messing around with new tech 🧪 I'm always willing to learn 🎓 and I may have a parasocial relationship with baseball ⚾</p>
                </div>
            </div>

            <div className="body-section">
                <div className="section-heading-container">
                    <h2> My Skills </h2>
                </div>
                <div className="skills-section">
                    <div className="image-container">
                        <img src={placeHolderImage} className="portrait-image" />
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
                    <h2> Projects </h2>
                </div>
                <div className="projects-section">
                    <ProjectCard
                        projectRole="TEAM LEAD / FRONTEND DEVELOPER"
                        title="GeoSynth"
                        skills={["HTML", "CSS", "JavaScript", "React", "MongoDB", "Spotify API", "Leaflet", "Backend Integration"]}
                        description="I lead a team of four developers to create a web app with the goal of recommending new music to users based
                        on various information they provide, including location, mood, activity, and time of day. Users are able to also rate how 
                        well the suggested music fit their criteria as well as request new songs to be added to the song database."
                        image="/path/to/image.jpg"
                        link="/projects/geosynth"
                    />
                    <ProjectCard
                        projectRole="FRONTEND DEVELOPER"
                        title="Cyberattack Visualization Tool"
                        skills={["HTML", "CSS", "JavaScript", "React", "JSON", "Chart.js", "D3", "Firebase"]}
                        description="I worked with a team of three developers to create a web app that helps users visualize cyberattack
                        data in the form of various graphs, a heatmap, and a table view with all necessary data, including the date, location, industry affected,
                        and much more."
                        image="/path/to/image.jpg"
                        link="/projects/cyberattack-visualization-tool"
                    />
                    <ProjectCard
                        projectRole="FULL STACK DEVELOPER"
                        title="Parking Lot Manager"
                        skills={["Java", "SQL", "Swing", "UML"]}
                        description="I worked with a team of four developers to create a desktop app focused on managing parking permits and maintaining a database of employees, students,
                        cars, parking areas, and assigned permits in order to track parking patterns as well as manage parking violations and permits."
                        image="/path/to/image.jpg"
                        link="/projects/parking-lot-manager"
                    />
                </div>

                <div className="section-heading-container contact-heading-container" id="contact">
                    <h2> Contact Me! </h2>
                </div>
                <div className="contact-section">
                    <form onSubmit={handleSendMessage}>
                        <div className="form-group">
                            <label for="input-email">
                                Your email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="input-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="underline"/>
                        </div>
                        <div className="form-group">
                            <label for="input-message">
                                Message
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="input-message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="underline"/>
                        </div>
                        <div className="button-container">
                            <div className="button-outline-box"/>
                            <button type="submit" className="btn btn-primary">
                                <IoMdSend className="react-icons"/>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HomePage;