import React from 'react';
import { Overlay, OverlayTrigger, Popover} from 'react-bootstrap';
import projects from '../../projects.json'

const Project = () => {  
    const projectPopover = (projectName) => { 
        const projectValue = projects.filter(project => {
            if(project.projectTitle == projectName){
                return project;
            }
        }); 
        
        const popover = ( 
            <Popover id="popover-basic">
                <Popover.Header as="h3" style={{ backgroundColor: "green", textAlign: "center"}}>{projectValue[0].projectTitle}</Popover.Header> 
                <Popover.Body>
                    {projectValue[0].description}
                </Popover.Body>
            </Popover>
            
        );
        return popover
    }

    return(
        <ul className="d-flex flex-wrap justify-content-evenly my-5 list-group-flush">
            {projects.map(project => {
            const alts = project.projectImage.split(".")[0];
            return(
            <li className="m-2 list-group-item col-5-lg d-grid" key={`${project.projectTitle}`}>
                <OverlayTrigger  overlay={projectPopover(`${project.projectTitle}`)} id="link-overlay-1" delay={{ show: 200, hide: 350 }} placement="right">
                    <a  href={`${project.projectWebsite}`} target="_blank">
                        <img alt={`${alts}`} className="img" src={require(`../../assets/images/${project.projectImage}`)} /> 
                    </a>
                </OverlayTrigger>
            
                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="m-1">{project.projectTitle}</h5>
                    <a alt={`${project.projectTitle}-repo`}className="m-1 repo-link" 
                        href={`${project.projectRepo}`} target="_blank"
                    />
                </div>
            </li> 
            ) 
            })}
        </ul>
    )
}


export default Project;


    /*<li className="m-2 list-group-item col-5-lg d-grid">
        <OverlayTrigger  overlay={projectPopover("Musit")} id="link-overlay-1" delay={{ show: 200, hide: 350 }} placement="right">
            <a  href="https://still-ridge-48307.herokuapp.com/" target="_blank">
                <img alt="DJ-mixer" className="img" src={require(`../../assets/images/mixer.jpg`)} /> 
            </a>
        </OverlayTrigger>
            
        <div className="d-flex justify-content-center align-items-center">
            <h5 className="m-1">Musit</h5>
                <a alt="musit-repo" className="m-1 repo-link" 
                    href="https://github.com/Demsley1/musit_2" target="_blank"
                />  
        </div>
    </li>*/