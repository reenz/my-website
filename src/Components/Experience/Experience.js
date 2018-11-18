import React from 'react';

const Experience = (props) => {
return(
  <div>
    {props.experience.map((exp) => (
      <div key={exp.CompanyName}>
      <div>{exp.CompanyName}</div>
      <div>{exp.title}</div>
      <div>{exp.duration}</div>
      <div>{exp.description}</div>

      </div>
    ))}
  </div>
)
};

export default Experience;
