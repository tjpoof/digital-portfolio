// extended about me section; there will be a shorter one on home page too

export function AboutPage() {
    return (
        <div className="about-page">
            <div className="body-section">
                <h1>I've always loved tech</h1>

                <div className="resume-container">
                    <p>Looking for my <a href="">resume</a>?</p>
                </div>
                <div className="story-container">
                    <h3>My quick story</h3>
                    <p>Ever since I was ten years old, working with technology has been my passion. Whether it be image or video editing, programming, or just enjoying video games, technology has stuck with me for as long as I can remember. Through modding video games, such as Minecraft, I found that I enjoyed programming things, which led me to pursue a Computer Science degree with the Hal Marcus College of Science and Engineering at the University of West Florida. </p>
                    <p>Over the course of those four years, I discovered that I had a passion for web development, as it combined both my love for designing and programming things. This especially came to fruition during the development process of my group capstone project, <a href="/projects/geosynth">GeoSynth</a>, where I took on the role of being the primary frontend developer.</p>
                </div>
                <div className="story-container">
                    <h3>As a developer</h3>
                    <p>My coding philosophy strongly emphasizes readability and clarity. Early in my programming process, I focus on functionality, but I also dedicate myself to refine my code in various ways. I typically do this through commenting and organizing my code in order to ensure that anyone can understand what is going on in my code.</p>
                    <p>I always enjoy taking on new projects, as each one is an opportunity to learn and grow as a developer.</p>
                </div>
                <div className="story-container">
                    <h3>As a person</h3>
                    <p>One of the best ways to describe me is <strong>resourceful</strong>. I approach issues by breaking them down into smaller parts and using a combination of advanced Google search and AI (if needed) to create innovative solutions. Using my best judgment is a key part in how I navigate problems.</p>
                    <p><strong>My curiosity is one of my greatest strengths; I'm always willing to learn new things.</strong> Even my YouTube home page almost always has something new for me to learn, ranging from programming to baseball techniques. My diverse skill set continually feeds into my professional development, shaping me into a more well-rounded individual.</p>
                </div>
                <div className="story-container">
                    <h3>As a colleague</h3>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;