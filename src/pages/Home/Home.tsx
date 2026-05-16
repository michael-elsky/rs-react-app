import {
  useEffect,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from 'react';

import Search from '../../components/Search';
import Main from '../../components/Main';
import Result from '../../components/Result';
import TestError from '../../components/TestError';

import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../../utils/localStorageData';
import { fetchData } from '../../api/fetch';

const Home = () => {
  const initialSearchValue = getLocalStorageData() || '';

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState(initialSearchValue);
  const [savedSearchValue, setSavedSearchValue] = useState(initialSearchValue);

  const fetchFilms = async (search: string) => {
    const url = search
      ? `https://swapi.py4e.com/api/films/?search=${search}`
      : 'https://swapi.py4e.com/api/films/';

    setIsLoading(true);
    setErrorMessage('');

    try {
      const data = await fetchData(url);

      setData(data.results);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFilms(savedSearchValue);
  }, [savedSearchValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEnteredSearchValue = inputValue.trim();

    if (savedSearchValue !== trimmedEnteredSearchValue) {
      setSavedSearchValue(trimmedEnteredSearchValue);

      saveLocalStorageData(trimmedEnteredSearchValue);
    }
  };

  return (
    <Main>
      <Search
        searchInputValue={inputValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Result data={data} isLoading={isLoading} errorMessage={errorMessage} />
      <TestError />
    </Main>
  );
};

export default Home;
