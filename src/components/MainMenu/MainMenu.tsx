import classes from './MainMenu.module.css'

import { NavLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <ul className={classes.app_menu}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes['app__menu-link']} ${classes['app__menu-link--active']}`
              : classes['app__menu-link']
          }
          to={'/'}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes['app__menu-link']} ${classes['app__menu-link--active']}`
              : classes['app__menu-link']
          }
          to={'/about'}
        >
          About
        </NavLink>
      </li>
    </ul>
  )
}

export default MainMenu
