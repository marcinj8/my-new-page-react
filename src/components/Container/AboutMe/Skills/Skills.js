import React from 'react';

import './Skills.css';

const skills = (props) => {
  let workingWith = props.skills.workingWith.map(skill => {
    return <li key={skill.skillName}>{skill.skillName}</li>
  });
  let experienceWith = props.skills.experienceWith.map(skill => {
    return <li key={skill.skillName}>{skill.skillName}</li>
  });
  return (
    <div className='skills'>
      <ul className='skill__list'>
        <h5>Working with</h5>
        {workingWith}
      </ul>
      <ul className='skill__list'>
        <h5>Expernience with</h5>
        {experienceWith}
      </ul>
    </div>
  )
}

export default skills;