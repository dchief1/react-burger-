
import classes from './NavItems.module.css';
import NavigationItem from './NavigationItem/NavItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="/" exact>Burger Builder</NavigationItem>
       {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
       {!props.isAuthenticated 
         ? <NavigationItem link="/auth">Authenticate</NavigationItem>
         : <NavigationItem link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;