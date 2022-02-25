import React from 'react';

const Nav = (props) => {
    const {
        setCurrentNav
    } = props;
    const pages = ['Projects', 'About Me', 'Resume', 'Contact']
    return (
        <nav>
            {pages.map(page => (
                <button 
                    type="button" 
                    className="btn btn-outline-primary mx-2"  
                    id={page} key={page}
                    onClick={() => {
                        setCurrentNav(page)
                    }}
                >
                    {page}
                </button>
            ))}
            
        </nav>
    );
};

/*  
    <a className="nav-links" href="/projects">Projects</a>
    <a className="nav-links" href="/aboutMe">About Me</a>
    <a className="nav-links" href="/resume">Resume</a>
    <a className="nav-links" href="/contact">Contact</a>
*/

export default Nav;