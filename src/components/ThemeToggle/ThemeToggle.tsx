import classes from './ThemeToggle.module.css'

import Button from '../Ui/Button/Button'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const classNames =
    theme === 'light'
      ? classes['app__toggle-theme']
      : `${classes['app__toggle-theme']} ${classes['app__toggle-theme--dark']}`

  return (
    <Button className={classNames} onClick={toggleTheme}>
      Theme toggle
    </Button>
  )
}

export default ThemeToggle
