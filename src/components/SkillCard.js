import React from 'react';
import { SiGooglecalendar, SiRubygems } from "react-icons/si"
import { SiCplusplus, SiCss3, 
    SiReact, SiPython, 
    SiJavascript, SiJava
 } from "react-icons/si";
import Rating from './Rating';
import SkillProjectList from './SkillProjectList';

const SkillCard = ({skill}) =>{
    const x = <div>A</div>;
    return (
        <div className = 'skill-card'>
            <div className="skill-card-heading">
                <div className="skill-card-icon"><SiCplusplus></SiCplusplus></div>
                <div className="skill-card-name">{skill.name}</div>
            </div>
            <div className="skill-card-info">
                <div id="skill-card-experience" className="skill-card-info-piece">
                    <div>Experience: </div>
                    <div className="skill-card-info-piece-val">{skill.experience}</div>
                </div>
                <div id="skill-card-rating" className="skill-card-info-piece">
                    <div>Rating: </div>
                    <Rating
                        piRating={skill.rating}
                        piOutOf={skill.outOf}
                        pActiveColor={"#EC521E"}
                        pInactiveColor={"gray"}
                        className="skill-card-info-piece-val"
                        ></Rating>
                </div>
                <div id="skill-card-projects" className="skill-card-info-piece">
                    <div>Projects:</div>
                    <SkillProjectList
                        SkillProjectList = {skill.projects}>
                    </SkillProjectList>
                </div>
            </div>
        </div>
    ); 
}

export default SkillCard;