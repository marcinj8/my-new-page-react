import React from 'react';

import './Greeting.css';

const greeting = (props) => {
  let styleH2 = ['greeting__grettingIntroduce'];
  let styleH4 = ['greeting__grettingInvite'];
  let startDiv = ['greeting__start'];
  
  if (props.show.showGreetings) {
    styleH2.push('greeting__grettingIntroduce--active');
    styleH4.push('greeting__grettingInvite--active');
    startDiv.push('greeting__start--active');
  } else {
    styleH2.push('greeting__grettingIntroduce--noActive');
    styleH4.push('greeting__grettingInvite--noActive');
    startDiv.push('greeting__start--noActive');
  }

  return (
    <div className='greeting'>
      <h2 className={styleH2.join(' ')}>Hello I'm Marcin!</h2>
      <h4 className={styleH4.join(' ')}>Welcome on my page</h4>
      <div onClick={props.clicked}className={startDiv.join(' ')}> Start </div>
    </div>
  )
}

export default greeting;