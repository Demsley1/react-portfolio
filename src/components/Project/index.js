import React from 'react';

const Project = () => {
    return (
        <ul className="d-flex flex-wrap justify-content-between my-5 list-group-flush">
            <li className="m-2 list-group-item col-5 d-grid">
                <a href="https://still-ridge-48307.herokuapp.com/" target="_blank">
                    <img className="img" src="/images/mixer.jpg" />
                </a>

                <h5 className="text-center my-3">Musit</h5>
            </li>

            <li className="m-2 list-group-item col-5 d-grid">
                <a href="https://immense-island-78021.herokuapp.com/" target="_blank">
                    <img className="img" src="/images/mindgasm.jpg" />
                </a>

                <h5 className="text-center my-3">Deep-Thoughts</h5>
            </li>

            <li className="m-2 list-group-item col-5 d-grid">
                <a href="https://demsley1.github.io/weather-app/" target="_blank">
                    <img className="img" src="/images/weather-splash.jpg" />
                </a>

                <h5 className="text-center my-3">Weather-App</h5>
            </li>

            <li className="m-2 list-group-item col-5 d-grid">
                <a href="https://mariovillaquiran.github.io/teamreactive/" target="_blank">
                    <img className="img" src="/images/airplane.jpg" />
                </a>

                <h5 className="text-center my-3">Skipt</h5>
            </li>

            <li className="m-2 list-group-item col-5 d-grid">
                <a href="https://safe-caverns-00312.herokuapp.com/" target="_blank">
                    <img className="img" src="/images/tech-blog.jpg" />
                </a>

                <h5 className="text-center my-3">Tech-Splash</h5>
            </li>

            <li className="m-2 list-group-item col-5 d-grid">
                <a href="https://demsley1.github.io/photo-port/" target="_blank">
                    <img className="img" src="/images/camera-lens.jpg" />
                </a>

                <h5 className="text-center my-3">Photo-Port</h5>
            </li>

        </ul>
    );
};

export default Project;