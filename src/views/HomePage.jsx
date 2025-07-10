// feature a short description of myself, my skills, and a link to a list of my projects that will be displayed vertically
// at the bottom i can also quickly include my email and a button to send a message

import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard.jsx';
import placeHolderImage from '../assets/placeholder.jpeg';


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
                        <i class="bi bi-github"></i>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-envelope-at-fill"></i>
                    </div>
                    <p> I love experimenting with new tech 🧪 I'm always willing to learn 🎓 and I may have a parasocial relationship with baseball ⚾</p>
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
                        </div>

                        <div className="short-bio-container">
                            <h3>I love learning new things</h3>
                            <p>I started messing around with computers when I was roughly ten years old. This started mainly by playing various games on Steam, which evolved into me playing around with various tools such as Photoshop and eventually programming. What kickstarted this interest was modding videogames such as Minecraft, where I created some very basic mods to add various items into the game at around thirteen years old. Since then, I have had a growing interest in learning how to develop various things, which has led me to completing a bachelors degree in Computer Science at the University of West Florida.</p>
                            <a href="/about">Keep reading my bio</a>
                        </div>
                    </div>

                </div>

                <div className="section-heading-container">
                    <h2> Projects </h2>
                </div>
                <div className="projects-section">
                    <ProjectCard
                        projectRole="LEAD DEVELOPER"
                        title="Project X"
                        skills={["C++", "Java", "JavaScript"]}
                        description="A short description of Project X. Emphasize what I did in this project with minimal detail, 
                        leaving the more in-depth description for the project's info page. The image will show either a screenshot 
                        of the app (i.e. landing page or some other iconic page) or cover art for the app, potentially something that 
                        shows that there are various features."
                        image="/path/to/image.jpg"
                        link="/projects/project-x"
                    />
                </div>

                <div className="section-heading-container">
                    <h2> Contact Me! </h2>
                </div>
                <div className="contact-section">
                    <form onSubmit={handleSendMessage}>
                        <div className="form-group">
                            <label for="input-email">
                                Your email
                            </label>
                            <input
                                type="text"
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
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HomePage;