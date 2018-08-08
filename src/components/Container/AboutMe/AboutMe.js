import React, { Component } from 'react';

import DescriptionBlock from './DescriptionBlock/DescriptionBlock';

import './AboutMe.css';

class AboutMe extends Component {
  state = {
    informations: [
      { title: 'Begin from zero... Courses and practices', content: 'I started my adventure with programming last year. I decide to take a part in JavaScript course with front-ends elements. After this course I was learning by my self, mainly with Udemy. Now I am looking for my first job' },
      { title: 'Experience', content: 'My experience is based on my own projects, which you can check on PROJECTS overlap in the menu. Just click on it to see my projects with details and see how they look. I want to learn more in front-end and the backend languages like PHP or Python' },
      { title: 'Why me?', content: 'Programming is one of those things, that make me pleasure. Learning it is not enough for me, I want to understand how it is working.' },
      { title: 'Skills', content: 'Let me invite you to check my CV on www.experience.marcinjanerka.com, to see more information about me. Link you can also find on my projects. Additionaly below you can view my skills.' },
    ],
    skills: {
      workingWith: [
        { skillName: 'JavaScript' },
        { skillName: 'React' },
        { skillName: 'CSS3/SCSS' },
        { skillName: 'BEM/OOCSS' },
        { skillName: 'HTML5' },
        { skillName: 'jQuery' },
        { skillName: 'AJAX' },
        { skillName: 'RWD' },
        { skillName: 'work with API' },
        { skillName: 'GIT' },
        { skillName: 'Google Firebase' },
      ],
      experienceWith: [
        { skillName: 'Angular 2' },
        { skillName: 'PhotoShop' },
        { skillName: 'Wordpres' },
      ]
    }
  }
  render() {
    let descriptions = this.state.informations.map(information => (
      <DescriptionBlock
        key={information.title}
        title={information.title}
        content={information.content} />
    ))

    let style = ['aboutMe']
    let showContent = null
    if (this.props.show.showAboutMe) {
      style = ['aboutMe', 'aboutMe__open']
      showContent = (
        <div className={style.join(' ')}>
          {descriptions}
        </div>
      )

    }
    return  showContent 
  }
}

export default AboutMe;