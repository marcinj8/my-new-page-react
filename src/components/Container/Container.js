import React from 'react';

import GreetingContianer from './GreetingContainer/GreetingContainer';
import AboutMe from './AboutMe/AboutMe';
import Projects from './ProjectsClass/Projects';
import ContactForm from './ContactFormClass/ContactForm'

const container = (props) => {
  
  return (
    <div>
      <GreetingContianer show={props.showComponents}/>
      <AboutMe show={props.showComponents}/>
      <Projects show={props.showComponents}/>
      <ContactForm show={props.showComponents}/>

      {
        // next containers
      }
    </div>
  )
}

export default container;