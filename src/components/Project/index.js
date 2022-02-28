import React from 'react';

const Project = () => {
    return (
        <ul className="d-flex flex-wrap justify-content-evenly my-5 list-group-flush">
            <li className="m-2 list-group-item col-5-lg d-grid">
                <a href="https://still-ridge-48307.herokuapp.com/" target="_blank">
                    <img alt="DJ mixer" className="img" src={require(`../../assets/images/mixer.jpg`)} /> 
                </a>
            
                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">Musit</h5>
                    <a alt="musit-repo" className="m-1 repo-link" 
                        href="https://github.com/Demsley1/musit_2" target="_blank"
                    />
                    
                </div>
            </li>

            <li className="m-2 list-group-item col-5-lg d-grid">
                <a href="https://immense-island-78021.herokuapp.com/" target="_blank">
                    <img alt="thought-tree" className="img" src={require('../../assets/images/mindgasm.jpg')}/>
                </a>

                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">Deep-Thoughts</h5>
                    <a alt="deep-thoughts repo" className="m-1 repo-link" 
                        href="https://github.com/Demsley1/deep-thoughts" target="_blank"
                    /> 
                </div>
            </li>

            <li className="m-2 list-group-item col-5-lg d-grid">
                <a href="https://demsley1.github.io/weather-app/" target="_blank">
                    <img alt="collage-of-weather" className="img" src={require('../../assets/images/weather-splash.jpg')} />
                </a>

                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">Weather-App</h5>
                    <a alt="Weather-app repo" className="m-1 repo-link" 
                        href="https://github.com/Demsley1/weather-app" target="_blank"
                    /> 
                </div>
            </li>

            <li className="m-2 list-group-item col-5-lg d-grid">
                <a href="https://mariovillaquiran.github.io/teamreactive/" target="_blank">
                    <img alt="airplane" className="img" src={require('../../assets/images/airplane.jpg')} />
                </a>

                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">Skipt</h5>
                    <a alt="Skipt repo" className="m-1 repo-link" 
                        href="https://github.com/mariovillaquiran/teamreactive" target="_blank"
                    /> 
                </div>
            </li>

            <li className="m-2 list-group-item col-5-lg d-grid">
                <a href="https://safe-caverns-00312.herokuapp.com/" target="_blank">
                    <img alt="computer-with-notes" className="img" src={require('../../assets/images/tech-blog.jpg')} />
                </a>

                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">Tech-Splash</h5>
                    <a alt="Tech-Splash repo" className="m-1 repo-link" 
                        href="https://github.com/Demsley1/tech-splash" target="_blank"
                    /> 
                </div>
            </li>

            <li className="m-2 list-group-item col-5-lg d-grid">
                <a href="https://demsley1.github.io/photo-port/" target="_blank">
                    <img alt="camera-lens" className="img" src={require('../../assets/images/camera-lens.jpg')} />
                </a>

                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">Photo-Port</h5>
                    <a alt="Photo-port repo" className="m-1 repo-link" 
                        href="https://github.com/Demsley1/photo-port" target="_blank"
                    /> 
                </div>
            </li>

        </ul>
    );
};

export default Project;