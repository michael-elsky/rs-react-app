'use client'

import Link from 'next/link'
import classes from './MainMenu.module.css'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const MainMenu = () => {
  const pathname = usePathname()
  const t = useTranslations('MainMenu')

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
          {t('home')}
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
          {t('about')}
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu
