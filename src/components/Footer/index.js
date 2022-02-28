import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="sub-text">&copy;created by: Denva Emsley</p><br></br>

            <a className='mx-2' href="https://github.com/Demsley1" target="_blank">
                <img alt="GitHub icon" src={require('../../assets/GitHub-Mark-Light-32px.png')}/>
            </a>

            <a className="mx-2" href="https://www.linkedin.com/in/denva-emsley-5a8a30188/" target="_blank">
                <img alt="linked-in icon" className="logo" src={require('../../assets/LI-In-Bug.png')} />
            </a>

            <a className="mx-2" href="https://stackoverflow.com/users/16968466/denva" target="_blank">
                <img alt="stack-icon" className="logo" src={require('../../assets/stack-overflow.png')}/>
            </a>
        </footer>
    );
};

export default Footer;