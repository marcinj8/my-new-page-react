import React from 'react';

import './Home.css'

const home = props => {

  let homeContent = null;
  let style = ['home'];

  if (props.show.showHome) {
    homeContent = (
      <div className={style.join(' ')}>
        <h3 className='home__title'>Goals of this Page</h3>
          <div>
            Main target of this page is show my React skills after course in Udemy.
            This is simple SPA builded in few hours during few days to use basic elements from React.
            My next step is build more advanced page with routing and redux.
          </div>
      </div>
    );
    style.push('animate');
  }

  return homeContent
}

export default home;