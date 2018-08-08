import React from 'react';
import Greeting from './Greeting/Greeting';

import './GreetingContainer';

const greetingContianer = (props) => {

  let greet = null;
  if (!props.show.showHome && !props.show.showAboutMe && !props.show.showProjects && !props.show.showContactForm)
    greet = <Greeting show={props.show} />
  return (
    <div className='greetingContianer'>
      {greet}
    </div>
  )
}

export default greetingContianer;