import classes from './Search.module.css'

import Button from '../Ui/Button/Button'

import { useLocale, useTranslations } from 'next-intl'
import { handleSearchAction } from '@/actions/search'

const Search = ({ initialValue }: { initialValue?: string }) => {
  const t = useTranslations('Search')
  const locale = useLocale()

  return (
    <form className={classes.app__form} action={handleSearchAction}>
      <input type="hidden" name="locale" value={locale} />

      <label className={classes.app__label} htmlFor="searchInput">
        {t('label')}
      </label>
      <input
        className={classes.app__input}
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder={t('placeholder')}
        defaultValue={initialValue}
      />
      <Button className={classes['app__search-btn']}>{t('button')}</Button>
    </form>
  )
}

export default Search
