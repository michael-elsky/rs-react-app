import {
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from 'react';

import Search from '../../components/Search';
import Result from '../../components/Result';
import TestError from '../../components/TestError';

import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../../utils/localStorageData';
import { Outlet } from 'react-router-dom';
import useFetchFilmsList from '../../hooks/useFetchList';

const Home = () => {
  const initialSearchValue = getLocalStorageData() || '';

  const [savedSearchValue, setSavedSearchValue] = useState(initialSearchValue);
  const [inputValue, setInputValue] = useState(initialSearchValue);

  const { data, isLoading, errorMessage } = useFetchFilmsList(
    savedSearchValue,
  );

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
    <>
      <Search
        searchInputValue={inputValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <Result data={data} isLoading={isLoading} errorMessage={errorMessage}>
        <Outlet context={{ data }} />
      </Result>

      <TestError />
    </>
  );
};

export default Home;
