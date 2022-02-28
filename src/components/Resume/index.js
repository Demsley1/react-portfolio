import React from 'react';

function Resume() {
    return (
        <div className="d-flex flex-column justify-content-center align-content-center align-items-center">   
            <h1 className="text-center my-4">Resume/Skills</h1>

            <div className="d-flex flex-wrap text-center">
                <p className="resume-link">
                    <span>Click here to download my Resume:     </span>
                    <a className="btn btn-primary fs-5" id="Resume" href="public/links/Resume-starter.pub" download>Download</a>
                </p>
            </div>
            
            <div>
                <h2>Proficiencies</h2>

                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>ORM</li>
                    <li>React</li>
                </ol>
            </div>
            
        </div>
    )
};

export default Resume;