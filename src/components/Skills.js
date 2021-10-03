import React, {useState} from 'react';
import './Skills.css';
import SkillCard from './SkillCard';
import SkillMenuArray from './SkillMenuArray';
import { SiCplusplus, SiCss3, 
    SiReact, SiPython, 
    SiJavascript, SiJava
 } from "react-icons/si";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";



const Skills = ({skills}) =>{
    const [skillState, setSkillState] = useState(0);

    const DecrementSkillState=()=>{
        if (skillState === 0)
        {
            setSkillState(skills.length - 1)
        }
        else
        {
            setSkillState(skillState-1);
        }
    }
    
    const IncrementSkillState=()=>{
        setSkillState((skillState+1)%skills.length);
    }

    return (
        <div id = "skill-page" className="section-page">
            <div className="horizontal-half">
                <div id="skill-heading" className='section-heading'>{"Skills"}</div>
                <div className="skill-card-marque">
                    <div onClick={()=>{DecrementSkillState()}} className="skill-card-nav"><MdNavigateBefore></MdNavigateBefore></div>
                    <SkillCard skill={skills[skillState]}></SkillCard>
                    <div onClick={()=>{IncrementSkillState()}} className="skill-card-nav"><MdNavigateNext></MdNavigateNext></div>
                </div>
            </div>
            <div id="half2" className="horizontal-half" >
                <div id='skill-puppet' unselectable="on" className='intro-puppet'>@</div>
                <SkillMenuArray skills={skills} setSkillState={setSkillState}skillState = {skillState}></SkillMenuArray>
            </div>
            {}
            {/*<div className='section-heading'>{"</experience>"}</div>*/}
        </div>
    ); 
}

export default Skills;