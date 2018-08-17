import React from 'react';
import Greeting from './Greeting/Greeting';
import Aux from 'react-aux';

// import ImgWro from '../../../assets/wroclawBg.jpg';

import './GreetingContainer';

const greetingContianer = (props) => {

  let greet = null;
  if (!props.show.showHome && !props.show.showAboutMe && !props.show.showProjects && !props.show.showContactForm) {
    greet = (
      <Aux>
        <Greeting show={props.show} />
        {
          // <img src={ImgWro} alt="" className='greetingContianer__img' />
        }
      </Aux>
    );
  }
   
  return (
    <div className='greetingContianer'>
      {greet}
    </div>
  )
}

export default greetingContianer;