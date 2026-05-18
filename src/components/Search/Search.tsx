import Button from '../Ui/Button/Button';
import classes from './Search.module.css';

import type { SearchProps } from './Search.types';

const Search = ({
  handleSubmit,
  handleChange,
  searchInputValue,
}: SearchProps) => {
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
        value={searchInputValue}
        onChange={handleChange}
      />
      <Button className={classes['app__search-btn']}>Search</Button>
    </form>
  );
};

export default Search;
