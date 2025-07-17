import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export function HeaderNav() {
    const navigate = useNavigate();

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

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
            <div className="name-container">
                <NavLink className="nav-link" to="/">
                    Thomas Harrison
                </NavLink>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        <span className="nav-title">about</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={handleProjectsNav}>
                        <span className="nav-title">projects</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={handleContactNav}>
                        <span className="nav-title">contact</span>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default HeaderNav;