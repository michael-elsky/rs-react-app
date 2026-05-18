import { useState, type ChangeEvent, type SyntheticEvent } from 'react';

import Search from '../../components/Search';
import Result from '../../components/Result';
import TestError from '../../components/TestError';

import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../../utils/localStorageData';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import useFetchFilmsList from '../../hooks/useFetchList';
import usePagination from '../../hooks/Pagination/usePagination';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const initialSearchValue = getLocalStorageData() || '';

  const [savedSearchValue, setSavedSearchValue] = useState(initialSearchValue);
  const [inputValue, setInputValue] = useState(initialSearchValue);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data, isLoading, errorMessage } = useFetchFilmsList(savedSearchValue);

  const dataChecked = Array.isArray(data) ? data : [];

  const { paginatedData, handleNext, handlePrev } = usePagination(dataChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEnteredSearchValue = inputValue.trim();

    if (savedSearchValue !== trimmedEnteredSearchValue) {
      setSavedSearchValue(trimmedEnteredSearchValue);

      saveLocalStorageData(trimmedEnteredSearchValue);

      navigate('/');
    }
  };

  const handleCloseDetails = () => {
    const currentPage = searchParams.get('page');

    navigate(`/?page=${currentPage}`);
  };

  return (
    <>
      <Search
        searchInputValue={inputValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <Result
        data={paginatedData}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onClose={handleCloseDetails}
      >
        <Outlet context={{ data }} />
      </Result>

      <Pagination onNext={handleNext} onPrev={handlePrev} />

      <TestError />
    </>
  );
};

export default Home;
