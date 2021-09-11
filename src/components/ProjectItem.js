import React from 'react';
import WorkInfo from './WorkInfo';

import { MdLocationOn } from "react-icons/md";


const ProjectItem = ({projectItem}) =>{
    return (
        <div className='project-item'>
            <div className='project-info'>
                <div className='project-name'>
                   {projectItem['name']}
                </div>
                <div className = 'project-company'>
                    {projectItem['company']}
                </div>
                <div className='project-duration'>
                    {projectItem['duration']}
                </div>
            </div>
            <div className='project-extra-info'>
                <div className='project-tech'>
                    {projectItem['technology']}
                </div>
                <div className='project-desc'>
                    {projectItem['description']}
                </div>
            </div>
        </div>
    ); 
}

export default ProjectItem;