import React from 'react';
import Nav from '../Navigation'

const Header = () => {
    return (
        <div className="header d-flex justify-space-between">
            <h2 className="m-2">
                <a className="title" href="/">Portfolio</a>
            </h2>

            <Nav />
        </div>
    );
};

export default Header;