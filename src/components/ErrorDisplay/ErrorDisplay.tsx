import classes from './ErrorDisplay.module.css';

import type { ErrorDisplayProps } from './ErrorDisplay.types';
import Button from '../Ui/Button/Button';

const ErrorDisplay = ({
  hasError,
  errorMessage,
  onReset,
}: ErrorDisplayProps) => {
  if (hasError) {
    return (
      <>
        <p className={classes['app__error-message']}>{errorMessage}</p>
        <Button className={classes['app__reset-error-btn']} onClick={onReset}>
          Reset error
        </Button>
      </>
    );
  }

  return <p className={classes['app__error-message']}>{errorMessage}</p>;
};

export default ErrorDisplay;
