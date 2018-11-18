import React from 'react';
import './Experience.css'

const Experience = (props) => {
return( 
  <div className="Container" >
    {props.experience.map((exp) => (
      <div className="FullExpData" key={exp.CompanyName}>
      <div className="CompanyName">{exp.title} at {exp.CompanyName}</div>
      <div className="duration">{exp.duration}</div>
      <div className="description">{exp.description.map((desc,index) => (
        <div key={index} className="descItem" >{desc}</div>
      ))}</div>
      </div>
    ))}
  </div>
)
};

export default Experience;
