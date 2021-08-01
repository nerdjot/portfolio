import React from 'react';
import WorkInfo from './WorkInfo';

const ExperienceItem = ({experienceItem}) =>{
    const workInfo = experienceItem['work'];
    const workList = workInfo.map((workItem) =>
        <WorkInfo workItem = {workItem} />);
    return (
        <div>
            <div>
                <div>
                   {experienceItem['company']}
                </div>
                <div>
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