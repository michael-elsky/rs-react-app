import './global.css';

import { Component, type SyntheticEvent } from 'react';

import Search from './components/Search';
import Main from './components/Main';
import Result from './components/Result';
import TestError from './components/TestError';

import {
  getLocalStorageData,
  saveLocalStorageData,
} from './utils/localStorageData';
import { fetchData } from './api/fetch';

class App extends Component {
  state = {
    data: null,
    isLoading: false,
    errorMessage: '',
    savedSearchValue: '',
  };

  fetchFilms = async (search: string) => {
    const url = search
      ? `https://swapi.py4e.com/api/films/?search=${search}`
      : 'https://swapi.py4e.com/api/films/';

    this.setState({ isLoading: true, errorMessage: '' });

    try {
      const data = await fetchData(url);

      this.setState({ data: data.results });
    } catch (error) {
      this.setState({ errorMessage: (error as Error).message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount(): void {
    const savedSearchValue = getLocalStorageData() || '';

    this.setState({ savedSearchValue });

    this.fetchFilms(savedSearchValue);
  }

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const enteredSearchValue = formData.get('searchInput') || '';
    const trimmedEnteredSearchValue = enteredSearchValue.toString().trim();

    if (this.state.savedSearchValue !== trimmedEnteredSearchValue) {
      this.setState({ savedSearchValue: trimmedEnteredSearchValue });

      saveLocalStorageData(trimmedEnteredSearchValue);
      this.fetchFilms(trimmedEnteredSearchValue);
    }
  };

  render() {
    return (
      <Main>
        <Search
          searchInputValue={this.state.savedSearchValue}
          handleSubmit={this.handleSubmit}
        />
        <Result
          data={this.state.data}
          isLoading={this.state.isLoading}
          errorMessage={this.state.errorMessage}
        />
        <TestError />
      </Main>
    );
  }
}

export default App;
