import React, { useState } from 'react';
import './style.scss';

export const Nav = () => {
    const [ navbar, setNavbar ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80)
            setNavbar(true)
        else
            setNavbar(false)
    };

    window.addEventListener('scroll', changeBackground);

    return (
        // Navigation
        <>
        <nav className={navbar ? "navbar-shrink-light navbar navbar-expand-lg navbar-light fixed-top py-3" : "navbar navbar-expand-lg navbar-light fixed-top py-3"} id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Gustavo Barretto Dev</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Tools</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}