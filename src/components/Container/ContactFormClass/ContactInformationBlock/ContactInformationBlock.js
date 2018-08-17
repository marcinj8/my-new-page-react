import React from 'react';

import './ContactInformationBlock.css';

const contactInformationBlock = props => (
  
  <div className='contactInformation show'>
    <h5>{props.title}</h5>
    <a href={props.href}>{props.label}</a>
  </div>
)

export default contactInformationBlock;