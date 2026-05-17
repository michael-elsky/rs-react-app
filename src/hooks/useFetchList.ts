import { useEffect, useState } from 'react';
import { fetchData } from '../api/fetch';

const useFetchFilmsList = (savedSearchValue: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchFilms = async (searchValue: string) => {
      const url = searchValue
        ? `https://swapi.py4e.com/api/films/?search=${searchValue}`
        : `https://swapi.py4e.com/api/films/`;

      setIsLoading(true);
      setErrorMessage('');

      try {
        const data = await fetchData(url);
        console.log(data);

        setData(data.results || data);
      } catch (error) {
        setErrorMessage((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms(savedSearchValue);
  }, [savedSearchValue]);

  return {
    data,
    isLoading,
    errorMessage,
  };
};

export default useFetchFilmsList;
