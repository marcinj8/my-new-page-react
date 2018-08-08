import React from 'react';

import './MenuToggler.css';

const drawerToggler = props => (
  <div onClick={props.clicked} className='menuToggler'>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggler; 