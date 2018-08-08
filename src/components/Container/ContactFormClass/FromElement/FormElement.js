import React from 'react';

import './FormELement.css';

const formElement = props => {

  let element = null;
  let inputStyle = ['form__element'];

  switch (props.elementType) {
    case ('input'):
      element = <input
        className={inputStyle.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('textArea'):
      element = <textarea
        className={inputStyle.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    default:
      element = null;
      break;
  }

  return (
    <div className='from__elementBlock'>
      <label htmlFor="" className='form__label'>{props.label}</label>
      {element}
    </div>
  )
}

export default formElement;