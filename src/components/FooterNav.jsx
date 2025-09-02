// will include my name, navigation links, and a get in touch section, including github, linkedin, and email
import { NavLink, useNavigate } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

export function FooterNav() {
    const navigate = useNavigate();
    const mailtoUrl = `mailto:contact.tjharrison@gmail.com?subject=${encodeURIComponent(`Portfolio message`)}`;

    const handleContactNav = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleProjectsNav = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleHomeNav = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    const handleAboutNav = (e) => {
        e.preventDefault();
        navigate('/about');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <footer className="footer-nav">
            <div className="footer-content-wrapper">
                <div className="footer-container footer-name-container">
                    <a className="nav-link" onClick={handleHomeNav}>
                        <span className="first-name">Thomas</span>
                        <span className="last-name">Harrison</span>
                    </a>
                </div>
                <div className="footer-container footer-links-container">
                    <h4>Links</h4>
                    <ul>
                        <li>
                            <a className="nav-link" onClick={handleAboutNav}>
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" onClick={handleProjectsNav}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" onClick={handleContactNav}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-container footer-contact-links-container">
                    <h4>Get in touch</h4>
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
                </div>
            </div>
        </footer>
    )
}

export default FooterNav;