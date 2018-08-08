import React from 'react';
import Aux from 'react-aux';

import Backdrop from '../Backdrop/Backdrop';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

import './Sidebar.css';

const sidebar = (props) => {

  let style = ['sidebar', 'close'];
  if (props.showComponents.showSidebar) {
    style = ['sidebar', 'open'];

  }

  return (
    <Aux>
      <Backdrop show={props.showComponents.showSidebar} clicked={props.toggleSideMenu} />
      <div className={style.join(' ')}>
        <NavigationItem click={() => props.navigationHandler('showHome')} itemActive={props.showComponents.showHome} >Home</NavigationItem>
        <NavigationItem click={() => props.navigationHandler('showAboutMe')} itemActive={props.showComponents.showAboutMe}>About me</NavigationItem>
        <NavigationItem click={() => props.navigationHandler('showProjects')} itemActive={props.showComponents.showProjects}>Projects</NavigationItem>
        <NavigationItem click={() => props.navigationHandler('showContactForm')} itemActive={props.showComponents.showContactForm}>Contact</NavigationItem>
      </div>
    </Aux>

  )
}

export default sidebar;