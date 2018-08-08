import React from 'react';

import './Project.css';

const project = (props) => (
  <div className='singleProject'>
    <h2 className={'singleProject__title'}>{props.title}</h2>
    <div className={'singleProject__desc'}>Used: {props.description}</div>
    <div><a className={'singleProject__link'}href={props.link}>Visit Page</a></div>
  </div>
)

export default project;