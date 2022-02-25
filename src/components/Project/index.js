import React from 'react';

const Project = () => {
    return (
        <ul className="d-flex flex-wrap justify-content-between my-5 list-group-flush">
            <li className="m-2 list-group-item d-grid">
                <a href="https://still-ridge-48307.herokuapp.com/" target="_blank">
                    <img className="img" src="/images/soundwave-wallpaper.jpg" />
                </a>

                <h5 className="text-center my-3">Musit</h5>
            </li>

            <li className="m-2 list-group-item d-grid">
                <a href="https://immense-island-78021.herokuapp.com/" target="_blank">
                    <img className="img" src="/images/thought-spiral.jpg" />
                </a>

                <h5 className="text-center my-3">Deep-Thoughts</h5>
            </li>

            <li className="m-2 list-group-item">
                <h5>Project 3</h5>

                <p>Descripton for Project</p>
            </li>

            <li className="m-2 list-group-item">
                <h5>Project 4</h5>

                <p>Descripton for Project</p>
            </li>
        </ul>
    );
};

export default Project;