'use client'

import Link from 'next/link'
import classes from './MainMenu.module.css'

import { usePathname } from 'next/navigation'

const MainMenu = () => {
  const pathname = usePathname()

  return (
    <ul className={classes.app_menu}>
      <li>
        <Link
          href={'/'}
          className={
            pathname === '/'
              ? `${classes['app__menu-link']} ${classes['app__menu-link--active']}`
              : classes['app__menu-link']
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={'/about'}
          className={
            pathname === '/about'
              ? `${classes['app__menu-link']} ${classes['app__menu-link--active']}`
              : classes['app__menu-link']
          }
        >
          About
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu
