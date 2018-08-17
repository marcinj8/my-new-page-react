import React, { Component } from 'react';
import Aux from 'react-aux';
import Img from '../../../assets/imgQuoteProjects.jpg'

import Project from './Project/Project';

import './Projects.css'

class Projects extends Component {
  state = {
    projects: [
      { title: 'My repository', description: 'Below you can find link to my repository, where you can checkout my code.', link: 'https://github.com/marcinj8' },
      { title: 'My page', description: 'jquery, ajax, live form validation, rwd', link: 'http://www.marcinjanerka.com' },
      { title: 'CV + portfolio', description: 'jquery, ajax, rwd', link: 'http://www.experience.marcinjanerka.com' },
      { title: 'Diet Calculator', description: 'pure JS, methodology BEM, SCSS, live data validation - js', link: 'http://www.diet.marcinjanerka.com' },
      { title: 'Pesel + Person generator ', description: 'pure JS, methodology BEM, SCSS, live data validation - js + RegEx validation, RWD', link: 'http://www.person-generator.marcinjanerka.com' },
      { title: 'Currency calculator', description: 'React, get API - Fixer.io', link: 'http://www.currency-react.marcinjanerka.com' },
      { title: 'Check weather', description: 'jquery, sass, BEM, openweather api', link: 'http://www.weather.marcinjanerka.com' },
      { title: 'Workout', description: ' ajax, methodology BEM, SCSS, jQuery, scroll effects + smoth scroll, Google map API, DESKTOP ONLY', link: 'http://www.workout.marcinjanerka.com' },
    ]
  }

  render() {
    let showProjects = null;
    let style = ['projectContainer'];
    let renderProjects = this.state.projects.map(project => {
      return (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          link={project.link} />
      )
    });
    if (this.props.show.showProjects) {
      style = ['projectContainer', 'projectContainer__open']

      showProjects = (
        <Aux>
          <img className='project__img showImg' src={Img} alt="" />
          <div className={style.join(' ')}>
            {renderProjects}
          </div>
        </Aux>
      )
    }

    return showProjects

  }
}

export default Projects;