import React from 'react';
import Nav from '../Navigation'

const Header = ({currentNav, setCurrentNav }) => {
    return (
        <div className="header">
            <h2 className="m-2">
                <button className="title" onClick={()=>setCurrentNav('Home')}>Denva Emsley</button>
            </h2>

            <Nav currentNav={currentNav} setCurrentNav={setCurrentNav} />
        </div>
    );
};

export default Header;