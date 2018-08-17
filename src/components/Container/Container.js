import React from 'react';

import GreetingContianer from './GreetingContainer/GreetingContainer';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Projects from './ProjectsClass/Projects';
import ContactForm from './ContactFormClass/ContactForm'

const container = (props) => {
  
  return (
    <div>
      <GreetingContianer 
        clicked={props}
        show={props.showComponents}/>
      <Home show={props.showComponents}/>
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