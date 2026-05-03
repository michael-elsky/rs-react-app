import classes from './LoadingSpinner.module.css';

import { Component } from 'react';

class LoadingSpinner extends Component {
  render() {
    return <div className={classes.app__spinner}>Loading...</div>;
  }
}

export default LoadingSpinner;
