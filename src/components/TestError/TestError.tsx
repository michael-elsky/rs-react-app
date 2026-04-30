import classes from './TestError.module.css';

import Button from '../Ui/Button/Button';

import { Component } from 'react';

class TestError extends Component {
  render() {
    return (
      <div className={classes['app__test-error']}>
        <Button className={classes['app__error-btn']}>
          Error Button
        </Button>
      </div>
    );
  }
}

export default TestError;
