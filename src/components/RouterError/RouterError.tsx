import { useNavigate, useRouteError } from 'react-router-dom';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

const RouterError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleResetError = () => {
    navigate('/');
  };

  return (
    <ErrorDisplay
      hasError={true}
      onReset={handleResetError}
      errorMessage={
        error instanceof Error ? error.message : 'Something went wrong'
      }
    />
  );
};

export default RouterError;
