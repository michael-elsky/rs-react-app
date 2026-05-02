import classes from './TestError.module.css';

import { Component } from 'react';

import type { TestErrorState } from './TestError.types';
import Button from '../Ui/Button/Button';

class TestError extends Component {
  state: TestErrorState = {
    isError: false,
  };

  handleClick = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Test error');
    }

    return (
      <div className={classes['app__test-error']}>
        <Button
          className={classes['app__error-btn']}
          onClick={this.handleClick}
        >
          Error Button
        </Button>
      </div>
    );
  }
}

export default TestError;
