import React from 'react';
import Hero from '../Hero/Hero'

const About = (props) => {
  return(
    <div>
     <div><Hero/></div>
     <div>{props.about}</div>
    </div>
  )
}

export default About ;
