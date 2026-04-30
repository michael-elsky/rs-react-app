import Button from '../Ui/Button/Button';
import classes from './Search.module.css';

import { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className={classes.app__form}>
        <label
          className={classes.app__label}
          htmlFor="searchInput"
        >
          Search
        </label>
        <input
          className={classes.app__input}
          type="text"
          id="searchInput"
          placeholder="Search items..."
        />
        <Button className={classes['app__search-btn']} type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default Search;
