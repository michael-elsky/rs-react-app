'use client'

import classes from './Search.module.css'

import { ChangeEvent, SyntheticEvent, useState } from 'react'

import Button from '../Ui/Button/Button'

import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../../utils/localStorageData'
import { useRouter } from 'next/navigation'

const Search = () => {
  const initialSearchValue = getLocalStorageData() || ''

  const [inputValue, setInputValue] = useState(initialSearchValue)
  const [savedSearchValue, setSavedSearchValue] = useState(initialSearchValue)

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedEnteredSearchValue = inputValue.trim()

    if (savedSearchValue !== trimmedEnteredSearchValue) {
      setSavedSearchValue(trimmedEnteredSearchValue)

      saveLocalStorageData(trimmedEnteredSearchValue)

      router.push(`/?search=${trimmedEnteredSearchValue}`)
    }
  }

  return (
    <form className={classes.app__form} onSubmit={handleSubmit}>
      <label className={classes.app__label} htmlFor="searchInput">
        Search
      </label>
      <input
        className={classes.app__input}
        type="text"
        id="searchInput"
        name="searchInput"
        placeholder="Search items..."
        value={inputValue}
        onChange={handleChange}
      />
      <Button className={classes['app__search-btn']}>Search</Button>
    </form>
  )
}

export default Search
