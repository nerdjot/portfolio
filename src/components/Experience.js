import React from 'react';
import ExperienceItem from './ExperienceItem';
const Experience = (props) =>{
    const experience = props.experience;
    const experienceList = experience.map((experienceItem) => 
        <ExperienceItem key = {experienceItem['id']} experienceItem = {experienceItem} /> );
    return (
        <div>
            {"<experience>"}
            {experienceList}
            {"</experience>"}
        </div>
    ); 
}

export default Experience;