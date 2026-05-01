import classes from './NoResult.module.css';

import { Component } from 'react';

class NoResult extends Component {
  render() {
    return <p className={classes['app__no-result']}>No results found</p>;
  }
}

export default NoResult;
