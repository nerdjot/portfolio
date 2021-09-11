import React from 'react';
import './Intro.css';
import image from '../images/godfather.jpg';
const Intro = () =>{
    return (
        <div className="intro-page">
            {/*<div className="intro-hello">
                Salve! I'm
            </div>
            <div className="intro-name">
                Navjot Singh
    </div>*/}
            <div className="intro-image-text">
                <img className="intro-image" src={image} />
                <div className="intro-codefather">
                    The <span className="intro-puppet">@</span><br/>Codefather
                </div>
            </div>
        </div>
    ); 
}

export default Intro;