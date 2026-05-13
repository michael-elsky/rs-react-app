import classes from './TestError.module.css';

import { useState } from 'react';

import Button from '../Ui/Button/Button';

const TestError = () => {
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(true);
  };

  if (isError) {
    setIsError(false);

    throw new Error('Test error');
  }

  return (
    <div className={classes['app__test-error']}>
      <Button className={classes['app__error-btn']} onClick={handleClick}>
        Error Button
      </Button>
    </div>
  );
};

export default TestError;
