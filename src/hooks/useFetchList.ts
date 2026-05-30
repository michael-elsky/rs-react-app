import { useEffect, useState } from 'react'
import { fetchData } from '../api/fetch'
import type { DataProps } from '../components/Result/Result.types'

const useFetchFilmsList = (savedSearchValue: string) => {
  const [data, setData] = useState<DataProps[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchFilms = async (searchValue: string) => {
      const url = searchValue
        ? `https://swapi.py4e.com/api/films/?search=${searchValue}`
        : `https://swapi.py4e.com/api/films/`

      setIsLoading(true)
      setErrorMessage('')

      try {
        const data = await fetchData(url)

        setData(data.results || data)
      } catch (error) {
        setErrorMessage((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFilms(savedSearchValue)
  }, [savedSearchValue])

  return {
    data,
    isLoading,
    errorMessage,
  }
}

export default useFetchFilmsList
