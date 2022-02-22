import React from 'react';
import Nav from '../Navigation'

const Header = () => {
    return (
        <div className="header d-flex justify-space-between">
            <h2 className="m-2">Welcome To My Portfolio Website</h2>

            <Nav />
        </div>
    );
};

export default Header;