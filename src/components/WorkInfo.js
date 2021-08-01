import React from 'react';

const WorkInfo = ({workItem}) =>{
    return (
        <div>
            <div>
                <div>{workItem['role']}</div>
                <div>{workItem['duration']}</div>
            </div>
            <div>{workItem['about']}</div>
        </div>
    ); 
}

export default WorkInfo;