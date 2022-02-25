import React from 'react';
import Nav from '../Navigation'

const Header = ({setCurrentNav }) => {
    return (
        <div className="header">
            <h2 className="m-2">
                <button className="title" onClick={()=>setCurrentNav('Home')}>Portfolio</button>
            </h2>

            <Nav setCurrentNav={setCurrentNav} />
        </div>
    );
};

export default Header;