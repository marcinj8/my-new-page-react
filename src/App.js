import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';

import './App.css';

class App extends Component {
  state = {
    active: {
      showGreetings: false,
      showHome: false,
      showAboutMe: false,
      showProjects: false,
      showContactForm: false,
      showSidebar: false
    }

  }

  componentDidMount() {
    let currentState = {
      ...this.state.active
    }
    currentState['showGreetings'] = true
    this.setState({ active: currentState })
  }

  navigationHandler = (setActive) => {
    let currentState = {
      ...this.state.active
    }
    for (let component in currentState) {
      currentState[component] = false;
    }
    currentState[setActive] = true

    this.setState({
      active: currentState
    })
  }

  togglerSidebarHandler = () => {
    let currentState = {
      ...this.state.active
    }
    currentState['showSidebar'] = !this.state.active.showSidebar
    this.setState({ active: currentState })
  }
  render() {

    return (
      <div className="App">
        <Navigation
          toggleSideMenu={this.togglerSidebarHandler}
          navigationHandler={this.navigationHandler}
          showComponents={this.state.active} />
        <Sidebar
          navigationHandler={this.navigationHandler}
          toggleSideMenu={this.togglerSidebarHandler}
          showComponents={this.state.active} />
        <Container showComponents={this.state.active} />
      </div>
    );
  }
}

export default App;
