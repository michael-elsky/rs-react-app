import Button from '../Ui/Button/Button';
import classes from './Search.module.css';

import { Component } from 'react';
import type { SearchProps } from './Search.types';

class Search extends Component<SearchProps> {
  render() {
    return (
      <form className={classes.app__form} onSubmit={this.props.handleSubmit}>
        <label className={classes.app__label} htmlFor="searchInput">
          Search
        </label>
        <input
          className={classes.app__input}
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Search items..."
          defaultValue={this.props.searchInputValue}
        />
        <Button className={classes['app__search-btn']}>Search</Button>
      </form>
    );
  }
}

export default Search;
