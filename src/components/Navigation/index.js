import React, { useEffect } from 'react';

const Nav = (props) => {
    const {
        currentNav,
        setCurrentNav
    } = props;
    const pages = ['About', 'Portfolio', 'Resume', 'Contact']

    useEffect(() => {
        document.querySelectorAll(".nav-buttons").forEach(nav => {nav.classList.remove("active")})

        document.getElementById(currentNav).classList.add("active")

    }, [currentNav])

    return (
        <nav>
            {pages.map(page => (
                <button 
                    type="button" 
                    className="nav-buttons btn btn-outline-primary mx-2" 
                    id={page} key={page}
                    onClick={() => {
                        setCurrentNav(page);
                        
                    }}
                >
                    {page}
                </button>
            ))}
            
        </nav>
    );
};

export default Nav;