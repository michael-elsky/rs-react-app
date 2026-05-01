import classes from './ErrorDisplay.module.css';

import { Component } from 'react';

import type { ErrorDisplayProps } from './ErrorDisplay.type';

class ErrorDisplay extends Component<ErrorDisplayProps> {
  render() {
    return <p className={classes['app__error-message']}>{this.props.errorMessage}</p>;
  }
}

export default ErrorDisplay;
