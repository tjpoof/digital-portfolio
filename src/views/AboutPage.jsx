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
                    <p><strong>Ever since I was ten years old, working with technology has been my passion.</strong> Whether it be image or video editing, programming, or just enjoying video games, technology has stuck with me for as long as I can remember. Through modding video games, such as Minecraft, I found that I enjoyed programming things, which led me to pursue a computer science degree with the Hal Marcus College of Science and Engineering at the University of West Florida. </p>
                    <p>Over the course of those four years, I discovered that I had a passion for web development, as it combined both my love for designing and programming things. This especially came to fruition during the development process of my group capstone project, <a href="/projects/geosynth">GeoSynth</a>, where I took on the role of being the team lead and primary frontend developer.</p>
                </div>
                <div className="story-container">
                    <h3>As a developer</h3>
                    <p><strong>My coding philosophy strongly emphasizes readability and clarity.</strong> Early in my programming process, I focus on functionality, but I also dedicate myself to refine my code in various ways. I typically do this through commenting and organizing my code in order to ensure that anyone can understand what is going on.</p>
                    <p>I always enjoy taking on new projects, as each one is an opportunity to learn and grow as a developer.</p>
                </div>
                <div className="story-container">
                    <h3>As a person</h3>
                    <p>One of the best ways to describe me is <strong>resourceful</strong>. I approach issues by breaking them down into smaller parts and using a combination of advanced Google search and AI (if needed) to create innovative solutions. Using my best judgment is a key part in how I navigate problems.</p>
                    <p><strong>My curiosity is one of my greatest strengths; I'm always willing to learn new things.</strong> Even my YouTube home page almost always has something new for me to learn, ranging from programming to baseball techniques and everything in between. My diverse skill set continually feeds into my professional development, shaping me into a more well-rounded individual.</p>
                </div>
                <div className="story-container">
                    <h3>As a colleague</h3>
                    <p><strong>I love working with people.</strong> With my background featuring both programming and design, I'm able to fill in gaps between the technical and creative sides of any team. </p>
                    <p>Having worked in countless groups while studying computer science, my communication skills are always improving. <strong>I'm always making sure that everyone in my team is on the same page.</strong></p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;