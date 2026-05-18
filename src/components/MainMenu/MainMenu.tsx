import classes from './MainMenu.module.css';

import { NavLink } from 'react-router-dom';
const MainMenu = () => {
  return (
    <ul className={classes.app_menu}>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
