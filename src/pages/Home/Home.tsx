import { useState, type ChangeEvent, type SyntheticEvent } from 'react'

import Search from '../../components/Search'
import Result from '../../components/Result'
import TestError from '../../components/TestError'

import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../../utils/localStorageData'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import usePagination from '../../hooks/Pagination/usePagination'
import Pagination from '../../components/Pagination/Pagination'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import SelectedItems from '../../components/SelectedItems/SelectedItems'
import { useGetFilmsQuery } from '../../store/api'
import errorMessageType from '../../utils/errorMessageType'
import RefreshData from '../../components/RefreshData/RefreshData'

const Home = () => {
  const initialSearchValue = getLocalStorageData() || ''

  const [savedSearchValue, setSavedSearchValue] = useState(initialSearchValue)
  const [inputValue, setInputValue] = useState(initialSearchValue)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { data, isLoading, error } = useGetFilmsQuery(savedSearchValue)

  const errorMessage = errorMessageType(error)

  const dataChecked = Array.isArray(data?.results) ? data?.results : []

  const { paginatedData, handleNext, handlePrev } = usePagination(dataChecked)

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedEnteredSearchValue = inputValue.trim()

    if (savedSearchValue !== trimmedEnteredSearchValue) {
      setSavedSearchValue(trimmedEnteredSearchValue)

      saveLocalStorageData(trimmedEnteredSearchValue)

      navigate('/')
    }
  }

  const handleCloseDetails = () => {
    const currentPage = searchParams.get('page')

    navigate(`/?page=${currentPage}`)
  }

  return (
    <>
      <Search
        searchInputValue={inputValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <RefreshData />

      <Result
        data={paginatedData}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onClose={handleCloseDetails}
      >
        <Outlet context={{ data }} />
      </Result>

      <Pagination onNext={handleNext} onPrev={handlePrev} />

      {selectedItems.length > 0 && <SelectedItems />}

      <TestError />
    </>
  )
}

export default Home
