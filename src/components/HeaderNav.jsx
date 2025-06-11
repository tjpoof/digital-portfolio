import React from 'react';
import { NavLink } from 'react-router-dom';

export function HeaderNav() {
    return (
        <header id="top-header" className="header-nav">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            <span className="nav-title">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            <span className="nav-title">About Me</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/#projects">
                            <span className="nav-title">Projects</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/#contact">
                            <span className="nav-title">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav;