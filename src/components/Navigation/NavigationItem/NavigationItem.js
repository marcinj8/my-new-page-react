import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => {
  let style = ['navigation__Item'];

  if (props.itemActive) {
    style.push('navigation__Item--active');
  } else {
    style.push('navigation__Item--noActive');
  }
  return <li onClick={props.click} className={style.join(' ')}>{props.children}</li>
}

export default navigationItem;