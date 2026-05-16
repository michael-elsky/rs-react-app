import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import type { DataProps } from './Result.types';
import ResultList from './ResultList/ResultList';

const renderContent = (
  data: DataProps[],
  isLoading: boolean,
  errorMessage: string,
) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }

  if (!data.length) {
    return <ErrorDisplay errorMessage="No results found" />;
  }

  return (
    <>
      <ResultList data={data} />
    </>
  );
};

export default renderContent;
