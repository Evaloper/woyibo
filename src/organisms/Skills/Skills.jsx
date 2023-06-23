import React from "react";
import "./Skills.css"

export default function Skills() {
    return (
        <div className="skills-sect">
            <div className="skill-header">
                <h1 className="skill-para" >SKILLS</h1>
            </div>
            <div className="skills-list">
                <h3 className="margin-styling"><span className="number-span">01</span> Product Branding</h3>
                <h3><span className="number-span">02</span> Logo</h3>
                <h3 className="margin-styling"><span className="number-span">03</span> Visual Content</h3>
                <h3><span className="number-span">04</span> Graphic Design</h3>
                <h3 className="margin-styling"><span className="number-span">05</span> Digital Printing</h3>
            </div>
        </div>
    );
}