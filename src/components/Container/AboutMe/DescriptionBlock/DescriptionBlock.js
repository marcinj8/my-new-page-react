import React from 'react';

import './DescriptionBlock.css';

const aboutMeBlock = (props) => {

  return (
    <div className='aboutMeBlock'>
      <h3 className='aboutMeBlock__title'>{props.title}</h3>
      <div className='aboutMeBlock__description'>{props.content}</div>
    </div>
  )

}

export default aboutMeBlock;