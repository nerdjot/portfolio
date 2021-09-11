import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';
const Experience = (props) =>{
    const experience = props.experience;
    const experienceList = experience.map((experienceItem) => 
        <ExperienceItem key = {experienceItem['id']} experienceItem = {experienceItem} /> );
    return (
        <div className='section-page'>
            <div className='section-heading'>{"Experience"}</div>
            {experienceList}
            {/*<div className='section-heading'>{"</experience>"}</div>*/}
        </div>
    ); 
}

export default Experience;