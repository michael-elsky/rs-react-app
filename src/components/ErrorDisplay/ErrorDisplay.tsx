import classes from './ErrorDisplay.module.css';

import { Component } from 'react';

import type { ErrorDisplayProps } from './ErrorDisplay.type';
import Button from '../Ui/Button/Button';

class ErrorDisplay extends Component<ErrorDisplayProps> {
  render() {
    if (this.props.hasError) {
      return (
        <>
          <p className={classes['app__error-message']}>
            {this.props.errorMessage}
          </p>
          <Button
            className={classes['app__reset-error-btn']}
            onClick={this.props.onReset}
          >
            Reset error
          </Button>
        </>
      );
    }

    return (
      <p className={classes['app__error-message']}>{this.props.errorMessage}</p>
    );
  }
}

export default ErrorDisplay;
