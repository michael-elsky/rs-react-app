'use client'

import classes from './Language.module.css'

import Button from '../Ui/Button/Button'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'

const LanguageToggle = () => {
  const lang = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const classNames =
    lang === 'en'
      ? classes['app__toggle-lang']
      : `${classes['app__toggle-lang']} ${classes['app__toggle-lang--dark']}`

  const toggleLang = () => {
    const nextLocale = lang === 'en' ? 'ru' : 'en'

    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <Button className={classNames} onClick={toggleLang}>
      <span className={classes['app__toggle-lang-text']}>
        {lang === 'en' ? 'RU' : 'EN'}
      </span>
    </Button>
  )
}

export default LanguageToggle
