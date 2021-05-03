import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxx from '../../../hoc/Auxx/Auxx';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
       attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
       <Auxx>
          <Backdrop show={props.open} clicked={props.closed}/>
          <div className={attachedClasses.join(' ')} onClick={props.closed}>
              <div className={classes.Logo}>
                <Logo />
              </div>
              <nav>
                  <NavigationItems isAuthenticated={props.isAuth} />
              </nav>
          </div>
       </Auxx>
    );
};

export default sideDrawer;