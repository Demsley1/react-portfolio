import React from 'react';

const Nav = (props) => {
    const {
        setCurrentNav
    } = props;
    const pages = ['Projects', 'About', 'Resume', 'Contact']
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


export default Nav;