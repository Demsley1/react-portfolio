import React, { useState } from 'react';
import resume from '../../assets/links/Resume-starter.pub'
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import proficencies from '../../proficiencies.json'

function Resume() {
    const [ currentProficiency, setCurrentProficiency ] = useState([{ title: " ", summary: " " }, { title: " ", summary: " " }])

    function changeProficiency(tech, skillz) {
        const value = proficencies.filter(data => {
            if(data.title == tech || data.title == skillz){
                return data
            };
        });

        if(!skillz){
            setCurrentProficiency([value[0], currentProficiency[1]])
        } else if (!tech){
            setCurrentProficiency([currentProficiency[0], value[0]])
        }
    }

    const technology = currentProficiency[0];
    const skill = currentProficiency[1];
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">   
            <h1 className="text-center my-4">Resume/Skills</h1>

            <div className="d-flex flex-wrap text-center">
                <p className="resume-link">
                    <span>Click here to download my Resume:     </span>
                    <a className="btn btn-primary fs-5" id="Resume" href={resume} download="Resume-starter.pub">Download</a>
                </p>
            </div>
            
            <div>
                <h2 className="text-center">Proficiencies</h2>

                <div className="d-flex flex-wrap justify-content-between">
                    <div className="proficiency-box">     
                        <DropdownButton 
                            variant="outline-primary" 
                            title="Technologies" 
                            id="technologies-dropdown" 
                            >
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>HTML</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>JavaScript</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>CSS</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>Handlebars</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>SQL</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>mySql</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>C#</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>Inquirer</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>Node</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>Express</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>MongoDB</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>Stripe</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>React</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; changeProficiency(x)}}>Graphql</Dropdown.Item>
                        </DropdownButton>

                        <div className="m-5">
                            <h2 className="m-1 text-center">{technology.title}</h2>
                            <p className="">{technology.summary}</p>
                        </div>
                    </div>
                    
                    <div className="proficiency-box">
                        <DropdownButton variant="outline-primary" title="Skills" id="skills-dropdown" className="d-grid align-items-center align-content-center justify-content-center">
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>OOP</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>NoSql</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>localStorage</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>MERN</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>ORM</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>DOM manipulation</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>PWA</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>React-Bootstrap</Dropdown.Item>
                            <Dropdown.Item onClick={e => {const x = e.target.text; let y; changeProficiency(y, x)}}>API</Dropdown.Item>
                        </DropdownButton>

                        <div className="m-5">
                            <h2 className="m-1 text-center">{skill.title}</h2>
                            <p className="">{skill.summary}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Resume;