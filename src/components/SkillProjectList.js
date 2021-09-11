import React from 'react';
import './SkillProjectList.css'
const SkillProjectList = ({SkillProjectList}) =>{
    const ProjecLinktMap = [];
    let key = 0;
    for(let count = 0; count < SkillProjectList.length; count++)
    {
        let project = SkillProjectList[count];
        ProjecLinktMap.push(
        <a href={project['link']} key={key}>
            {project['name']}
        </a>);
        if (count === SkillProjectList.length - 2){
            key++;
            ProjecLinktMap.push(<span key={key}>{" and "}</span>);
        }
        else if (count < SkillProjectList.length - 2){
            key++;
            ProjecLinktMap.push(<span key={key}>{" , "}</span>);
        }
        key++;
    }
    return (
        <div className='skill-project-list'>
            {ProjecLinktMap}
        </div>
    ); 
}

export default SkillProjectList;