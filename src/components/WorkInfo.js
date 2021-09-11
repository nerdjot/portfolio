import React from 'react';
import { SiGooglecalendar } from "react-icons/si"

const WorkInfo = ({workItem}) =>{
    return (
        <div className = 'work-info'>
            <div className='role-container'>
                <div className='role-name'>{workItem['role']}</div>
                <div className='role-duration'>
                    <SiGooglecalendar />
                     {' ' + workItem['duration']}</div>
            </div>
            <div className='role-about'>{workItem['about']}</div>
        </div>
    ); 
}

export default WorkInfo;