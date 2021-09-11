import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';
const Projects = (props) =>{
    const projects = props.projects;
    const projectList = projects.map((projectItem) => 
        <ProjectItem key = {projectItem['id']} projectItem = {projectItem} /> );
    return (
        <div className="section-page">
            <div className='section-heading'>{"Projects"}</div>
            {projectList}
            {/*<div className='section-heading'>{"</experience>"}</div>*/}
        </div>
    ); 
}

export default Projects;