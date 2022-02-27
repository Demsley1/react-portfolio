import React from 'react';

const Nav = (props) => {
    const {
        setCurrentNav
    } = props;
    const pages = ['About', 'Portfolio', 'Resume', 'Contact']
    return (
        <nav>
            {pages.map(page => (
                <button 
                    type="button" 
                    className="btn btn-outline-primary mx-2" 
                    id={page} key={page}
                    onClick={() => {
                        setCurrentNav(page)
                        document.getElementById(page).classList.add("active")
                    }}
                    onBlur={()=> {
                        document.getElementById(page).classList.remove("active");
                    }}
                >
                    {page}
                </button>
            ))}
            
        </nav>
    );
};


export default Nav;