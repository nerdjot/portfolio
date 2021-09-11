import React from 'react';
import WorkInfo from './WorkInfo';

import { MdLocationOn } from "react-icons/md";


const ExperienceItem = ({experienceItem}) =>{
    const workInfo = experienceItem['work'];
    const workList = workInfo.map((workItem) =>
        <WorkInfo key={workItem['id']} workItem = {workItem} />);
    return (
        <div className='experience-item'>
            <div className='company-info'>
                <div className='company-name'>
                   {experienceItem['company']}
                </div>
                <div className='company-location'>
                    <MdLocationOn />
                    {experienceItem['location']}
                </div>
            </div>

            <div>
                {workList}
            </div>
        </div>
    ); 
}

export default ExperienceItem;