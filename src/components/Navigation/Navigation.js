import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Brand from './Brand/Brand';
import DrawerToggler from '../Sidebar/MenuToggler/MenuToggler';

import './Navigation.css';

const navigation = (props) => {
  return (
    <div className='navigation'>
      <Brand />
      <span className='onlyDesktop'>
        <NavigationItem click={() => props.navigationHandler('showHome')} itemActive={props.showComponents.showHome} >Home</NavigationItem>
        <NavigationItem click={() => props.navigationHandler('showAboutMe')} itemActive={props.showComponents.showAboutMe}>About me</NavigationItem>
        <NavigationItem click={() => props.navigationHandler('showProjects')} itemActive={props.showComponents.showProjects}>Projects</NavigationItem>
        <NavigationItem click={() => props.navigationHandler('showContactForm')} itemActive={props.showComponents.showContactForm}>Contact</NavigationItem>
      </span>
      <DrawerToggler clicked={props.toggleSideMenu}/>
    </div>
  )
}

export default navigation;