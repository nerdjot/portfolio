import React from 'react';
const SkillMenuArray = ({skills, setSkillState, skillState}) =>{

    const skillMenuList = skills.map((skill) =>
        <div id={"skill-menu-button"+skill.id} key={skill.id} className={(skillState===skill.id-1)?"skill-menu-button-activate":"skill-menu"} onClick={()=>{setSkillState(skill.id - 1 )}} ><skill.icon></skill.icon></div>);
    return (
        <div className="skill-array">
            {skillMenuList}
        </div>
    ); 
}

export default SkillMenuArray;